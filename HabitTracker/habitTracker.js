document.getElementById('habit-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const habitTitle = document.getElementById('habit-title').value;
    addHabit(habitTitle);
});

function addHabit(title) {
  const habitList = document.getElementById('habit-list');

  // Create a card element for the habit
  const habitCard = document.createElement('div');
  habitCard.className = 'habit-card';

  // Add a timer element to each habit item
  const timerContainer = document.createElement('div');
  timerContainer.className = 'habit-timer-container';

  // Create timer elements for seconds, minutes, hours, and days
  const secondsTimer = createTimerElement();
  const minutesTimer = createTimerElement();
  const hoursTimer = createTimerElement();
  const daysTimer = createTimerElement();

  timerContainer.appendChild(secondsTimer);
  timerContainer.appendChild(minutesTimer);
  timerContainer.appendChild(hoursTimer);
  timerContainer.appendChild(daysTimer);

  habitCard.innerHTML = `
      <span>${title}</span>
  `;

  habitCard.appendChild(timerContainer);

  // Append the card to the habit list
  habitList.appendChild(habitCard);

  // Scroll the habit list to the right (optional)
  habitList.scrollLeft = habitList.scrollWidth;
}

function createTimerElement() {
  const timer = document.createElement('div');
  timer.className = 'habit-timer';
  timer.innerHTML = `
      <span class="timer-number">0</span>
  `;
  return timer;
}


function createTimerElement() {
  const timer = document.createElement('div');
  timer.className = 'habit-timer';
  timer.innerHTML = `
      <span class="timer-number">0</span>
  `;
  return timer;
}








function incrementCounter(btn) {
    let count = parseInt(btn.textContent);
    btn.textContent = ++count;
}
function updateTimers() {
  const habitCards = document.getElementsByClassName('habit-card');
  for (const habitCard of habitCards) {
      const timer = habitCard.querySelector('.habit-timer');
      const currentTime = parseInt(timer.getAttribute('data-time')) || 0;

      // Update the timer and data-time attribute
      const newTime = currentTime + 1;
      timer.textContent = formatTime(newTime);
      timer.setAttribute('data-time', newTime);
  }
}


// Function to format the time into seconds, minutes, hours, or days
function formatTime(timeInSeconds) {
  if (timeInSeconds < 60) {
      return timeInSeconds + ' seconds';
  } else if (timeInSeconds < 3600) {
      const minutes = Math.floor(timeInSeconds / 60);
      const seconds = timeInSeconds % 60;
      return `${minutes} minutes ${seconds} seconds`;
  } else if (timeInSeconds < 86400) {
      const hours = Math.floor(timeInSeconds / 3600);
      const minutes = Math.floor((timeInSeconds % 3600) / 60);
      const seconds = timeInSeconds % 60;
      return `${hours} hours ${minutes} minutes ${seconds} seconds`;
  } else {
      const days = Math.floor(timeInSeconds / 86400);
      const hours = Math.floor((timeInSeconds % 86400) / 3600);
      const minutes = Math.floor((timeInSeconds % 3600) / 60);
      const seconds = timeInSeconds % 60;
      return `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
  }
}


// Start the timer for all habits
setInterval(updateTimers, 1000); // Update every second (1000 milliseconds)


