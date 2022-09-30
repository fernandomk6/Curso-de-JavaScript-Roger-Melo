# Modificando uma página

## Resagatando o texto dentro de uma tag

Encadeie a propriedade `innerText`. Ela retornará
o texto que existe dentro da tag e o texto que existe
nas tags dentro dessa tag.

```js
const p = document.querySelector('p')

const textOfP = p.innerText
```

## Alterando o texto dentro da tag

Basta atribuir algum valor a propriedade
`innerText` que o objeto do DOM possuí.

```js
p.innerText = 'seu novo texto'
```

## Alterando o HTML dentro da tag

Para alterar o HTML dentro de uma tag devemos ter
a referência ao DOM correspondênte a essa tag.

A propriedade que usamos é o `innerHTML`.

Essa propriedade retorna o HTML que a tag possui.
Essa propriedade pode ter seu valor alterado para outra
string, essa nova string será interpretada como HTML. Ou seja,
a string será convertida em HTML.