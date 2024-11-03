document.getElementById("calculate-button").addEventListener("click", () => calculateAge());
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    calculateAge();
  }
});

function displayError(message) {
  const errorMessage = document.getElementById("error-message");
  errorMessage.innerText = message;
}
function clearInputs() {
  document.getElementById("day").value = "";
  document.getElementById("month").value = "";
  document.getElementById("year").value = "";
}

function calculateAge() {
  try {
    const day = parseInt(document.getElementById("day").value.trim(), 10);
    const month = parseInt(document.getElementById("month").value.trim(), 10);
    const year = parseInt(document.getElementById("year").value.trim(), 10);

    // Clear previous error message
    displayError("");

    // Validation
    if (isNaN(day) || isNaN(month) || isNaN(year)) {
      displayError("All fields must be numeric.");
      return;
    }
    if (!day || !month || !year) {
      displayError("All fields are required.");
      return;
    }
    if (day < 1 || day > 31) {
      displayError("Day must be between 1 and 31.");
      return;
    }
    if (month < 1 || month > 12) {
      displayError("Month must be between 1 and 12.");
      return;
    }

    const today = new Date();
    if (year > today.getFullYear()) {
      displayError("Year cannot be in the future.");
      return;
    }

    // Check if the date is valid
    const birthDate = new Date(year, month - 1, day);
    if (
      birthDate.getDate() !== day ||
      birthDate.getMonth() + 1 !== month ||
      birthDate.getFullYear() !== year
    ) {
      displayError("Invalid date.");
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
  } catch (error) {
    displayError("An unexpected error occurred. Please try again.");
    console.error(error);
  }
  clearInputs();
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