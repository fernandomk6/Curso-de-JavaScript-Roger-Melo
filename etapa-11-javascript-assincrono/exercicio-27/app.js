/*
  01

  - Implemente um código assíncrono entre os console.log() abaixo.
*/

// console.log('Linha 1')
// console.log('Linha 2')
// console.log('Linha 3')
// console.log('Linha 4')

// setTimeout(() =>{
//   console.log('código assíncrono')
// }, 1000)


// console.log('Linha 5')
// console.log('Linha 6')
// console.log('Linha 7')
// console.log('Linha 8')

/*
  02

  - Descomente o código abaixo e crie a função que fará a string dentro da 
    "logGreeting" ser exibida no console.
*/

// const x = callback => callback('marreco')

// function logGreeting (name) {
//   console.log(`olá, ${name}`)
// }

// x(logGreeting)

/*
  03

  - O código abaixo possui uma parte que pode ser isolada. Isole-a.
*/

const isLasserThanFive = num => num < 5

const numbers = [3, 4, 10, 20]
const lesserThanFive = numbers.filter(isLasserThanFive)

// console.log(lesserThanFive)

/*
  04

  - Refatore o código abaixo.
*/

const prices = [12, 19, 7, 209]
const sumPrices = (acc, price) => acc + price
const totalPrice = prices.reduce(sumPrices, 0)

// console.log(`Preço total: ${totalPrice}`)

/*
  05

  - Abaixo da declaração do objeto "car", modifique a cor do carro para 'azul';
  - Não insira `car.color = azul`.
  - Não insira `car['color'] = azul`.
*/

let car = { color: 'amarelo' }
const changeCarColor = (car, color) => car.color = color

changeCarColor(car, 'blue')

// console.log(car)

/*
  06

  - Crie uma função que recebe 3 argumentos;
  - Se um dos 3 argumentos não for passado na invocação, a string 'A função 
    deve ser invocada com 3 argumentos' deve ser retornada;
  - Se todos os argumentos forem passados, retorne a string 'A função foi 
    invocada com 3 argumentos'.
*/

const haveThreeArguments = (parameter1, parameter2, parameter3) => {
  const isSomeParameterUndefined = [parameter1, parameter2, parameter3].includes(undefined)
  return isSomeParameterUndefined
    ? 'A função deve ser invocada com 3 argumentos'
    : 'A função foi invocada com 3 argumentos'
}


/*
  07

  - O objeto abaixo representa uma caixa de livros com espaço para 5 livros e 
    que, no momento em que foi declarado, possui nenhum livro dentro;
  - Crie um método que irá adicionar livros na caixa;
  
  Este método deve:
    - Receber por parâmetro o número de livros que serão colocados na caixa. 
      Esse número não precisa encher a caixa de uma só vez, os livros podem 
      ser acrescentados aos poucos;
    - Retornar a frase: "Já há 'X' livros na caixa";
    - Se a caixa já estiver cheia, com todos os espaços já preenchidos, o 
      método deve retornar a frase: "A caixa já está cheia";
    - Se ainda houverem espaços na caixa mas a quantidade de livros passada por
      parâmetro for ultrapassar o limite de espaços da caixa, mostre quantos 
      espaços ainda podem ser ocupados, com a frase: "Só cabem mais 
      QUANTIDADE_DE_LIVROS_QUE_CABEM livros";
    - Se couber somente mais um livro, mostre a palavra "livro" (no singular) 
      na frase acima.
*/

const getPluralOrSingular = (quantity, plural, singular) => quantity > 1 ? plural : singular


const booksBox = {
  spaces: 5,
  booksIn: 0,

  add (quantity) {
    const isNoSpaces = this.booksIn === this.spaces
    const availableSpaces = this.spaces - this.booksIn
    const isInsufficientSpaces = quantity > availableSpaces

    if (isNoSpaces) return this.getNoSpacesMessage()
    if (isInsufficientSpaces) return this.getAvailableSpacesMessage(availableSpaces)
      
    this.booksIn += quantity
    return this.getBooksInMessage()
  },

  getNoSpacesMessage () {
    return 'A caixa já está cheia'
  },

  getAvailableSpacesMessage (availableSpaces) {
    const fitPluralOrSingular = getPluralOrSingular(availableSpaces, 'cabem', 'cabe')
    const bookPluralOrSingular = getPluralOrSingular(availableSpaces, 'livros', 'livro')

    return `Só ${fitPluralOrSingular} mais ${availableSpaces} ${bookPluralOrSingular}`
  },

  getBooksInMessage() {
    const bookPluralOrSingular = getPluralOrSingular(this.booksIn, 'livros', 'livro')

    return `Já há '${this.booksIn}' ${bookPluralOrSingular} na caixa`
  }
}


