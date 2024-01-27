class Car {
    // Static properties
    static totalCars = 1;
    static maxSpeed = 200;
  
    // Instance properties
    constructor(make, model) {
      this.make = make;
      this.model = model;
      this.speed = 0;
      Car.totalCars++;
    }
  
    // Static method
    static getNumberOfCars() {
      return Car.totalCars;
    }
  
    // Instance method
    accelerate(speed) {
      if (speed <= Car.maxSpeed) {
        this.speed = speed;
        console.log(`${this.make} ${this.model} is now moving at ${this.speed} km/h.`);
      } else {
        console.log(`Warning: ${this.make} ${this.model} cannot exceed ${Car.maxSpeed} km/h.`);
      }
    }
  }
  
  // Accessing static properties
  console.log("Total Cars:", Car.totalCars); // Output: Total Cars: 0
  console.log("Max Speed:", Car.maxSpeed);    // Output: Max Speed: 200
  
  // Creating instances of the Car class
  const car1 = new Car("Toyota", "Camry");
  const car2 = new Car("Honda", "Accord");
  const car3 = new Car("Mercedes", "C400");
  const car4 = new Car("Lexus", "RX350");
  const car5 = new Car("Mercedes", "Glk350");
  
  
  
  // Accessing instance properties
  console.log(`${car1.make} ${car1.model}`); // Output: Toyota Camry
  
  // Accessing static method to get the number of cars
  console.log("Number of Cars:", Car.getNumberOfCars()); // Output: Number of Cars: 2
  
  // Using instance method to accelerate
  car1.accelerate(120); // Output: Toyota Camry is now moving at 120 km/h.
  car3.accelerate(170); // Output: Mercedes C400 is now moving at 170 km/h.
  car4.accelerate(200); // Output: Lexus RX350 is now moving at 120 km/h.
  car5.accelerate(150); // Output:Mercedes GLk350 is now moving at 120 km/h.
  car2.accelerate(220); // Output: Warning: Honda Accord cannot exceed 200 km/h.
  