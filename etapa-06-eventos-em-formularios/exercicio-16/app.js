/*
  01

  - Faça com que ao clicar em um dos elementos dentro da div, a mensagem  
    'Clicou na div.' não seja exibida no console.
*/

// dom references
const div = document.querySelector('div')
const elementsInsideDiv = Array.from(div.children)

// functions
const insertTextH2 = text => h2.innerText = text 

const renderClickedElementInfo = event => {
  const clickedElement = event.target
  const tagNameLowerCase = clickedElement.tagName.toLowerCase()
  const message = `Clicou no ${tagNameLowerCase}, filho da div.`

  insertTextH2(message)
  event.stopPropagation()
}

const renderClickDivInfo = () => {
  const message = 'Clicou na div.'
  insertTextH2(message)
}

const setClickEventOnElement = element => {
  element.addEventListener('click', renderClickedElementInfo)
}

// events
elementsInsideDiv.forEach(setClickEventOnElement)
div.addEventListener('click', renderClickDivInfo)

/*
  02

  - No código acima, faça com que quando um filho da div for clicado, a mensagem  
    exibida no console seja "Clicou no NOME_DA_TAG_COM_LETRAS_MINÚSCULAS, filho
    da div.".
*/

/*
  03

  - No index.html, abaixo da div sem classe, insira um h2;
  - Faça com que a mensagem de clique na div e a mensagem de clique em algum
    filho da div, ao invés de ser exibida no console, seja inserida neste h2.
*/

const h2 = document.querySelector('h2')

/*
  04

  - Faça com que quando o texto do h2 for copiado, a mensagem "Texto copiado!"  
    seja exibida no console.
*/

h2.addEventListener('copy', () => {
  const textCopyMessage = 'Texto copiado!'

  console.log(textCopyMessage)
})

/*
  05

  - Faça com que o movimento do mouse dentro da div com a classe "egg" substitua
    o texto que ela tem por 
    "Eixo X: COORDENADA_EIXO_X | Eixo Y: COORDENADA_EIXO_Y".
*/

const egg = document.querySelector('.egg')

const logCoordinates = event => {
  const element = event.target
  const coordinatesX = event.offsetX
  const coordinatesY = event.offsetY
  const coordinatesMessage = `Eixo X: ${coordinatesX} | Eixo Y: ${coordinatesY}`

  element.innerText = coordinatesMessage
}

egg.addEventListener('mousemove', logCoordinates)

/*
  06

  - Modifique a cor do ovo para "lightgoldenrodyellow" quando o botão for 
    clicado.
*/

const button = document.querySelector('button')

const changeEggColor = () => {
  const newBackgroundColor = `lightgoldenrodyellow`
  egg.style.backgroundColor = newBackgroundColor
}

button.addEventListener('click', changeEggColor)

/*
  07

  - Se o array de pessoas abaixo conter, no mínimo, um(a) Front-end developer,
    exiba a mensagem abaixo no console.

    "O array people contém, no mínimo, um(a) Front-end developer."
*/

const people = [
  { id: 1, name: 'Pedro Henrique', profession: 'Dentista' },
  { id: 2, name: 'Fábio Alexandre', profession: 'Físico' },
  { id: 3, name: 'Thiago Ferreira', profession: 'Veterinário' },
  { id: 4, name: 'Marcelo Antonio', profession: 'Matemático' },
  { id: 5, name: 'Camilla Midori', profession: 'Engenheira Civil' },
  { id: 6, name: 'Gustavo D\'Aqui', profession: 'Gerente de Marketing' },
  { id: 7, name: 'Ana Paula', profession: 'Front-end developer' },
  { id: 8, name: 'Matheus Manucci', profession: 'Piloto' },
  { id: 9, name: 'Hamilton Silva', profession: 'Advogado' },
  { id: 9, name: 'Fernando Henrique', profession: 'Front-end developer' }
]

const frontendDeveloperExist = people.some(person => person.profession === 'Front-end developer')

console.log(frontendDeveloperExist)

const ul = document.querySelector('ul')
const span = document.querySelector('span')

people.forEach(person => {
  li = document.createElement('li')
  li.innerText = `${person.name} | ${person.profession}`

  const isFrontendDeveloper = person.profession === 'Front-end developer'

  if (isFrontendDeveloper) {
    li.style.fontWeight = 'bold'
  }

  ul.append(li)
})