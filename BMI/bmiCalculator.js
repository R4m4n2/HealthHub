document.getElementById('bmi-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const height = document.getElementById('height').value;
  const weight = document.getElementById('weight').value;

  if (height > 0 && weight > 0) {
      const bmi = (weight / ((height * height) / 10000)).toFixed(1);
      let category = '';

      if (bmi < 18.5) {
          category = 'Underweight';
      } else if (bmi >= 18.5 && bmi <= 24.9) {
          category = 'Normal';
      } else if (bmi >= 25 && bmi <= 29.9) {
          category = 'Overweight';
      } else {
          category = 'Obese';
      }

      document.getElementById('bmi-result-text').innerHTML = `Your BMI is considered: ${bmi} (${category})`;
      updateBMISpectrum(bmi);
  } else {
      document.getElementById('bmi-result-text').innerHTML = 'Please enter valid height and weight!';
  }
});

function updateBMISpectrum(bmi) {
  const spectrum = document.getElementById('bmi-spectrum');
  let position = 0;

  if (bmi >= 40) {
      position = 100;
  } else if (bmi <= 15) {
      position = 0;
  } else {
      // Assuming BMI 15 corresponds to 0% and BMI 40 to 100% of the spectrum width
      position = ((bmi - 15) / (40 - 15)) * 100;
  }

  const pointer = document.querySelector('.bmi-pointer');
  pointer.style.left = `${position}%`;
}
