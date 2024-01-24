document.getElementById('start-timer').addEventListener('click', function () {
  const title = document.getElementById('habit-title').value;
  if (!title) {
    alert('Please enter a habit title.');
    return;
  }

  let seconds = 0;
  const display = document.getElementById('timer-display');
  display.innerHTML = `${title}: 00:00:00`;

  const timer = setInterval(() => {
    seconds++;
    const hours = Math.floor(seconds / 3600).toString().padStart(2, '0');
    const minutes = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
    const remainingSeconds = (seconds % 60).toString().padStart(2, '0');

    display.innerHTML = `${title}: ${hours}:${minutes}:${remainingSeconds}`;
  }, 1000);

  // Disable the button to prevent multiple timers
  this.disabled = true;

  // Add logic to stop the timer if needed
});
