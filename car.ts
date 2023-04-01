export class Car {
    make: string;
    model: string;
    year: number;
    rented: boolean;
    passengers: number;
  
    constructor(make: string, model: string, year: number, rented: boolean, passengers: number) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.rented = rented;
      this.passengers = passengers;
    }
  
    rent() {
      this.rented = true;
      console.log(`You have rented a ${this.make} ${this.model}.`);
    }
  
    return() {
      this.rented = false;
      console.log(`You have returned the ${this.make} ${this.model}.`);
    }
  }
  