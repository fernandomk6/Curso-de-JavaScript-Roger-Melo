/*
  01

  - Crie um objeto com um método getColor. Este método deve retornar o valor da
    propriedade 'color' dos objetos descritos abaixo;
  - Crie 2 novos objetos que representem dois carros. Na criação dos objetos, 
    faça o objeto com o método getColor ser prototype desses dois carros;
  - Após criar os carros, crie neles as propriedades 'color'. Atribua valores 
    diferentes para a propriedade color de cada carro;
  - Teste o método getColor do prototype dos carros.
*/

const carPrototype = {
  getColor() {
    return this.color
  }
}

const createCar = () => Object.create(carPrototype)

const supra = createCar()
const lancer = createCar()

supra.color = 'vermelho'
lancer.color = 'vinho'

// console.log(supra.getColor(), lancer.getColor())



/*
  02

  - No código abaixo, a invocação da função 'getSummary' está retornando 
    "undefined foi dirigido por undefined e tem undefined no papel principal.";
  - Faça a invocação da função retornar a string com os valores esperados 
    (ao invés de undefined's);
  - Não modifique o objeto 'movie' e a declaração da função 'getSummary';
  - Após fazer o código funcionar, você pode refatorar a declaração da função, 
    se necessário.
*/

const movie = {
  title: 'Forrest Gump',
  director: 'Robert Zemeckis',
  starringRole: 'Tom Hanks'
}

const getSummary = ({ title, director, starringRole }) => 
  `${title} foi dirigido por ${director} e tem ${starringRole} no papel principal.`

// console.log(getSummary(movie))

/*
  03

  - A invocação da função abaixo deve retornar este objeto:
    {
      prop1: 'value1',
      prop2: 'value2',
      prop3: 'value3' 
    }
  - Descomente o código e crie a função.
*/

// const arrayToObj = array => {
//   return array.reduce((accumulator, [key, value]) => {
//     accumulator[key] = value
//     return accumulator
//   }, {})
// }

const arrayToObj = array => Object.fromEntries(array)

// console.log(
//   arrayToObj([
//     ['prop1', 'value1'], 
//     ['prop2', 'value2'],
//     ['prop3', 'value3']
//   ])
// )

/*
  04

  - Refatore as classes abaixo para factory functions.
*/

const formatTimeUnits = units => units
  .map(unit => unit < 10 ? `0${unit}` : unit)

const getTime = () => {
  const date = new Date()
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()

  return [hours, minutes, seconds]
}

const getFormattedTime = template => {
  const [hours, minutes, seconds] = getTime()
  const formattedTime = formatTimeUnits([hours, minutes, seconds])

  return template
    .split(':')
    .map((_, index) => formattedTime[index])
    .join(':')
}

const createClock = ({ template }) => ({
  template,

  render () {
    const formattedTime = getFormattedTime(this.template)
    console.log(formattedTime)
  },

  start () {
    const oneSecond = 1000
    this.render()
    this.timer = setInterval(() => this.render(), oneSecond)
  },

  stop () {
    clearInterval(this.timer)
  }
})


const createExtendedClock = ({ template, precision = 1000 }) =>  ({
  ...createClock({ template }),
  precision,
  start () {
    this.render()
    this.timer = setInterval(() => this.render(), this.precision)
  }
})

const clock = createExtendedClock({ template: 'h:m:s', precision: 1000 })

// clock.start()

/*
  05

  - No index.html, descomente: 
    - A div com a classe "container" que contém uma tabela e um botão;
    - A tag link (no head) que carrega os estilos CSS do Bootstrap.
  - Seu desafio neste exercício é exportar as células da tabela HTML para um 
    arquivo CSV que pode ser aberto no Excel ou Google Planilhas;
  
  Passo a passo para alcançar este resultado
    - Quando um click no botão "Exportar para CSV" acontecer, faça o seguinte:
      - Gere um array com todas as referências dos elementos <tr> da tabela;
      - À partir do array de referências das <tr>, gere uma string CSV:
        - Uma string CSV contém, em cada linha, separados por vírgula, o 
          conteúdo textual de uma célula da <tr> (seja a célula um <th> ou 
          <td>). Ou seja, a string CSV deve ter a formatação abaixo, incluindo 
          as quebras de linha:
          
          #,Jogo do Ano,Desenvolvedora,Data da premiação
          1,The Last of Us Part II,Naughty Dog,10 de dezembro de 2020
          2,Sekiro: Shadows Die Twice,FromSoftware,12 de dezembro de 2019
          3,God of War,SIE Santa Monica Studio,6 de dezembro de 2018
          4,The Legend of Zelda: Breath...,Nintendo...,7 de dezembro de 2017
          5,Overwatch,Blizzard Entertainment,1 de dezembro de 2016
        
        - Dicas:
          - O elemento <tr> contém uma propriedade 'cells'.
          - Para quebrar linha, você pode usar dentro da string o caractere 
            especial '\n';
          - É possível gerar a string usando o método reduce. Porém, neste caso,
            o código fica mais legível (e menos complicado) com o map.
      - Após gerar a string CSV, insira 2 atributos no botão:
        - href, com o valor 
          `data:text/csvcharset=utf-8,${encodeURIComponent(SUA_STRING_CSV)}`. 
          encodeURIComponent é um método do window que precisa receber a string 
          CSV que você criou;
        - download, com o valor 'table.csv'.
*/

