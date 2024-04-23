let num1 = 4;
let num2 = 0;

// Using try catch statement
try {
  if (num2 !== 0) {
    console.log(`Result of ${num1} / ${num2} is ${num1 / num2}`);
  } else {
    throw new Error("Division by zero.");
  }
} catch (error) {
  console.log(error.message);
}

// Using onerror event
document.querySelector("img").onerror = function () {
  console.log("Cannot find the specified image!");
};
