/*
  01

  - O código abaixo foi usado em um exercício passado...
  - O problema é que é muito conveniente que o array tenha 3 números e a função
    também calcule 3 números;
    - Ou seja, se um número for adicionado ou removido do array, o código
      quebra;
  - O seu desafio neste exercício será deixar essa função flexível a ponto de 
    somar todos os números do array que ela recebe como argumento, independente
    de quantos números o array tenha;
    - Para conseguir fazer isso, você terá que pesquisar por uma feature 
      chamada "Rest parameters" (sim, pesquisar e entender essa feature é parte
      deste desafio);
    - Além de testar a nova função com o array "numbers", teste-a com um outro
      array que contenha 2 números e com um outro que contenha 4 números.
*/

const numbers = [50, 100, 50]
const numbers2 = [50, 100]
const numbers3 = [50, 100, 50, 1]

const addNumberTo = (accumulator, number) => accumulator + number

const sum = (...numbers) => numbers.reduce(addNumberTo, 0)

// console.log(sum(...numbers))
// console.log(sum(...numbers2))
// console.log(sum(...numbers3))

/*
  02

  - Descomente a div com a class "accordion", no index.html;
  - Quando um dos 3 itens do accordion for clicado exiba, abaixo do item, 
    o texto correspondente. Este é o resultado final:
    https://vimeo.com/752350703/9b01da98d3
  
  Leia a dica abaixo apenas se achar necessário.

  - Para que o item do accordion seja "ativado" ao clicar, faça um toogle 
    utilizando a classe "active".
*/

// clicar abre se clicar de novo fecha
// quando um abre todos os outros fecham

const accordionItems = Array.from(document.querySelectorAll('.accordion-item'))

const isAccordionItem = element => element.classList.contains('accordion-item')

const closeAccordionItem = accordionItem => {
  const [ accordionHeader, accordionBody ] = accordionItem.children

  accordionHeader.classList.remove('active')
  accordionBody.classList.remove('active')
}

const toggleAccordionItem = accordionItem => {
  const [ accordionHeader, accordionBody ] = accordionItem.children

  accordionHeader.classList.toggle('active')
  accordionBody.classList.toggle('active')
}

const closeAccordionsExcept = clickedAccordionItem => {
  const unClickedAccordions = accordionItems.filter(accordionItem => 
    accordionItem !== clickedAccordionItem)

  unClickedAccordions.forEach(closeAccordionItem)
}

const showAccordionItem = event => {
  const accordionItem = event.composedPath().find(isAccordionItem)

  closeAccordionsExcept(accordionItem)
  toggleAccordionItem(accordionItem)
}

const setAccordionItemClickEvent = accordionItem => 
  accordionItem.addEventListener('click', showAccordionItem)

accordionItems.forEach(setAccordionItemClickEvent)

/*
  03

  - Descomente as duas const abaixo e implemente a função "carMaker";
  - A função carMaker deve: 
    - Retornar um novo objeto; 
      - Esse novo objeto deve conter as propriedades "name" e "color" 
        (que foram inseridas como argumentos);
    - Setar "volkswagenProto" como prototype do objeto que ela retorna;
  - Não insira o operador "new" antes da invocação de carMaker. carMaker deve
    ser uma factory function;
  - Após implementar a função: 
    - Teste se "amarok" e "jetta" possuem o mesmo prototype;
    - Teste o método logCarInfo nos dois objetos.
*/

const carMaker = ({ name, color }) => 
  Object.setPrototypeOf({ name, color }, volkswagenProto)

const volkswagenProto = {
  constructor: carMaker,

  logCarInfo () {
    console.log(`Volkswagen ${this.name}, cor ${this.color}.`)
  }
}

const amarok = carMaker({ name: 'Amarok', color: 'preta' })
const jetta = carMaker({ name: 'Jetta', color: 'prata' })

/*
  04

  - Descomente o console.log abaixo e implemente a função 
    "getIndexesOfCharacter";
  - Essa função:
    - Recebe uma string e um caractere como parâmetros;
    - Retorna um array com os indexes das ocorrências do caractere na string;
  - Ao implementar a função, o console.log abaixo deve exibir um array 
    [64, 180];
  - Para se assegurar que a função funciona com qualquer caractere, teste ela 
    modificando o caractere que ela recebe como segundo argumento.
*/

