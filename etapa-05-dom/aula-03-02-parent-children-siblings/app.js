const article = document.querySelector('article')
const articleChildren = Array.from(article.children)

articleChildren.forEach(children => {
  children.classList.add('children')
})

const h2 = document.querySelector('h2')
const nextSiblingToH2 = h2.nextElementSibling
const previousSiblingToH2 = nextSiblingToH2.previousElementSibling

console.log({
  nextSiblingToH2,
  previousSiblingToH2
})