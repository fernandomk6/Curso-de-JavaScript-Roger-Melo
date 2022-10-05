const ul = document.querySelector('ul')

ul.addEventListener('click', ({ target : { nodeName }}) => {
  const map = { 
    LI () {
      console.log('clicou na LI')
    }, 
    UL () {
      console.log('clicou na UL')
    } 
  }

  map[nodeName]()
})