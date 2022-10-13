/* 
  01

  - Insira apenas o css do bootstrap no index.html.
*/

/* 
  02

  - Após um segundo e meio do carregamento da página, exiba no console a  
    mensagem "Um segundo e meio se passaram desde que a página foi carregada".
*/

setTimeout(() => console.log('Um segundo e meio se passaram desde que a página foi carregada'), 1500)

/* 
  03

  - Faça o contador do index.html funcionar;
  - O clique no botão "Parar contador" deve fazer com que o contador exiba 0.
*/

const counterElement = document.querySelector('h1')
const buttonInitCounter = document.querySelector('.button-init-counter')
const buttonStopCounter = document.querySelector('.button-stop-counter')
const timeInterval = 1000
let counter = 0
let counterId = null

const initCounter = () => {
  changeCounterClass()

  counterId = setInterval(showCounter, timeInterval)
}

const stopCounter = () => {
  changeCounterClass()
  clearInterval(counterId)
  resetCounter()
  renderCounter(counter)
}

const resetCounter = () => {
  counter = 0
}

const changeCounterClass = () => counterElement.classList.toggle('text-primary')

const renderCounter = counter => counterElement.textContent = counter
const incrementCounter = () => counter++
const showCounter = () => {
  incrementCounter()
  renderCounter(counter)
}

buttonInitCounter.addEventListener('click', initCounter)
buttonStopCounter.addEventListener('click', stopCounter)
