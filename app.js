class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  honk() {
    return 'Beep!';
  }
  toString() {
    return `The vehicle is a ${this.make} ${model} from ${this.year}.`
  }
}

class Car extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 4;
  }
}

class Motorcycle extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 2;
  }
  revEngine() {
    return 'VROOM!!!';
  }
}

class Garage {
  constructor(capacity) {
    this.vehicles = [];
    this.capacity = capacity;
  }
  add(vehicle) {
    if (vehicle instanceof Vehicle) {
      if (this.vehicles.length < this.capacity) {
        this.vehicles.push(vehicle);
      }
      return "Sorry, we're full";
    }
    return "Only vehicles are allowed in here!";
  }
}