class Mammal {
  constructor (species, name, age) {
    this.species = species
    this.name = name
    this.age = age
    this.mammaryGland = true
  }

  incrementAge () {
    this.age++
  }
}

class Lion extends Mammal {
  constructor (species, name, age, manEater) {
    super(species, name, age)
    this.manEater = manEater
  }

  eatZebras (animails) {
    return animails.filter(animal => animal.species !== 'zebra')
  }
}

const mufasa = new Lion('leão', 'mufasa', 7, false)
const angus = new Mammal('cavalo', 'angus', 7)
console.log(mufasa, angus)