//Objects
let healthChallenges = [
  {
    category: "Fitness",
    challenges: [
      {
        title: "10,000 Steps a Day",
        description: "Challenge yourself to walk 10,000 steps every day.",
        image: "./images/Steps.jpg",
      },
      {
        title: "Cycle for 30 Minutes Twice a Week",
        description:
          "Improve your cardiovascular health with twice-weekly cycling sessions.",
        image: "./images/cycling.jpg",
      },
      {
        title: "Swim Twice a Week",
        description:
          "Enjoy the benefits of swimming for fitness and relaxation.",
        image: "./images/swimming.jpg",
      },
      {
        title: "Join a Fitness Class",
        description: "Boost your fitness routine by joining a new class.",
        image: "./images/fitness-class.jpg",
      },
      {
        title: "Maintain a Workout Routine",
        description:
          "Keep up with your workout routine throughout the festive season.",
        image: "./images/workout.jpg",
      },
      {
        title: "Go for a Hike Once a Week",
        description:
          "Explore nature and improve your fitness with weekly hikes.",
        image: "./images/hiking.jpg",
      },
      {
        title: "Participate in a Fitness Challenge",
        description:
          "Join a fitness challenge to stay motivated and reach your goals.",
        image: "./images/fitness-challenge.jpg",
      },
    ],
  },
  {
    category: "Nutrition",
    challenges: [
      {
        title: "Drink 2 Liters of Water Daily",
        description:
          "Keep hydrated by drinking at least 2 liters of water every day.",
        image: "./images/Water.jpg",
      },
      {
        title: "Try a New Healthy Breakfast Recipe Every Morning",
        description:
          "Start your day with a variety of nutritious and delicious breakfasts.",
        image: "./images/Breakfast.jpg",
      },
      {
        title: "Eat a Salad Every Day",
        description:
          "Incorporate a fresh salad into your daily meals for added nutrients.",
        image: "./images/salad.jpg",
      },
      {
        title: "Try a New Healthy Recipe Each Week",
        description:
          "Expand your cooking skills by trying a new healthy recipe every week.",
        image: "./images/cooking.jpg",
      },
      {
        title: "Eat Whole Foods for a Week",
        description:
          "Focus on whole foods for a week to reset your eating habits.",
        image: "./images/whole-foods.jpg",
      },
      {
        title: "Eat Mindfully",
        description: "Be mindful of your eating habits, savoring each bite.",
        image: "./images/mindful-eating.png",
      },
    ],
  },
  {
    category: "Wellness",
    challenges: [
      {
        title: "Sleep at Least 7 Hours Nightly",
        description:
          "Ensure you get a minimum of 7 hours of sleep each night for better health.",
        image: "./images/sleep.jpg",
      },
      {
        title: "Start a Daily Journal",
        description:
          "Keep a journal to reflect on your daily experiences and feelings.",
        image: "./images/journaling.jpg",
      },
      {
        title: "15 Minutes of Stretching Daily",
        description:
          "Enhance your flexibility and circulation with daily stretching exercises.",
        image: "./images/stretching.jpg",
      },
      {
        title: "Practice Deep Breathing Exercises",
        description:
          "Reduce stress and improve lung function with daily deep breathing.",
        image: "./images/breathing.jpg",
      },
      {
        title: "Practice Yoga",
        description:
          "Enhance your flexibility and mental focus with regular yoga practice.",
        image: "./images/yoga.jpg",
      },
      {
        title: "Take a Digital Detox Weekend",
        description: "Unplug from digital devices for a weekend to recharge.",
        image: "./images/digital-detox.jpg",
      },
      {
        title: "Focus on Self-Care Activities",
        description:
          "Dedicate time to activities that promote your personal well-being.",
        image: "./images/self-care.jpg",
      },
      {
        title: "Give Thanks Daily",
        description:
          "Cultivate gratitude by acknowledging things you're thankful for each day.",
        image: "./images/gratitude.jpg",
      },
      {
        title: "Reflect on the Year's Achievements",
        description:
          "Take time to reflect on your achievements and set goals for the new year.",
        image: "./images/reflection.jpg",
      },
    ],
  },
  {
    category: "Environmental",
    challenges: [
      {
        title: "Try a New Outdoor Activity",
        description:
          "Explore a new outdoor hobby to enhance your physical and mental well-being.",
        image: "./images/outdoor-activity.jpg",
      },
      {
        title: "Grill Healthy Meals Once a Week",
        description:
          "Discover the joys of grilling with healthy recipes each week.",
        image: "./images/grilling.jpg",
      },
      {
        title: "Enjoy Nature and Spend Time Outdoors",
        description:
          "Connect with nature to improve your mood and reduce stress.",
        image: "./images/nature.jpg",
      },
      {
        title: "Start Composting at Home",
        description:
          "Reduce waste and enrich your garden by starting a compost bin for organic waste.",
        image: "./images/composting.jpg",
      },
      {
        title: "Cook All Meals at Home",
        description:
          "Challenge yourself to prepare all your meals at home for a month.",
        image: "./images/home-cooking.jpg",
      },
      {
        title: "Limit Screen Time to 2 Hours",
        description:
          "Reduce eye strain and improve sleep by limiting daily screen time.",
        image: "./images/screen-time.jpg",
      },
    ],
  },
];

