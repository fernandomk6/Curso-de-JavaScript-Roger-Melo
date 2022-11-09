class User {
  constructor (name) {
    this.name = name
    this.points = 0
  }

  login () {
    console.log(`O ${this.name} logou`)
    return this
  }

  incrementPoints () {
    this.points++
    return this
  }

  static a () { console.log('a') }
}

const fernando = new User('fernando')

console.dir(User)
console.dir(fernando)

