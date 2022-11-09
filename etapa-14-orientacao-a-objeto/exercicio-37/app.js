 /*
  01

  - Descomente a let abaixo, descubra o que o código está tentando fazer e 
    faça-o funcionar.
*/

class Animal {
  constructor (name) {
    this.name = name
  }
}

class Rabbit extends Animal {
  constructor (name) {
    super(name)
    this.createdAt = new Date()
  }
}

const rabbit = new Rabbit('White Rabbit')

// console.log(rabbit)

/*
  02

  - Descomente o código abaixo e implemente o que está faltando para que ele 
    funcione.
*/

class Counter {
  constructor () {
    this.value = 0
  }

  getValue () {
    console.log(this.value)
    return this.value
  }

  increment () {
    this.value++
  }
}

const counter = new Counter()

// counter.getValue()
// counter.increment()
// counter.getValue()
// counter.increment()
// counter.getValue()

/*
  03

  - A partir do array abaixo, gere um novo array com apenas os valores truthy;
  - Utilize um construtor para resolver este exercício;
  - Não invoque o construtor.
*/

const values = [
  0,
  {},
  '',
  [],
  NaN,
  () => {}
]

const truthyValues = values.filter(Boolean)

// console.log(truthyValues)

/*
  04

  - O código abaixo deveria exibir no console, à cada segundo, uma string com 
    as horas minutos e segundos, no seguinte formato: "h:m:s" onde "h" 
    representa as horas, "m" os minutos e "s" os segundos. Exemplo: "22:01:25";
  - Descomente o código e conserte os erros que estão impedindo que ele 
    funcione.
*/

class Clock {
  constructor ({ template, precision }) {
    this.template = template
    this.precision = precision || 1000
  }

  getFormatedDateUnit (dateUnit) {
    return dateUnit < 10 ? `0${dateUnit}` : dateUnit
  }

  getFormatedTime (hours, minutes, seconds) {
    return this.template
      .replace('h', hours)
      .replace('m', minutes)
      .replace('s', seconds)
  }

  render () {
    const date = new Date()
    const hours = this.getFormatedDateUnit(date.getHours())
    const minutes = this.getFormatedDateUnit(date.getMinutes())
    const seconds = this.getFormatedDateUnit(date.getSeconds())
    const formattedTime = this.getFormatedTime(hours, minutes, seconds)

    console.log(formattedTime)
  }

  start () {
    this.timer = setInterval(() => this.render(), this.precision)
  }

  stop () {
    clearInterval(this.timer)
  }
}

const clock = new Clock({ template: 'h:m:s', precision: 1000 })

// clock.start()

/*
  05

  - No index.html há um elemento "textarea" e um parágrafo. A cada vez que um 
    caractere for inserido no textarea, exiba no parágrafo a quantidade de 
    caracteres que o textarea contém.
*/

const textarea = document.querySelector('[data-js="textarea"]')
const paragraph = document.querySelector('[data-js="paragraph"]')

const showTextLength = event => {
  paragraph.textContent = event.target.value.length
}
textarea.addEventListener('input', showTextLength)

/*
  06

  - Já implementamos os métodos forEach, some, map e filter, do zero;
  - Neste exercício, seu desafio será criar, do zero, o método reduce;
  - Implemente uma função "reduce" que possui a mesma funcionalidade do método 
    reduce original;
  - Você não poderá utilizar o método reduce original, embutido na linguagem;
  - A assinatura e retorno da invocação desta função devem ser os seguintes:
    - reduce([1, 2, 3], (acc, item) => acc + item, 0) // 6;
    - reduce([2, 3, 4], (acc, item) => acc + item, 0) // 9;
    - reduce(
        [1, 2],
        (acc, item) => {
          acc['number-' + item] = item
          return acc
        },
        {}
      ) // {"number-1": 1, "number-2": 2};
    - reduce([1, 2], (acc, item, index) => acc + index, 0) // 1;
    - reduce([1, 2], (acc, item, index, array) => acc + array[index], 0) // 3;
  - Utilize os casos de uso acima para testar sua função;
  - Se você não se lembra como o método reduce funciona, deixarei abaixo do 
    vídeo de correção dos exercícios um link para a aula de introdução ao 
    reduce e um link para a documentação do método no MDN.
*/

const reduce = (array, callback, accumulator) => {
  for (let index = 0; index < array.length; index++) {
    accumulator = callback(accumulator, array[index], index, array)
  }

  return accumulator
}

const result1 = reduce([1, 2, 3], (acc, item) => acc + item, 0) === 6
const result2 = reduce([2, 3, 4], (acc, item) => acc + item, 0) === 9 
const result3 = reduce(
  [1, 2],
  (acc, item) => {
    acc['number-' + item] = item
    return acc
  },
  {}
)
const result4 = reduce([1, 2], (acc, _, index) => acc + index, 0) === 1
const result5 = reduce([1, 2], (acc, _, index, array) => acc + array[index], 0) === 3

// console.log({
//   result1,
//   result2,
//   result3,
//   result4,
//   result5
// })