var motivationalQuotes = [
  "Believe you can and you're halfway there.",
  "The only way to achieve the impossible is to believe it is possible.",
  "It does not matter how slowly you go as long as you do not stop.",
  "You are never too old to set another goal or to dream a new dream.",
  "Do what you can with all you have, wherever you are.",
];

document.addEventListener("DOMContentLoaded", () => {
  updateMonthlyChallenges();
  populateCategoryChallenges("Fitness", "fitnessChallengesContainer");
  populateCategoryChallenges("Nutrition", "nutritionChallengesContainer");
  populateCategoryChallenges("Wellness", "wellnessChallengesContainer");
  populateCategoryChallenges(
    "Environmental",
    "environmentalChallengesContainer"
  );
});

function populateCategoryChallenges(categoryName, containerId) {
  const container = document.getElementById(containerId);
  const template = document.getElementById("challengeTemplate").content;

  const category = healthChallenges.find(
    (cat) => cat.category === categoryName
  );
  category.challenges.forEach((challenge) => {
    let challengeClone = document.importNode(template, true);

    challengeClone.querySelector(".challengeTitle").textContent =
      challenge.title;
    challengeClone.querySelector(".challengeImage").src = challenge.image;
    challengeClone.querySelector(".challengeImage").alt = challenge.title;
    challengeClone.querySelector(".challengeInfo").textContent =
      challenge.description;
    const joinBtn = challengeClone.querySelector(".joinChallengeBtn");
    joinBtn.addEventListener("click", function () {
      this.textContent = "Added to Monthly Challenges";
      this.style.setProperty("background-color", "#be3144", "important");
      addChallengeToUserPicks(challenge);
    });

    container.appendChild(challengeClone);
  });
}

function addChallengeToUserPicks(challenge) {
  let userPicks = JSON.parse(localStorage.getItem("userPicks")) || [];
  if (!userPicks.some((ch) => ch.title === challenge.title)) {
    userPicks.push(challenge);
    localStorage.setItem("userPicks", JSON.stringify(userPicks));
  }
}

// Two random monthly challenges Section

function updateMonthlyChallenges() {
  const currentDate = new Date();
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
  const currentMonth = currentDate.getMonth();
  const currentMonthName = monthNames[currentMonth];
  const currentYear = currentDate.getFullYear();

  //Checking month value in inspect console
  //console.log("Current Month/Year:", currentMonthName + "/" + currentYear);

  const storedMonth = localStorage.getItem("currentMonth");
  const storedYear = localStorage.getItem("currentYear");

  if (storedMonth != currentMonthName || storedYear != currentYear) {
    const monthlyChallenges = selectRandomChallenges(2);
    localStorage.setItem(
      "monthlyChallenges",
      JSON.stringify(monthlyChallenges)
    );
    localStorage.setItem("currentMonth", currentMonthName);
    localStorage.setItem("currentYear", currentYear);
  }

  displayMonthlyChallenges();
}

function selectRandomChallenges(number) {
  const allChallenges = healthChallenges.flatMap((cat) => cat.challenges);
  let selected = [];
  while (selected.length < number) {
    let randomChallenge =
      allChallenges[Math.floor(Math.random() * allChallenges.length)];
    if (
      !selected.some((challenge) => challenge.title === randomChallenge.title)
    ) {
      selected.push(randomChallenge);
    }
  }
  return selected;
}

function displayMonthlyChallenges() {
  const monthlyChallengesContainer = document.getElementById(
    "monthlyChallengesContainer"
  );
  const template = document.getElementById("challengeTemplate").content;
  const monthlyChallenges =
    JSON.parse(localStorage.getItem("monthlyChallenges")) || [];

  monthlyChallengesContainer.innerHTML = ""; // Clear previous content

  monthlyChallenges.forEach((challenge) => {
    let challengeClone = document.importNode(template, true);
    challengeClone.querySelector(".challengeTitle").textContent =
      challenge.title;
    challengeClone.querySelector(".challengeImage").src = challenge.image;
    challengeClone.querySelector(".challengeImage").alt = challenge.title;
    challengeClone.querySelector(".challengeInfo").textContent =
      challenge.description;

    // Adding the event listener for the Join Challenge button
    const joinBtn = challengeClone.querySelector(".joinChallengeBtn");
    joinBtn.addEventListener("click", function () {
      this.textContent = "Added to Monthly Challenges";
      this.style.setProperty("background-color", "#be3144", "important");
      addChallengeToUserPicks(challenge);
    });

    monthlyChallengesContainer.appendChild(challengeClone);
  });
}
