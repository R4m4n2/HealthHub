function fetchUserPickedChallenges() {
  const userId = "userId"; // Replace with actual user ID
  const userPicksRef = firebase.database().ref("userPicks/" + userId);

  userPicksRef
    .once("value")
    .then((snapshot) => {
      if (snapshot.exists()) {
        const userPicks = snapshot.val();
        displayUserPickedChallenges(userPicks);
      } else {
        console.log("No user picks available");
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

document.addEventListener("DOMContentLoaded", () => {
  updateTitleWithCurrentMonth();
  fetchUserPickedChallenges();
  document
    .getElementById("pickedChallengesContainer")
    .addEventListener("click", function (e) {
      if (e.target && e.target.matches(".leaveChallengeBtn")) {
        displayLeavingImage(e.target.closest(".challenge"));
      } else if (e.target && e.target.matches(".completeChallengeBtn")) {
        displayCompletionImage(e.target.closest(".challenge"));
      }
    });
});

// Replaced with a firebase version
// function removeChallengeFromLocalStorage(challengeTitle) {
//   let userPicks = JSON.parse(localStorage.getItem("userPicks")) || [];
//   userPicks = userPicks.filter(
//     (challenge) => challenge.title !== challengeTitle
//   );
//   localStorage.setItem("userPicks", JSON.stringify(userPicks));
// }

function removeChallengeFromUserPicks(challengeTitle) {
  const userId = "userId"; // Replace with actual user ID
  const userPicksRef = firebase.database().ref("userPicks/" + userId);

  userPicksRef
    .once("value")
    .then((snapshot) => {
      if (snapshot.exists()) {
        let userPicks = snapshot.val();
        userPicks = userPicks.filter(
          (challenge) => challenge.title !== challengeTitle
        );
        userPicksRef.set(userPicks);
      }
    })
    .catch((error) => {
      console.error(error);
    });
}
// Safe removal function
function safelyRemoveElement(parent, child) {
  if (parent && child && parent.contains(child)) {
    parent.removeChild(child);
  }
}

function displayUserPickedChallenges(userPicks) {
  const container = document.getElementById("pickedChallengesContainer");
  const template = document.getElementById("challengeTemplate").content;
  const userId = "userId";

  container.innerHTML = "";

  userPicks.forEach((challenge) => {
    let challengeClone = document.importNode(template, true);

    challengeClone.querySelector(".challengeImage").src = challenge.image;
    challengeClone.querySelector(".challengeTitle").textContent =
      challenge.title;
    challengeClone.querySelector(".challengeInfo").textContent =
      challenge.description;

    let slider = challengeClone.querySelector(".progress-slider");
    let sliderValueDisplay = challengeClone.querySelector(".slider-value");

    const progressRef = firebase
      .database()
      .ref(`userProgress/${userId}/${challenge.title}`);
    progressRef.once("value").then((snapshot) => {
      if (snapshot.exists()) {
        const savedValue = snapshot.val();
        slider.value = savedValue;
        sliderValueDisplay.textContent = savedValue + "%";
      }
    });

    slider.addEventListener("input", function () {
      let value = this.value;
      sliderValueDisplay.textContent = value + "%";
      progressRef.set(value);
    });

    challengeClone
      .querySelector(".leaveChallengeBtn")
      .addEventListener("click", function () {
        safelyRemoveElement(container, challengeClone);
        removeChallengeFromUserPicks(challenge.title);
        firebase
          .database()
          .ref(`userProgress/${userId}/${challenge.title}`)
          .remove()
          .catch((error) => {
            console.error("Error removing data: ", error);
          });
      });

    challengeClone
      .querySelector(".completeChallengeBtn")
      .addEventListener("click", function () {
        displayCompletionImage(challengeClone);
        safelyRemoveElement(container, challengeClone);
        removeChallengeFromUserPicks(challenge.title);
        firebase
          .database()
          .ref(`userProgress/${userId}/${challenge.title}`)
          .remove()
          .catch((error) => {
            console.error("Error removing data: ", error);
          });
      });

    container.appendChild(challengeClone);
  });
}

function displayCompletionImage(challengeElement) {
  // Get the challenge title before clearing the content
  const challengeTitleElement =
    challengeElement.querySelector(".challengeTitle");
  if (!challengeTitleElement) {
    console.error("Challenge title element not found");
    return; // Exit the function if challenge title element is not found
  }
  const challengeTitle = challengeTitleElement.textContent;

  const completionImage = document.createElement("img");
  completionImage.src = "./images/completed.png"; // Replace with your completion image path
  completionImage.style.width = "200px";
  completionImage.style.maxHeight = "200px";
  // Update card styling for image display
  challengeElement.style.border = "none";
  challengeElement.style.padding = "0";
  challengeElement.style.justifyContent = "center";
  challengeElement.style.alignItems = "center";
  challengeElement.style.backgroundColor = "transparent";
  challengeElement.innerHTML = ""; // Clear the challenge content
  challengeElement.appendChild(completionImage);

  // Remove image after 1 second and the challenge element
  setTimeout(() => {
    challengeElement.remove();
    removeChallengeFromUserPicks(challengeTitle);
  }, 1000);
}

function displayLeavingImage(challengeElement) {
  // Get the challenge title before clearing the content
  const challengeTitle =
    challengeElement.querySelector(".challengeTitle").textContent;

  const leavingImage = document.createElement("img");
  leavingImage.src = "./images/exit.png"; // Replace with your leaving image path
  leavingImage.style.width = "200px";
  leavingImage.style.maxHeight = "200px";

  // Update card styling for image display
  challengeElement.style.border = "none";
  challengeElement.style.padding = "0";
  challengeElement.style.justifyContent = "center";
  challengeElement.style.alignItems = "center";
  challengeElement.style.backgroundColor = "transparent";
  challengeElement.innerHTML = ""; // Clear the challenge content
  challengeElement.appendChild(leavingImage);

  // Remove image and challenge element after 1 second
  setTimeout(() => {
    challengeElement.remove();
    removeChallengeFromUserPicks(challengeTitle);
  }, 1000);
}

function updateTitleWithCurrentMonth() {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const currentDate = new Date();
  const currentMonthName = monthNames[currentDate.getMonth()];
  console.log(currentMonthName);

  const titleElement = document.querySelector(".explore-title");
  if (titleElement) {
    titleElement.textContent += currentMonthName;
  }
}
