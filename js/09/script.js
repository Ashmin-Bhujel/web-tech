class Car {
  constructor(model, makeYear) {
    this.model = model;
    this.makeYear = makeYear;
  }

  showInfo() {
    console.log(`Model: ${this.model}, Make Year: ${this.makeYear}`);
  }
}

class SuperCar extends Car {
  constructor(model, makeYear) {
    super(model, makeYear);
    this.currentYear = new Date().getFullYear();
    this.age = this.currentYear - this.makeYear;
  }

  showAge() {
    console.log(`Current age of the car: ${this.age}`);
  }
}

const ferrari = new SuperCar("Ferrari SF90 Stradale", 2019);
ferrari.showInfo();
ferrari.showAge();
