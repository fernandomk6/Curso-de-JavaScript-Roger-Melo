// herança
class A {
  first () {
    return 1
  }

  second () {
    return 'Nãa'
  }
}

class B extends A {
  third () {
    return 3
  }
}

const obj = new B()

// composição

const a = { first: () => 1 }
const b = { second: () => 'Nãa' }
const c = { third: () => 3 }

const obj2 = {
  ...a,
  ...c
}

// comparação

console.log(obj, obj2)