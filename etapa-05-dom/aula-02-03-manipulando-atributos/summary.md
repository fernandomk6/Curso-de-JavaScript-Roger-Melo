# Manipulando atributos

## Como resgatar o valor de um atributo?

Usando o método `getAttribute('nome do atributo')`.

```js
const link = document.querySelector('a')
const href = link.getAttribute('href')

console.log(href)
```

## Modificando o atributo

Usando o método `setAttribute`.

```js
link.setAttribute('target', 'blank')

console.log(link.getAttribute('target'))
```

Pode ser usado para alterar um attributo já setado, e para criar
novos atributos.