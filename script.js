function calculateAge() {
  const day = parseInt(document.getElementById("day").value);
  const month = parseInt(document.getElementById("month").value);
  const year = parseInt(document.getElementById("year").value);
  const errorMessage = document.getElementById("error-message");

  // Clear previous error message
  errorMessage.innerText = "";

  // Validation
  if (!day || !month || !year) {
    errorMessage.innerText = "All fields are required.";
    return;
  }
  if (day < 1 || day > 31) {
    errorMessage.innerText = "Day must be between 1 and 31.";
    return;
  }
  if (month < 1 || month > 12) {
    errorMessage.innerText = "Month must be between 1 and 12.";
    return;
  }
  const today = new Date();
  if (year > today.getFullYear()) {
    errorMessage.innerText = "Year cannot be in the future.";
    return;
  }

  // Check if the date is valid
  const birthDate = new Date(year, month - 1, day);
  if (
    birthDate.getDate() !== day ||
    birthDate.getMonth() + 1 !== month ||
    birthDate.getFullYear() !== year
  ) {
    errorMessage.innerText = "Invalid date.";
    return;
  }

  // Calculate the age
  let ageYears = today.getFullYear() - birthDate.getFullYear();
  let ageMonths = today.getMonth() - birthDate.getMonth();
  let ageDays = today.getDate() - birthDate.getDate();

  if (ageDays < 0) {
    ageMonths -= 1;
    ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }
  if (ageMonths < 0) {
    ageYears -= 1;
    ageMonths += 12;
  }

  // Animate the result
  animateNumber("years", ageYears);
  animateNumber("months", ageMonths);
  animateNumber("days", ageDays);
}

function animateNumber(id, finalValue) {
  const element = document.getElementById(id);
  let startValue = 0;
  const duration = 1000;
  const increment = Math.ceil(finalValue / (duration / 50));

  const counter = setInterval(() => {
    startValue += increment;
    if (startValue >= finalValue) {
      startValue = finalValue;
      clearInterval(counter);
    }
    element.innerText = startValue;
  }, 50);
}
