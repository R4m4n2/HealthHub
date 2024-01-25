document.getElementById('habit-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const habitTitle = document.getElementById('habit-title').value;
    addHabit(habitTitle);
});
document.addEventListener('DOMContentLoaded', function() {
    const quotes = [
        "Your limitation—it's only your imagination.",
        "Push yourself, because no one else is going to do it for you.",
        "Sometimes later becomes never. Do it now.",
        "Great things never come from comfort zones.",
        "Dream it. Wish it. Do it.",
        "Success doesn’t just find you. You have to go out and get it.",
        "The harder you work for something, the greater you'll feel when you achieve it.",
        "Dream bigger. Do bigger.",
        "Don’t stop when you’re tired. Stop when you’re done.",
        "Wake up with determination. Go to bed with satisfaction."
        // Add more quotes as desired
    ];

    function displayRandomQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const quote = quotes[randomIndex];
        document.getElementById('motivational-quote').textContent = quote;
    }

    displayRandomQuote();
});

function createCircularTimer(title) {
    const timer = document.createElement('div');
    timer.className = 'circular-progress';
    const number = document.createElement('span');
    number.className = 'timer-number';
    number.textContent = '0';
    timer.appendChild(number);

    const timerTitle = document.createElement('div');
    timerTitle.className = 'timer-title';
    timerTitle.textContent = title;
    timer.appendChild(timerTitle);

    return timer;
}

function addHabit(title) {
    const habitList = document.getElementById('habit-list');
    const habitCard = document.createElement('div');
    habitCard.className = 'habit-card';

    const timerContainer = document.createElement('div');
    timerContainer.className = 'habit-timer-container';

    // Create timer elements for seconds, minutes, hours, and days
    const secondsTimer = createCircularTimer('Seconds');
    const minutesTimer = createCircularTimer('Minutes');
    const hoursTimer = createCircularTimer('Hours');
    const daysTimer = createCircularTimer('Days');

    timerContainer.appendChild(secondsTimer);
    timerContainer.appendChild(minutesTimer);
    timerContainer.appendChild(hoursTimer);
    timerContainer.appendChild(daysTimer);

    habitCard.innerHTML = `<span>${title}</span>`;
    habitCard.appendChild(timerContainer);

    habitList.appendChild(habitCard);
    habitList.scrollLeft = habitList.scrollWidth;
}

function updateTimers() {
    const habitCards = document.getElementsByClassName('habit-card');
    for (const habitCard of habitCards) {
        const secondsTimer = habitCard.querySelector('.circular-progress:nth-child(1) .timer-number');
        const minutesTimer = habitCard.querySelector('.circular-progress:nth-child(2) .timer-number');
        const hoursTimer = habitCard.querySelector('.circular-progress:nth-child(3) .timer-number');
        const daysTimer = habitCard.querySelector('.circular-progress:nth-child(4) .timer-number');

        let seconds = parseInt(secondsTimer.textContent);
        let minutes = parseInt(minutesTimer.textContent);
        let hours = parseInt(hoursTimer.textContent);
        let days = parseInt(daysTimer.textContent);

        seconds++;
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
            if (minutes >= 60) {
                minutes = 0;
                hours++;
                if (hours >= 24) {
                    hours = 0;
                    days++;
                }
            }
        }

        secondsTimer.textContent = seconds;
        minutesTimer.textContent = minutes;
        hoursTimer.textContent = hours;
        daysTimer.textContent = days;
    }
}

setInterval(updateTimers, 1000); // Update every second