const aString = 'O Curso de JavaScript Roger Melo funciona com turmas fechadas, abertas poucas vezes e é focado em quem ainda não é fluente em JS. Ou seja, quem não consegue construir aplicações web com JavaScript puro.'

const getIndexesOfCharacter = (aString, target) => {
  const aStringAsArray = [ ...aString ]

  return aStringAsArray.reduce((accumulator, character, index) => {
    if (character === target) {
      accumulator.push(index)
    }
  
    return accumulator
  }, [])
}

// console.log(getIndexesOfCharacter(aString, 'b'))

/*
  05

  - Descomente a div com a class "intro", no index.html;
  - O desafio neste exercício é implementar um "efeito digitação", como o deste
    exemplo: https://vimeo.com/752356051/e402d40a7b

  Abaixo tem o passo a passo de uma das formas de fazer. Siga-o, caso tenha
  dificuldades.

  - Declare um array "messages". Cada item desse array é uma string que será 
    "digitada" na tela. Exemplos: 'sou fluente em JS', 'construo aplicações web
    com JS puro';
  - Abaixo do array, declare as seguintes lets:
    - messageIndex, iniciando em 0. Essa let é responsável por armazenar qual é
      o index do item atual do array messages;
    - characterIndex, iniciando em 0. Essa let é responsável por armazenar qual
      é o index do caractere atual do item do array messages;
    - currentMessage, iniciando com string vazia. Essa let é responsável por 
      armazenar o item atual do array;
    - currentCharacters, iniciando com string vazia. Essa let é responsável por
      armazenar as letras do item do array que serão inseridas na tela;
  - Abaixo das lets, declare uma função "type";
  - Abaixo da função, invoque um setInterval que invoca a função type a cada 
    200 milisegundos;
  - Dentro da função "type":
    - Declare um if que verifica se messageIndex é igual a quantidade total de
      itens do array messages. Se essa condição for verdadeira, messageIndex 
      deve receber 0;
    - Abaixo do if, faça:
      - currentMessage receber o item do array messages que está no index que 
        messageIndex armazena;
      - currentCharacters receber a string que deve ser exibida na execução 
        atual da função (você pode invocar o slice() na currentMessage para 
        fazer isso);
      - characterIndex receber o valor que ela já tem + 1;
      - O h1 com o data-js "typing" receber currentCharacters;
    - Após inserir as atribuições acima, declare um if que verifica se 
      currentCharacters tem a mesma quantidade de caracteres de currentMessage.
      Se essa condição for verdadeira, faça messageIndex receber o valor que 
      ela já tem + 1 e faça characterIndex receber 0.
*/

const typingEl = document.querySelector('[data-js="typing"]')

const phrases = [
  'sou fluente em JS',
  'construo aplicações WEB com JS puro'
]

let letterIndex = 0
let actualPhrase = phrases[0]

const getRandomPhrase = () => 
  phrases[Math.round(Math.random() * ((phrases.length - 1) - 0))]

const getActualLetter = actualPhrase => {
  const letter = actualPhrase[letterIndex]
  letterIndex++

  return letter
}

const renderLetter = () => {
  if (letterIndex > actualPhrase.length - 1) {
    actualPhrase = getRandomPhrase()

    letterIndex = 0
    typingEl.textContent = ''

    return 
  }

  typingEl.textContent += getActualLetter(actualPhrase)
}

const intervalID = setInterval(renderLetter, 100)

/*
  06

  - Converta o array "wrongDataFormat" para o objeto do comentário abaixo.
*/

const wrongDataFormat = [
  'preto-PP',
  'preto-M',
  'preto-G',
  'preto-GG',
  'preto-GG',
  'branco-PP',
  'branco-G',
  'vermelho-M',
  'azul-XG',
  'azul-XG',
  'azul-XG',
  'azul-P'
]

/*
  {
    preto: {
      PP: 1,
      M: 1,
      G: 1,
      GG: 2
    },
    branco: {
      PP: 1,
      G: 1
    },
    vermelho: {
      M: 1
    },
    azul: {
      XG: 3,
      P: 1
    }
  }
*/
