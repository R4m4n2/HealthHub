function calculateBMI() {
    var heightInCentimeters = parseFloat(document.getElementById('height').value);
    var weight = parseFloat(document.getElementById('weight').value);
  
    if (!isNaN(heightInCentimeters) && !isNaN(weight)) {
        // Convert height from centimeters to meters
        var heightInMeters = heightInCentimeters / 100;
  
        var bmi = weight / (heightInMeters * heightInMeters);
        var bmiResult = 'Your BMI is ' + bmi.toFixed(2);
  
        // BMI Ranges
        var bmiRanges = {
            underweight: { min: 0, max: 18.4 },
            healthy: { min: 18.5, max: 24.9 },
            overweight: { min: 25, max: 29.9 },
            obese: { min: 30, max: Infinity }
        };
  
        // Provide guidance based on BMI
        var guidance = '';
        var weightToLoseOrGain = 0;
  
        if (bmi < bmiRanges.underweight.max) {
            guidance = 'You are underweight. Consider gaining weight to reach a healthy BMI.';
            weightToLoseOrGain = (bmiRanges.healthy.min - bmi) * heightInMeters * heightInMeters;
        } else if (bmi >= bmiRanges.underweight.max && bmi <= bmiRanges.healthy.max) {
            guidance = 'Your weight is within a healthy range. Keep up the good work!';
        } else if (bmi > bmiRanges.healthy.max && bmi <= bmiRanges.overweight.max) {
            guidance = 'You are overweight. Consider losing weight to reach a healthy BMI.';
            weightToLoseOrGain = (bmi - bmiRanges.healthy.max) * heightInMeters * heightInMeters;
        } else {
            guidance = 'You are obese. Consider losing weight to reach a healthy BMI.';
            weightToLoseOrGain = (bmi - bmiRanges.healthy.max) * heightInMeters * heightInMeters;
        }
  
        var healthyBMIRange = 'Healthy BMI Range: ' + bmiRanges.healthy.min.toFixed(2) + ' - ' + bmiRanges.healthy.max.toFixed(2);
        var underweightRange = 'Underweight Range: ' + bmiRanges.underweight.min.toFixed(2) + ' - ' + bmiRanges.underweight.max.toFixed(2);
        var overweightRange = 'Overweight Range: ' + bmiRanges.overweight.min.toFixed(2) + ' - ' + bmiRanges.overweight.max.toFixed(2);
        var obeseRange = 'Obese Range: ' + bmiRanges.obese.min.toFixed(2) + ' and above';
  
        document.getElementById('bmiResult').innerText = bmiResult;
        document.getElementById('bmiGuidance').innerText = guidance;
        document.getElementById('weightToLoseGain').innerText = 'Weight to Lose/Gain: ' + weightToLoseOrGain.toFixed(2) + ' kg';
        document.getElementById('bmiRanges').innerText = healthyBMIRange + '\n' + underweightRange + '\n' + overweightRange + '\n' + obeseRange;
    } else {
        alert('Please enter valid height and weight.');
    }
  }
  
  
  
  
  
  // Function to calculate weight needed to reach a target BMI
  function calculateWeightToReachBMI(height, targetBMI, currentBMI) {
    return targetBMI * height * height - currentBMI * height * height;
  }
  
  
  // Function to add habits in the habit tracker with a timer and delete option
  function addHabit() {
    var habitInput = document.getElementById('habitInput');
    var habit = habitInput.value;
    if (habit.trim() !== '') {
        var habitList = document.getElementById('habitList');
        var newHabit = document.createElement('li');
        newHabit.innerText = habit + ' - Time elapsed: ';
        
        var timerSpan = document.createElement('span');
        var startTime = new Date();
        timerSpan.innerText = '0 seconds';
        newHabit.appendChild(timerSpan);
  
        // Delete button
        var deleteBtn = document.createElement('button');
        deleteBtn.innerText = 'Delete';
        deleteBtn.onclick = function() {
            habitList.removeChild(newHabit);
        };
        newHabit.appendChild(deleteBtn);
  
        habitList.appendChild(newHabit);
        habitInput.value = ''; 
  
        // Update the timer every second
        setInterval(function() {
            var elapsedTime = Math.floor((new Date() - startTime) / 1000);
            timerSpan.innerText = elapsedTime + ' seconds';
        }, 1000);
    }
  }
  
  function joinChallenge(button, challengeName) {
    var challengeDiv = button.parentElement;
    var info = challengeDiv.getElementsByClassName('challengeInfo')[0];
    var completeBtn = challengeDiv.getElementsByClassName('completeBtn')[0];
    var leaveBtn = challengeDiv.getElementsByClassName('leaveBtn')[0];
  
    info.style.display = 'block';
    completeBtn.style.display = 'inline';
    leaveBtn.style.display = 'inline';
    button.style.display = 'none';
  
    alert('You have joined the ' + challengeName + '!');
  }
  
  function completeChallenge(button) {
    alert('Congratulations on completing the challenge!');
    leaveChallenge(button); // Automatically leave the challenge after completion
  }
  
  var motivationalQuotes = [
    "Believe you can and you're halfway there.",
    "The only way to achieve the impossible is to believe it is possible.",
    "It does not matter how slowly you go as long as you do not stop.",
    "You are never too old to set another goal or to dream a new dream.",
    "Do what you can with all you have, wherever you are."
  ];
  
  function leaveChallenge(button) {
    var challengeDiv = button.parentElement;
    var joinBtn = challengeDiv.querySelector('button');
    var info = challengeDiv.getElementsByClassName('challengeInfo')[0];
    var completeBtn = challengeDiv.getElementsByClassName('completeBtn')[0];
  
    info.style.display = 'none';
    completeBtn.style.display = 'none';
    button.style.display = 'none';
    joinBtn.style.display = 'inline';
  
    // Display a random motivational quote
    var randomQuote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
    alert(randomQuote);
  }
  
  
  
  
  
  // Function to dynamically display more information in the nutrition and exercise resources section
  function displayMoreInfo() {
    var info = "Additional detailed info about nutrition and exercises...";
    document.getElementById('moreInfo').innerHTML = info;
  }
  
  function postComment() {
    var title = document.getElementById('postTitle').value;
    var fileInput = document.getElementById('photoUpload');
    var comment = document.getElementById('commentBox').value;
    var forumPosts = document.getElementById('forumPosts');
  
    // Create elements for the post
    var post = document.createElement('div');
    var postTitle = document.createElement('h3');
    var postImage = document.createElement('img');
    var postText = document.createElement('p');
  
    // Set content
    postTitle.textContent = title;
    if(fileInput.files[0]) {
        postImage.src = URL.createObjectURL(fileInput.files[0]);
    }
    postText.textContent = comment;
  
    // Append elements to the post
    post.appendChild(postTitle);
    post.appendChild(postImage);
    post.appendChild(postText);
  
    // Add the post to the forum
    forumPosts.appendChild(post);
  
    // Clear the input fields
    document.getElementById('postTitle').value = '';
    document.getElementById('photoUpload').value = '';
    document.getElementById('commentBox').value = '';
  }
  
  
  
  // Remember to add corresponding HTML elements for these functions to interact with.