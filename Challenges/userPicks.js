document.addEventListener("DOMContentLoaded", () => {
  updateTitleWithCurrentMonth();
  displayUserPickedChallenges();
});

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

    container.appendChild(challengeClone);
  });
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
