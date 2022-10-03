## Siblings

Em tradução psignifica irmãos
Elementos no mesmo nível e pertencentes ao mesmo pai direto,
são siblings ou irmãos.

## Childrens

Filhos direto de um pai.

## Parent

Pais, o elemento pai do elemento atual.

## Selecionando todos os filhos de um mesmo pai

```js
const article = document.querySelector('article')
const articleChildren = article.children

console.log(articleChildren)
```

### O objeto retornado pelo método children é um HTMLCollection

Convertendo HTMLCollection para array.

```js
const array = Array.from(HTMLCOllection)
```

## Obtendo a referência do pai de um elemento

```js
const h2 = document.querySelector('h2')
const parentH2 = h2.parentElement

console.log(parentH2)
```

## Obtendo o próximo irmão de um elemento

```js
const h2 = document.querySelector('h2')
const nextSiblingToH2 = h2.nextElementSibling

console.log(nextSiblingToH2)
```

## Obtendo o irmão anterior de um elemento

```js
const h2 = document.querySelector('h2')
const previousSiblingToH2 = h2.previousElementSibling

console.log(previousSiblingToH2)
```