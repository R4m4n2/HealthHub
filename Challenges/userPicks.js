document.addEventListener("DOMContentLoaded", () => {
  updateTitleWithCurrentMonth();
  displayUserPickedChallenges();
  document
    .getElementById("pickedChallengesContainer")
    .addEventListener("click", function (e) {
      if (e.target && e.target.matches(".leaveChallengeBtn")) {
        const challengeElement = e.target.closest(".challenge");
        const challengeTitle =
          challengeElement.querySelector(".challengeTitle").textContent;
        removeChallengeFromLocalStorage(challengeTitle);
        challengeElement.remove();
      } else if (e.target && e.target.matches(".completeChallengeBtn")) {
        displayCompletionImage(e.target.closest(".challenge"));
      }
    });
});

function removeChallengeFromLocalStorage(challengeTitle) {
  let userPicks = JSON.parse(localStorage.getItem("userPicks")) || [];
  userPicks = userPicks.filter(
    (challenge) => challenge.title !== challengeTitle
  );
  localStorage.setItem("userPicks", JSON.stringify(userPicks));
}

function displayUserPickedChallenges() {
  const container = document.getElementById("pickedChallengesContainer");
  const template = document.getElementById("challengeTemplate").content;
  const userPicks = JSON.parse(localStorage.getItem("userPicks")) || [];

  userPicks.forEach((challenge) => {
    let challengeClone = document.importNode(template, true);

    challengeClone.querySelector(".challengeImage").src = challenge.image;
    challengeClone.querySelector(".challengeImage").alt = "Challenge Image";
    challengeClone.querySelector(".challengeTitle").textContent =
      challenge.title;
    challengeClone.querySelector(".challengeInfo").textContent =
      challenge.description;

    // Event listener for leave challenge button
    challengeClone
      .querySelector(".leaveChallengeBtn")
      .addEventListener("click", function () {
        container.removeChild(challengeClone);
      });

    // Event listener for challenge complete button
    challengeClone
      .querySelector(".completeChallengeBtn")
      .addEventListener("click", function () {
        displayCompletionImage(challengeClone);
      });

    container.appendChild(challengeClone);
  });
}

function displayCompletionImage(challengeElement) {
  // Get the challenge title before clearing the content
  const challengeTitle =
    challengeElement.querySelector(".challengeTitle").textContent;

  const completionImage = document.createElement("img");
  completionImage.src = "./images/completed.png"; // Replace with your completion image path
  completionImage.style.width = "300px";
  completionImage.style.maxHeight = "300px";
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
    removeChallengeFromLocalStorage(challengeTitle);
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
