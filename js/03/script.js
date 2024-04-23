const input = document.querySelector("#input");
const output = document.querySelector("#output");

const num1 = parseInt(prompt("Enter first number: "));
const num2 = parseInt(prompt("Enter second number: "));

function isEven(num) {
  return num % 2 === 0 ? true : false;
}

if (isEven(num1) && isEven(num2)) {
  input.innerText = `${num1} + ${num2}`;
  output.innerText = num1 + num2;
} else {
  input.innerText = `${num1} - ${num2}`;
  output.innerText = num1 - num2;
}
