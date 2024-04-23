const person = new Object();

person.firstName = "Ashmin";
person.lastName = "......";

person.printInfo = function () {
  console.log(`First Name: ${this.firstName}, Last Name: ${this.lastName}`);
};

person.changeLastName = function (newLastName) {
  this.lastName = newLastName;
};

person.printInfo();
person.changeLastName("Bhujel");
person.printInfo();
