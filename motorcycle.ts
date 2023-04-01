import { Vehicle } from "./vehicle";

export class Motorcycle extends Vehicle {
  private engineSize: number;

  constructor(make: string, model: string, year: number, isManual: boolean, engineSize: number) {
    super(make, model, year, isManual);
    this.engineSize = engineSize;
  }

  rent() {
    if (this.isAvailable) {
      console.log(`Renting a ${this.make} ${this.model} with a ${this.engineSize}cc engine`);
      this.isAvailable = false;
    } else {
      console.log(`Sorry, the ${this.make} ${this.model} is not available for rent`);
    }
  }

  return() {
    if (!this.isAvailable) {
      console.log(`Returning the ${this.make} ${this.model}`);
      this.isAvailable = true;
    } else {
      console.log(`The ${this.make} ${this.model} has already been returned`);
    }
  }
  <script src="vehicle.ts" defer></script>

}
