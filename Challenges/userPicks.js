document.addEventListener("DOMContentLoaded", () => {
  displayUserPickedChallenges();
});

function displayUserPickedChallenges() {
  const container = document.getElementById("pickedChallengesContainer");
  const userPicks = JSON.parse(localStorage.getItem("userPicks")) || [];

  userPicks.forEach((challenge) => {
    // Create elements for each challenge
    const challengeDiv = document.createElement("div");
    challengeDiv.className = "challenge";

    const img = document.createElement("img");
    img.src = challenge.image;
    img.alt = "Challenge Image";

    const title = document.createElement("h3");
    title.textContent = challenge.title;

    const description = document.createElement("p");
    description.textContent = challenge.description;

    // Append elements to the challenge div
    challengeDiv.appendChild(img);
    challengeDiv.appendChild(title);
    challengeDiv.appendChild(description);

    // Append the challenge div to the container
    container.appendChild(challengeDiv);
  });
}
