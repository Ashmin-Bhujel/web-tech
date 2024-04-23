const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const password = document.querySelector("#password");
const form = document.querySelector("form");
const emailResult = document.querySelector("#email-result");
const phoneResult = document.querySelector("#phone-result");
const passwordResult = document.querySelector("#password-result");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  validateEmail(email.value);
  validatePhone(phone.value);
  validatePassword(password.value);
});

function validateEmail(email) {
  const pattern = /^[a-zA-Z\d\.]+@(gmail.com|hotmail.com)$/;
  if (pattern.test(email)) {
    emailResult.innerText = `${email} (Valid Email)`;
  } else {
    emailResult.innerText = `Invalid Email`;
  }
}

function validatePhone(phone) {
  const patternNTC = /^(9841|9851)+[0-9]{6}$/;
  const patternNcell = /^(980)+[0-9]{7}$/;
  if (patternNTC.test(phone)) {
    phoneResult.innerText = `${phone} (Valid NTC Phone Number)`;
  } else if (patternNcell.test(phone)) {
    phoneResult.innerText = `${phone} (Valid Ncell Phone Number)`;
  } else {
    phoneResult.innerText = `Invalid Phone Number`;
  }
}

function validatePassword(password) {
  const pattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^\w\s]).{6,}$/;
  if (pattern.test(password)) {
    passwordResult.innerText = `${password} (Valid Password)`;
  } else {
    passwordResult.innerText = `Invalid Password`;
  }
}
