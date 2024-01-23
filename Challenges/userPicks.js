document.addEventListener("DOMContentLoaded", () => {
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
