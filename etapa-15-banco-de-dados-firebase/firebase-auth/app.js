const loginBtn = document.querySelector('#login-btn')

const login = () => {
  console.log('clicou em logar')
}

const init = () => {
  M.AutoInit()
}


loginBtn.addEventListener('click', login)

init()