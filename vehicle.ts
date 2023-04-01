class Vehicle {
    make: string;
    model: string;
    year: number;
    isRented: boolean;
  
    constructor(make: string, model: string, year: number, isRented: boolean) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.isRented = isRented;
    }
  
    rent() {
      if (!this.isRented) {
        this.isRented = true;
        console.log(`${this.make} ${this.model} ${this.year} has been rented.`);
      } else {
        console.log(`${this.make} ${this.model} ${this.year} is already rented.`);
      }
    }
  
    return() {
      if (this.isRented) {
        this.isRented = false;
        console.log(`${this.make} ${this.model} ${this.year} has been returned.`);
      } else {
        console.log(`${this.make} ${this.model} ${this.year} was not rented.`);
      }
    }
  }
  
  class Car extends Vehicle {
    numSeats: number;
  
    constructor(make: string, model: string, year: number, isRented: boolean, numSeats: number) {
      super(make, model, year, isRented);
      this.numSeats = numSeats;
    }
  }
  
  class Motorcycle extends Vehicle {
    engineSize: number;
  
    constructor(make: string, model: string, year: number, isRented: boolean, engineSize: number) {
      super(make, model, year, isRented);
      this.engineSize = engineSize;
    }
  }
  
  // create instances of each type of vehicle
  const car = new Car("Toyota", "Camry", 2022, false, 5);
  const motorcycle = new Motorcycle("Harley Davidson", "Sportster", 2020, false, 883);
  