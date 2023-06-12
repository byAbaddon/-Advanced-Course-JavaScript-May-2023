class Vehicle {
  constructor(type, model, parts, fuel) {
    Object.assign(this, {
      type, model, fuel,
      parts: { engine: 0, power: 0, quality: (parts.engine * parts.power) }
    })
  }
    drive = n => this.fuel -= n
  }
 
  // let parts = {engine: 6, power: 100};
  // let vehicle = new Vehicle('a', 'b', parts, 200);
  // vehicle.drive(100)
  // console.log(vehicle.fuel);
  