// const exportTableBtn = document.querySelector('[data-js="export-table-btn"]')
// const table = document.querySelector('[data-js="table"]')

// const getCellData = (accumulator, { textContent }) => {
//   accumulator.push(textContent)
//   return accumulator
// }

// const getRowData = tableRow => {
//   const cells = Array.from(tableRow.cells)
//   return cells.reduce(getCellData, [])
// }

// const getTableRows = table => Array.from(table.querySelectorAll('tr'))
// const getTableDatas = tableRows => tableRows.map(getRowData)

// const tableToCSV = table => {
//   const tableRows = getTableRows(table)
//   const tableDatas = getTableDatas(tableRows)
//   const stringCSV = tableDatas.join('\n')
//   return stringCSV
// }

// const setExportAttributesCSV = (link, stringCSV) => {
//   link.setAttribute('href', `data:text/csvcharset=utf-8,${encodeURIComponent(stringCSV)}`)
//   link.setAttribute('download', 'table.csv')
// }

// const exportTableToCSV = event => {
//   const stringCSV = tableToCSV(table)
//   setExportAttributesCSV(event.target, stringCSV)
// }

// exportTableBtn.addEventListener('click', exportTableToCSV)


/*
  06
  
  - Na Weather Application, refatore para uma factory function o código que 
    executa os requests e obtém as informações do clima da cidade;
  - Se ao fazer o request, uma mensagem "Access to fetch at 'http://...' from 
    origin 'http://...'"... for exibida no console, crie uma nova app na 
    plataforma da accuweather e pegue uma nova chave: 
    https://developer.accuweather.com/;
  - O procedimento é o mesmo mostrado nas aulas da etapa em que construímos 
    essa aplicação.
*/



/*
  07

  - No index.html, comente a div com a classe "container" que contém a tabela;
  - Descomente: 
    - A <div> com a classe "container" abaixo da div que você acabou de 
      comentar;
    - A <link> que importa o style.css;
  - Construa uma aplicação de conversão de moedas. O HTML e CSS são os que 
    você está vendo no browser (após salvar os arquivos);
  - Você poderá modificar a marcação e estilos da aplicação depois. No momento, 
    concentre-se em executar o que descreverei abaixo;
    - Quando a página for carregada: 
      - Popule os <select> com tags <option> que contém as moedas que podem ser
        convertidas. "BRL" para real brasileiro, "EUR" para euro, "USD" para 
        dollar dos Estados Unidos, etc. Use os dados da API para popular 
        os selects.
      - O option selecionado por padrão no 1º <select> deve ser "USD" e o option
        no 2º <select> deve ser "BRL";
      - O parágrafo com data-js="converted-value" deve exibir o resultado da 
        conversão de 1 USD para 1 BRL;
      - Quando um novo número for inserido no input com 
        data-js="currency-one-times", o parágrafo do item acima deve atualizar 
        seu valor;
      - O parágrafo com data-js="conversion-precision" deve conter a conversão 
        apenas x1. Exemplo: 1 USD = 5.0615 BRL;
      - O conteúdo do parágrafo do item acima deve ser atualizado à cada 
        mudança nos selects;
      - O conteúdo do parágrafo data-js="converted-value" deve ser atualizado à
        cada mudança nos selects e/ou no input com data-js="currency-one-times";
      - Para que o valor contido no parágrafo do item acima não tenha mais de 
        dois dígitos após o ponto, você pode usar o método toFixed: 
        https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
    - Para obter as moedas com os valores já convertidos, use a Exchange rate 
      API: https://www.exchangerate-api.com/;
      - Para obter a key e fazer requests, você terá que fazer login e escolher
        o plano free. Seus dados de cartão de crédito não serão solicitados.
  
  PS: o desafio aqui é você implementar essa aplicação sozinho(a), antes 
  de ver as próximas aulas, ok? =)
*/

const currencyOne = document.querySelector('[data-js="currency-one"]')
const currencyTwo = document.querySelector('[data-js="currency-two"]')
const convertedValue = document.querySelector('[data-js="converted-value"]')
const currencyOneTimes = document.querySelector('[data-js="currency-one-times"]')
const feedbackMessage = document.querySelector('[data-js="feedback-message"]')

