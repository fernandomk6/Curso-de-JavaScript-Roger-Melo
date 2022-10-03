/*
  01

  - Faça com que o texto do h1 do index.html seja exibido com todas as letras  
    maiúsculas.
*/

const title = document.querySelector('h1')
title.innerText = title.innerText.toUpperCase()

/*
  02

  - Adicione, na ul vazia do index.html, os números do array "numbers" abaixo;
  - Cada número deve estar dentro de uma <li> com a classe "number".
*/

const numbers = [ 53, 24, 3, 8, 1, 6, 57, 80, 77, 98, 55 ]
const ulNumbers = document.querySelector('.numbers')
const insertNumberIntoNumbers = number => {
  ulNumbers.innerHTML += `<li class="number">${number}</li>`
}

numbers.forEach(insertNumberIntoNumbers)

/*
  03

  - Modifique as cores dos números dentro da ul da seguinte forma:
    - Se o número é par, ele deve ser exibido na cor "lightblue";
    - Se o número é ímpar, exiba-o na cor "pink".
*/
 
const liNumbers = document.querySelectorAll('.number')
const changeLiNumberColor = liNumber => {
  const number = Number(liNumber.innerText)
  const isEven = number % 2 === 0
  const lightBlueColor = 'lightBlue'
  const pinkColor = 'pink'

  if (isEven) {
    liNumber.style.color = lightBlueColor
    return
  }

  liNumber.style.color = pinkColor
}

liNumbers.forEach(changeLiNumberColor)

/*
  04

  - Adicione a classe "body-background" no corpo do index.html;

  P.s: a classe "body-background" já está declarada no style.css.
*/

const body = document.querySelector('body')
body.classList.add('body-background')

/*
  05

  - Adicione o link 
    https://github.com/roger-melo-treinamentos/curso-de-js-roger-melo no href  
    do link do index.html.
*/

const aLinkRepoCJRM = document.querySelector('a')
const linkRepoCJRM = 'https://github.com/roger-melo-treinamentos/curso-de-js-roger-melo'

aLinkRepoCJRM.setAttribute('href', linkRepoCJRM)

/*
  06

  - Exiba o novo valor do atributo href do link no console.
*/

console.log(aLinkRepoCJRM.getAttribute('href'))

/*
  07

  - Exiba, no console, um objeto com todas as propriedades CSS que podem ser  
    manipuladas via JS no title.
*/

console.log(title.style)


/*
  08

  - Remova a classe "body-background", do elemento body.
*/

body.classList.remove('body-background')

/*
  09

  - Se o link da página possuir uma classe "link", remova-a;
  - Não utilize o método remove() para fazer isso.
*/

aLinkRepoCJRM.classList.toggle('link')
