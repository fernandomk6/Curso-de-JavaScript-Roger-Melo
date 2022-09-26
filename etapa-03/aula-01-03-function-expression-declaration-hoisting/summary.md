# Functions básico

## Function declaration 

```js
function sayHi () {
  console.log('Hi')
}
```

**Possuí hoisting**

## Function expression

```js
const sayGoodBye = function () {
  console.log('Good bye')
}
```

**Não possuí hoisting**

## Invocando uma função

```js
sayHi()
sayGoodbye()
```

## Hoisting

Hoisting pode ser traduzido como içamento, ou puxar para cima, ou levantar, elevar.

Function declarations são içadas para o topo do código, independentemente de onde
elas foram declaradas.

Ou seja, automáticamente o javascript "eleva" todas as functions declarations
para o topo do código ou topo do escopo de declaração da função.

Isso ocorre apenas com function declarations, e não ocorre com function expressions.