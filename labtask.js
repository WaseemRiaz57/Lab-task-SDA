// Abstract class (in JS, we simulate abstraction by creating a class with abstract methods)
class Vehicle {
  constructor(brand) {
    if (new.target === Vehicle) {
      throw new Error("Cannot instantiate abstract class Vehicle directly.");
    }
    this.brand = brand;
  }

  start() {
    throw new Error("Abstract method 'start()' must be implemented by subclasses.");
  }

  stop() {
    throw new Error("Abstract method 'stop()' must be implemented by subclasses.");
  }
}

// Concrete subclass of Vehicle
class Car extends Vehicle {
  constructor(brand, model) {
    super(brand);
    this.model = model;
  }

  // Implement the abstract method 'start'
  start() {
    console.log(`${this.brand} ${this.model} car is starting...`);
  }

  // Implement the abstract method 'stop'
  stop() {
    console.log(`${this.brand} ${this.model} car is stopping...`);
  }
}

// Concrete subclass of Vehicle
class Motorcycle extends Vehicle {
  constructor(brand, model) {
    super(brand);
    this.model = model;
  }

  // Implement the abstract method 'start'
  start() {
    console.log(`${this.brand} ${this.model} motorcycle is starting...`);
  }

  // Implement the abstract method 'stop'
  stop() {
    console.log(`${this.brand} ${this.model} motorcycle is stopping...`);
  }
}

// Client code interacting with abstraction
function operateVehicle(vehicle) {
  vehicle.start();
  vehicle.stop();
}

// Creating specific objects (Car and Motorcycle)
const myCar = new Car("Toyota", "Corolla");
const myMotorcycle = new Motorcycle("Yamaha", "YZF-R3");

// Operating vehicles without worrying about internal details
operateVehicle(myCar);
operateVehicle(myMotorcycle);
