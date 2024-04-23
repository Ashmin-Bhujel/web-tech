const input = document.querySelector("#input");
const output = document.querySelector("#output");

const original = prompt("Enter a string: ");

let result = "";

for (let i = original.length - 1; i >= 0; i--) {
  result += original.charAt(i);
}

input.innerText = original;
output.innerText = result;
