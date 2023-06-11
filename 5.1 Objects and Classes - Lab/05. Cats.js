arg => arg.forEach(x => console.log(`${x.split(' ')[0]}, age ${x.split(' ')[1]} says Meow`))

//------------------------------(2)--------------------------------------

arg => arg.reduce((a, x) => {
  const [name, age] = x.split(' ')
  console.log(`${name}, age ${age} says Meow`)
}, 0)

//-------------------------------(3)-------------------------------------

function cats(arr) {
  class Cat {
    constructor(name, age) {
      Object.assign(this, { name, age })
    }

    meow = () => console.log(`${this.name}, age ${this.age} says Meow`);
  }

  for (const x of arr) {
    let [name, age] = x.split(' ')
    const cat = new Cat(name, age)
    cat.meow()
  }
}

// cats(['Mellow 2', 'Tom 5'])