const paragraph = document.querySelector('.copy-me')
const box = document.querySelector('.box')


paragraph.addEventListener('copy', () => {
  console.log('texto copiado')
})

box.addEventListener('mousemove', event => {
  console.log(event)
  box.innerHTML = `${event.offsetX}, ${event.offsetY}`
})