const link = document.querySelector('a')
const href = link.getAttribute('href')

// console.log(href)

link.setAttribute('target', 'blank')

console.log(link.getAttribute('target'))