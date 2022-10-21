/*
  01

  - Crie um objeto de request;
  - Abra este website https://pokeapi.co/;
  - Baseado no exemplo de endpoint exibido no website, abra uma requisição do 
    tipo GET para obter dados do pokémon 'pikachu';
  - Envie a requisição e trackeie ela usando o listener de evento adequado;
  - Verifique se o estado da requisição representa que a operação foi completada
    e se o status http do request indica que a requisição foi bem sucedida;
  - Se as condições do item acima forem atendidas, exiba no console o texto da 
    resposta que a requisição obteve;
  - Se apenas a 1ª condição for atendida (o estado da requisição representa que 
    a operação foi completada), exiba no console a mensagem 'Não foi possível 
    obter os dados do pokémon';
  - Teste também a verificação do item acima.
*/

const request = new XMLHttpRequest()
const URLPikachu = 'https://pokeapi.co/api/v2/pokemon/pikachu'

request.addEventListener('readystatechange', () => {
  const isOperationCompleted = request.readyState === 4
  const isStatusSuccess = request.status === 200
  const isSuccessfullyResponse = isOperationCompleted && isStatusSuccess
  const isFailedResponse = isOperationCompleted && !isStatusSuccess

  if (isSuccessfullyResponse) {
    console.log(request.response)
  }

  if (isFailedResponse) {
    console.log('Não foi possível obter os dados do pokémon')
  }
})

request.open('GET', URLPikachu)
// request.send()


/*
  02

  - Crie um objeto que contém suas informações pessoais;
  - As propriedades devem armazenar: 
    - Seu nome;
    - Seu sobrenome;
    - Seu sexo;
    - Sua idade (number);
    - Sua altura (number);
    - Seu peso (number);
    - Se você está andando (boolean iniciado em false);
    - Quantos metros você caminhou (number iniciado em 0).
*/

const human = {
  firstName: 'Fernando Henrique',
  lastName: 'Pontes Pereira',
  sex: 'male',
  age: 23,
  height: 1.70,
  weight: 90,
  isWalking: false,
  metersWalked: 0
}

/*
  03

  - Logo abaixo, adicione ao objeto um método que adiciona 1 ao valor da 
    propriedade que armazena a idade;
  - A cada vez que o método é invocado, 1 deve ser somado à idade atual;
  - Após criar o método, adicione 5 anos à idade do objeto.
*/

human.incrementAge = function () {
  this.age++
}

/*
  04

  - Logo abaixo, adicione ao objeto um método que soma a quantidade de metros 
    caminhados ao valor que foi recebido como parâmetro do método;
  - Este método também deve modificar o boolean do objeto que indica se a 
    pessoa representada pelo objeto está, ou não, andando;
  - Após criar o método, faça a pessoa caminhar alguns metros, invocando o 
    método 4x, com diferentes metragens passadas por parâmetro.
*/

human.walk = function (meters) {
  if (!meters) {
    return
  }

  this.isWalking = true
  this.metersWalked += meters
}

/*
  05

  - Logo abaixo, adicione ao objeto um método que retorna a seguinte string:
  
  'Oi. Eu sou o NOME_COMPLETO, tenho IDADE anos, ALTURA metros de altura, 
  peso PESO quilos e, só hoje, eu já caminhei QUANTIDADE_DE_METROS_CAMINHADOS 
  metros.'
  
  - Antes de retornar a string, faça as seguintes validações:
    - Se o sexo do objeto for "Feminino", antes do nome da pessoa, substitua "o"
      por "a";
    - Se a idade for 1, substitua "anos" por "ano", no singular;
    - Se a quantidade de metros caminhados for 1, substitua "metros" por 
      "metro", no singular.
*/

const getPlural = (quantity, plural, singular) => quantity === 1 ? singular : plural
const getOOrA = sex => sex === 'male' ? 'o' : 'a'
const getFullName = (firstName, lastName) => `${firstName} ${lastName}`
const getNameMessage = (oOrA, fullName) => `Oi. Eu sou ${oOrA} ${fullName}`
const getAgeMessage = (age, yearsPluralOrSingular) => `tenho ${age} ${yearsPluralOrSingular}`
const getHeightMessage = height => `${height} metros de altura`
const getWeightMessage = weight => `peso ${weight} quilos`

const getWalkMessage = metersWalked => {
  const metersPluralOrSingular = getPlural(metersWalked, 'metros', 'metro') 

  return metersWalked === 0 
    ? `ainda não caminhei hoje`
    : `só hoje, eu já caminhei ${metersWalked} ${metersPluralOrSingular}`
}

human.getInfo = function () {
  const { firstName, lastName, age, sex, height, weight, metersWalked } = this

  const fullName = getFullName(firstName, lastName)
  const oOrA = getOOrA(sex)
  const yearsPluralOrSingular = getPlural(age, 'anos', 'ano')

  const nameMessage = getNameMessage(oOrA, fullName)
  const ageMessage = getAgeMessage(age, yearsPluralOrSingular)
  const heightMessage = getHeightMessage(height)
  const weightMessage = getWeightMessage(weight)
  const walkMessage = getWalkMessage(metersWalked)

  const info = `${nameMessage}, ${ageMessage}, ${heightMessage}, ${weightMessage} e, ${walkMessage}.`
  return info
}

/*
  06

  - Crie uma função que recebe um valor como argumento e retorna um boolean 
    indicando se o valor é truthy ou falsy;
  - Invoque a função e, a cada invocação, passe como argumento um valor falsy.
    - Faça isso até passar todos os valores falsy;
  - Invoque a função e, desta vez, a cada invocação, passe como argumento um 
    valor truthy;
    - Faça isso até que 7 valores truthy sejam passados.
*/

const getBoolean = value => Boolean(value)

// console.log(getBoolean(true))
// console.log(getBoolean({}))
// console.log(getBoolean(() => {}))
// console.log(getBoolean(1))
// console.log(getBoolean('a'))
// console.log(getBoolean([]))


/*
  07

  - Crie uma função que recebe um parâmetro, que será o nome de um livro;
  - Essa função deve conter um objeto com 3 propriedades, que são nomes de 
    livros;
  - Cada uma dessas 3 propriedades deve armazenar um novo objeto que terá 
    outras 3 propriedades que armazenam:
      - A quantidade de páginas (number);
      - Autor;
      - Editora.
  - Faça a função retornar o objeto que representa o livro passado por 
    parâmetro;
  - Se o parâmetro não for passado, faça a função retornar o objeto com todos 
    os livros.

  Dica: propriedades de objetos podem ser declaradas como strings.
*/

const getBookInfo = bookName => {
  const bookNameLower = bookName ? bookName.toLowerCase() : null

  const booksOptions = {
    'sappiens': {
      name: 'Sapiens',
      author: 'Yuval Harari',
      publishingCompany: 'L&PM',
      pagesNumber: 459
    },
  
    'o universo numa casca de noz': {
      name: 'O Universo numa Casca de Noz',
      author: 'Stephen William Hawking',
      publishingCompany: 'Bantam Spectra',
      pagesNumber: 224
    },
  
    'uma breve história do tempo': {
      name: 'Uma Breve História do Tempo',
      author: 'Stephen William Hawking',
      publishingCompany: 'Intrínseca',
      pagesNumber: 256
    }
  }

  return  booksOptions[bookNameLower] || booksOptions
}

const myBookInfo = getBookInfo()
console.log(myBookInfo)
