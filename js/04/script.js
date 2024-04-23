const input = document.querySelector("#input");
const output = document.querySelector("#output");

const string1 = prompt("Enter first number: ");
const string2 = prompt("Enter second number: ");

function isEqual(string1, string2) {
  if (string1.length !== string2.length) {
    return false;
  } else {
    let flag = 1;

    for (i in string1) {
      if (string1.charAt(i) !== string2.charAt(i)) {
        flag = 0;
        break;
      }
    }

    return flag === 1 ? true : false;
  }
}

input.innerText = `${string1} and ${string2}`;
if (isEqual(string1, string2)) {
  output.innerText = "The are strings are equal";
} else {
  output.innerText = "The are strings are not equal";
}
