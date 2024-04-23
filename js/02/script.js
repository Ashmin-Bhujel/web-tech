const input = document.querySelector("#input");
const output = document.querySelector("#output");

const num1 = parseInt(prompt("Enter first number: "));
const num2 = parseInt(prompt("Enter second number: "));

function isPrime(num) {
  let count = 0;

  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      count++;
    }
  }

  return count === 2 ? true : false;
}

input.innerText = `${num1} + ${num2}`;

if (isPrime(num1) && isPrime(num2)) {
  output.innerText = num1 + num2;
} else {
  output.innerText = `Not an addition of prime numbers`;
}
