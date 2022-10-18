/*
  01

  - Crie uma função que recebe uma data por parâmetro e retorna a data na 
    formatação "DD/MM/AAAA". Exemplo: 03/07/2021;
  - Não utilize a date-fns.
*/
const to2Digits = digit => digit < 10 ? `0${digit}` : `${digit}`

const getFormatedDate = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  return `${to2Digits(day)}/${to2Digits(month)}/${year}`
}

// console.log(getFormatedDate(new Date('august 21 1998 14:15:22')))

/*
  02

  - Crie uma função que recebe uma data por parâmetro e retorna o horário e a 
    data na formatação: "03:07 - domingo, 7 de junho de 2020";
  - Não utilize a date-fns.
*/

const months = [
  'janeiro', 
  'fevereiro',
  'março',
  'abril',
  'maio',
  'junho',
  'julho',
  'agosto',
  'setembro',
  'outubro',
  'novembro',
  'dezembro'
]

const weekDays = [
  'domingo', 
  'segunda', 
  'terça', 
  'quarta', 
  'quinta', 
  'sexta', 
  'sabádo', 
  'domingo'
]
const getDateExtended = date => {
  const hour = to2Digits(date.getHours())
  const minutes = to2Digits(date.getMinutes())
  const weekDay = weekDays[date.getDay()]
  const monthDay = date.getDate()
  const month = months[date.getMonth()]
  const year = date.getFullYear()

  return`${hour}:${minutes} - ${weekDay}, ${monthDay} de ${month} de ${year}`
}

console.log(getDateExtended(new Date()))

/*
  03

  - Faça um destructuring nas propriedades "id" e "isVerified" do objeto abaixo;
  - Exiba os valores lado a lado, no console;
  - Não modifique a declaração da const user.
*/

const user = { id: 42, isVerified: true }
const { id, isVerified } = user

console.log(id, isVerified)

/*
  04

  - Faça um destructuring nas propriedades "name" dos objetos abaixo;
  - No destructuring, faça "Bender" ser armazenado por uma const "nameA" e 
    "HAL 9000" ser armazenado por uma const "nameB";
  - Exiba os valores das consts lado a lado, no console;
  - Não modifique a declaração das consts "robotA" e "robotB".
*/

const robotA = { name: 'Bender' }
const robotB = { name: 'HAL 9000' }

const { name: nameA } = robotA
const { name: nameB } = robotB

console.log(nameA, nameB)
/*
  05

  - Usando shorthand property names, crie um objeto com as propriedades "a", 
    "b" e "c";
  - O valor dessas propriedades deve ser o mesmo das consts "a", "b" e "c";
  - Exiba o objeto no console.
*/

const a = 'a'
const b = 'b'
const c = 'c'

const abc = { a, b, c }
console.log(abc)

/*
  06

  - Refatore o código abaixo.
*/

const useDataSomewhereElse = data => console.log(data)


const updateSomething = ({ target, property, willChange } = {}) => {
  willChange = willChange === 'valor indesejado' ? 'valor desejado' : willChange

  useDataSomewhereElse({ target, property, willChange })
}

updateSomething({ target: '1', property: '2', willChange: 'valor indesejado' })

/*
  07

  - O código abaixo é o mesmo do relógio digital que implementamos na aula 
    passada. Refatore-o.
*/

const clockContainer = document.querySelector('.clock-container')

const updateClock = () => {
  clockContainer.innerHTML = new Date()
    .toLocaleString()
    .slice(11)
    .split(':')
    .reduce((accumulator, data, index, array) => 
      array.length === index + 1 ? 
        accumulator + `<span>${data}</span>` : 
        accumulator + `<span>${data}</span> : `, '')
}

setInterval(updateClock, 1000)
