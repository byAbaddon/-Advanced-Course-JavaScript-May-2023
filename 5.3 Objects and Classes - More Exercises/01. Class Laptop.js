class Laptop {
  constructor(info, quality, isOn, turnOn, turnOff, showInfo, ) {
    this.info = {producer : info, age : +info, brand : info }
    this.quality = quality
    this.isOn = false
    this.turnOn =   () => { return  this.isOn = true, this.quality-- }
    this.turnOff =  () => { return  this.isOn = false, this.quality-- }
    this.showInfo = () => { return JSON.stringify(info) }     
  }

  get price() { return  (800 - this.info.producer.age * 2 + ( this.quality * 0.5)) }
}


// let info = {producer: "Dell", age: 2, brand: "XPS"}
// let laptop = new Laptop(info, 10)
// laptop.turnOn()
// console.log(laptop.showInfo())
// laptop.turnOff()
// console.log(laptop.quality)
// laptop.turnOn()
// console.log(laptop.isOn)
// console.log(laptop.price)