const apiKey = 'f9bde40008634e49359a1a7d'

const defaultCurrencyBase = 'USD'
const defaultCurrencyTarget = 'BRL'

const showFeedbackMessage = message => feedbackMessage.textContent = message

const getLocalStorage = key => JSON.parse(localStorage.getItem(key))

const setLocalStorage = (key, value) => localStorage.setItem(key, JSON.stringify(value))

const getCurrencyCodesURL = () => 
  `https://v6.exchangerate-api.com/v6/${apiKey}/codes`

const getPairConversionURL = (currencyBase, currencyTarget) => 
  `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${currencyBase}/${currencyTarget}`

const fetchCurrencyCodes = async () => {
  try {
    const currencyCodesURL = getCurrencyCodesURL()
    const response = await fetch(currencyCodesURL)

    const { supported_codes, 'error-type': errorType} = await response.json()

    if (errorType) {
      const errorResponses = {
        'invalid-key': 'Sua chave de API não é válida.',
        'inactive-account': 'Seu endereço de e-mail não foi confirmado.',
        'quota-reached': 'Sua conta atingiu o número de solicitações permitidas pelo seu plano.',
      }

      const message = `${errorType} ${errorResponses[errorType]}`
      throw new Error(message)
    }

    setLocalStorage('currencyCodes', supported_codes)
    return supported_codes

  } catch (error) {
    console.log(error)
    showFeedbackMessage('Falha ao obter códigos suportados')
  }
}

const fetchExchangeRate = async pairConversionURL => {
  try {
    const response = await fetch(pairConversionURL)
    const exchangeRate = await response.json()
    const { 'error-type': errorType } = exchangeRate
    
    if (errorType) {
      const errorResponses = {
        'unsupported-code': 'Não damos suporte ao código da moeda fornecida',
        'malformed-request': 'Alguma parte do seu pedido não segue a estrutura de request.',
        'invalid-key': 'Sua chave da API não é válida.',
        'inactive-account': 'Se enderço de email não foi confirmado.',
        'quota-reached': 'Sua conta atingiu o número máximo de solicitações permitidas pelo plano.'
      }

      const message = `${errorType} ${errorResponses[errorType]}`
      throw new Error(message)
    }

    return exchangeRate

  } catch (error) {
    console.log(error)
    showFeedbackMessage('Falha ao obter taxa de câmbio')
  }
}

const getCurrencyCodes = async () => 
  getLocalStorage('currencyCodes') || fetchCurrencyCodes()
  
const insertOptionIntoSelect = (select, option) => select.append(option)


const createOption = (value, textContent) => {
  const option = document.createElement('option')
  option.value = value
  option.textContent = textContent || value

  return option
}

const setSelectedOption = (select, value) => {
  const options = Array.from(select.children)
  
  options.forEach(option => {
    const isTargetOption = option.value === value

    if (isTargetOption) {
      option.selected = true  
    }
  })
}

const fillSelects = async () => {
  const currencyCodesTemplate = [[defaultCurrencyBase], [defaultCurrencyTarget]]
  const currencyCodes = await getCurrencyCodes() || currencyCodesTemplate

  currencyCodes.forEach(([ currencyCode ]) => {
    insertOptionIntoSelect(currencyOne, createOption(currencyCode))
    insertOptionIntoSelect(currencyTwo, createOption(currencyCode))
  })

  setSelectedOption(currencyOne, defaultCurrencyBase)
  setSelectedOption(currencyTwo, defaultCurrencyTarget)

  updateConversionRate()
}

const getConversionRate = async (currencyBase, currencyTarget) => {
  const pairConversionURL = getPairConversionURL(currencyBase, currencyTarget)
  const { conversion_rate = 0 } = await fetchExchangeRate(pairConversionURL)

  return conversion_rate
}

const showConversionRate = async (currencyBase, currencyTarget, multiplier = 1) => {
  const conversionRate = await getConversionRate(currencyBase, currencyTarget)
  const conversionRateAmount = Number(conversionRate.toFixed(2)) * multiplier

  convertedValue.textContent = conversionRateAmount.toFixed(2)
}

const getSelectedCurrencies = () => { 
  const currencyBase = currencyOne.value
  const currencyTarget = currencyTwo.value

  return [currencyBase, currencyTarget]
}

const updateConversionRate = () => {
  const multiplier = currencyOneTimes.value
  const [ currencyBase, currencyTarget ] = getSelectedCurrencies()

  showConversionRate(currencyBase, currencyTarget, multiplier)
}

window.addEventListener('load', fillSelects)
currencyOneTimes.addEventListener('input', updateConversionRate)
currencyOne.addEventListener('input', updateConversionRate)
currencyTwo.addEventListener('input', updateConversionRate)
