const obj = {
  name: 'Marreco',
  sayHello: () => {
    console.log(`${this.name} disse oi`)
  }
}

obj.sayHello()