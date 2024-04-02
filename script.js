function calculateBMI() {
  var height = parseFloat(document.getElementById('height').value);
  var weight = parseFloat(document.getElementById('weight').value);

  if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
    document.getElementById('result').innerHTML = "Please enter valid height and weight values.";
    return;
  }

  var bmi = weight / ((height / 100) ** 2);
  document.getElementById('result').innerHTML = "Your BMI is: " + bmi.toFixed(2);

  var bmi = weight / ((height / 100) ** 2);
  // document.getElementById('result').innerHTML = "Your BMI is: " + bmi.toFixed(2);
  if (bmi < 18.5) {
    document.getElementById('result').innerHTML = "Your BMI is: " + bmi.toFixed(2);
    document.getElementById('detail').innerHTML = "You Are Skinny";
  } else if (bmi >= 18.5 && bmi < 25) {
    document.getElementById('result').innerHTML = "Your BMI is: " + bmi.toFixed(2);
    document.getElementById('detail').innerHTML = "You Are Normal/Ideal";
  } else if (bmi >= 25 && bmi < 30) {
    document.getElementById('result').innerHTML = "Your BMI is: " + bmi.toFixed(2);
    document.getElementById('detail').innerHTML = "You Are Thick/Overweight";
  } else {
    document.getElementById('result').innerHTML = "Your BMI is: " + bmi.toFixed(2);
    document.getElementById('detail').innerHTML = "You Are Obesity";
  }
}