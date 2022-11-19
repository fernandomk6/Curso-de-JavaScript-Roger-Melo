# Rest Parameters

O perador rest parameters só pode ser usado como parametro de uma
função.

A sintaxe de rest parameter permite representar um número 
indefinido de argumentos como um array.

Rest parameters faz o inverso do spread operator.

- Spread separa os elementos
- Rest junta os elementos

## Sintaxe 

```js
// Main exemple
function(a, b, ...theArgs) {
  // ...
}

// Extra exemple
function (...aArray) {
  const uppedArray = aArray.map(item => item.toUperCase())
}
```

## Descrição

Se o último argumento nomeado de uma função tiver prefixo com ..., ele irá se tornar 
um array em que os elemento de 0 (inclusive) até theArgs.length (exclusivo) são 
disponibilizados pelos argumentos atuais passados à função.

No exemplo acima (Main exemple), theArgs irá coletar o terceiro argumento da função 
(porquê o primeiro é mapeado para a, e o segundo para b) e assim por diante em 
todos os argumentos consecutivos.

## Exemplos

Como theArgs é um array, você pode pegar número de elementos usando a 
propriedade length:

```js
function fun1(...theArgs) {
  console.log(theArgs.length);
}

fun1();  // 0
fun1(5); // 1
fun1(5, 6, 7); // 3
```

No próximo exemplo, nós usamos o rest parâmetro para buscar argumentos do 
segundo parâmetro para o fim. Nós multiplicamos eles pelo primeiro parâmetro:

```js
function multiply(multiplier, ...theArgs) {
  return theArgs.map(function (element) {
    return multiplier * element;
  });
}

var arr = multiply(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]
```

## Rest parameters e destructuring

Rest parameters também pode ser usado em destructuring.

Exemplos:

```js
const arr = [1, 2, 3]
const [a, ...b] = arr

// a => 1
// b => [2, 3]

const obj = {
  x: 1, 
  y: 2,
  z: 3
}

const { x, ...f } = obj 
// Quando usar rest, o nome da const não precisa ser
// o mesmo nome de uma propriedade

// x => 1
// f => { y: 2, z: 3 }

```