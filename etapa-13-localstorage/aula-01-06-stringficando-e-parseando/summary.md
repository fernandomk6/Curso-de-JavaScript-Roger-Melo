# Stringficando e parseando

## Objetos javascript para strings (stringficando)

Armazenando esse array na localStorage

```js
const myArray = [
  {a: 1, b: 2},
  {c: 3, d: 4},
  {e: 5, f: 6},
]
```

1. Transformar esse array em string

`const objStringified = JSON.stringify(<array || object>)`

```js
console.log(JSON.stringify(myArray)) 
// [{"a":1,"b":2},{"c":3,"d":4},{"e":5,"f":6}]

// Array stringficado. Podemos salvar o array stringficado na 
// localStorage.
```

2. Armazenando na localStorage

```js
localStorage.setItem('myArray', JSON.stringify(myArray))
```

3. Obtendo item da localStorage e transformando em objeto javascript

```js
const arrayInJSON = localStorage.getItem('myArray')
const convertedArrayInObject = JSON.parse(arrayInJSON)

console.log(typeof convertedArrayInObject) // object
```