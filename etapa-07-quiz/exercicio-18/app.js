/*
  Apenas 3 exercícios, mas que exigem um certo nível de conhecimento do que  
  vimos até aqui =)
*/

const form = document.querySelector('form')
const pElementUsernameFeedback = document.createElement('p')
const pElementSubmitFeedback = document.createElement('p')

const validateUsername = username => {
  const usernameRegex = /^[a-zA-z]{6,}$/
  return usernameRegex.test(username)
}

const getUsernameFeedbckElement = ({ className, textContent }) => {
  pElementUsernameFeedback.setAttribute('class', className)
  pElementUsernameFeedback.textContent = textContent

  return pElementUsernameFeedback
}

const insertIntoDOMUsernameFeedbackElement = isAValidUsername => {
  const successInfo = {
    className: 'username-success-feedback',
    textContent: 'Username válido =)'
  }
  
  const helpInfo = {
    className: 'username-help-feedback',
    textContent: 'O valor deve conter no mínimo 6 caracteres, com apenas letras maiúsculas e/ou minúsculas'
  }

  if (!isAValidUsername) {
    const pElement = getUsernameFeedbckElement(helpInfo)
    form.username.insertAdjacentElement('afterend', pElement)
    
    return
  }

  const pElement = getUsernameFeedbckElement(successInfo)
  form.username.insertAdjacentElement('afterend', pElement)
}

const handleUsernameInput = event => {
  const username = event.target.value
  const isAValidUsername = validateUsername(username)
  const emptyInfo = {
    className: '',
    textContent: ''
  }

  configFeedbackElement(emptyInfo)
  insertIntoDOMUsernameFeedbackElement(isAValidUsername)
}

const configFeedbackElement = ({ className, textContent }) => {
  pElementSubmitFeedback.setAttribute('class', className)
  pElementSubmitFeedback.textContent = textContent

  return pElementSubmitFeedback
}

const insertIntoDOMSubmitFeedback = isAValidUsername => {
  const sucessInfo = {
    className: 'submit-success-feedback',
    textContent: 'Dados enviados =)'
  }

  const helpInfo = {
    className: 'submit-help-feedback',
    textContent: 'Por favor, insira um username válido'
  }

  if (!isAValidUsername) {
    const feedbackElement = configFeedbackElement(helpInfo)
    form.insertAdjacentElement('beforeend', feedbackElement)
    return
  }

  const feedbackElement = configFeedbackElement(sucessInfo)
  form.insertAdjacentElement('beforeend', feedbackElement)
  return
}

const handleFormSubmit = event => {
  event.preventDefault()
  
  const username = event.target.username.value
  const isAValidUsername = validateUsername(username)

  insertIntoDOMSubmitFeedback(isAValidUsername)
}

form.username.addEventListener('input', handleUsernameInput)
form.addEventListener('submit', handleFormSubmit)

/*
  01

  - Valide o valor do input "username" à medida em que ele é digitado;
  - Ele deve conter: 
    - No mínimo 6 caracteres;
    - Apenas letras maiúsculas e/ou minúsculas;
  - Se o valor inserido não é válido:
    - Exiba um parágrafo laranja abaixo do  
      input com a seguinte mensagem: "O valor deve conter no mínimo 6 caracteres,  
      com apenas letras maiúsculas e/ou minúsculas";
    - Se o valor é válido, o parágrafo deve ser verde e exibir a mensagem  
      "Username válido =)";
    - Use as classes disponíveis no arquivo style.css para colorir o parágrafo;
    - Não insira o parágrafo manualmente no index.html.
  
  Dica: pesquise pelo método "insertAdjacentElement", no MDN;
*/

/*
  02

  - Valide o envio do form;
  - Se o username inserido no input é válido, no envio do form, exiba um  
    parágrafo verde abaixo do botão com a mensagem "Dados enviados =)";
  - Se no momento do envio, o valor do input é inválido, o parágrafo deve ser  
    vermelho e exibir "Por favor, insira um username válido".
  - Use as classes disponíveis no arquivo style.css para colorir o parágrafo;
  - Não insira o parágrafo manualmente no index.html.
*/

/*
  03

  - Há algumas aulas, falamos sobre o método some;
  - Neste exercício, seu desafio será criar este método do zero;
  - Implemente uma função "some" que possui a mesma funcionalidade do método  
    some original;
  - A assinatura da invocação desta função deverá ser:
    - some([1, 2, 3], item => item > 2) - Retorna true;
    - some([1, 3, 5], item => item === 0) - Retorna false;
  - Se você não se lembra como o método some funciona, há 2 opções:
    1) Reassistir às seguintes aulas:
      - "Desenvolvendo um popup" - Aula 04-04 da etapa 5;
      - "Correção dos exercícios da aula 04 da etapa 05" - Aula 01-01 da etapa  
        6;
    2) Pesquisar no MDN.
*/