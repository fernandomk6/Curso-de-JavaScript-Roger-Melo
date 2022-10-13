# Método sort

Sort significa **ordenar**.

Ele vai ordenar os itens do array.


- O sort por padrão já ordena strings em ordem alfabética.

O método sort() ordena os elementos do próprio array e retorna o array.
**Altera o array original**.

A ordenação não é necessariamente estável. A ordenação padrão é de acordo 
com a pontuação de código unicode.

Se funcaoDeComparacao não for informado;

- os elementos serão ordenados de acordo com a sua conversão para texto; 
- e o texto comparado na pontuação unicode do texto convertido. 

Por exemplo, "banana" vem antes de "cherry". Em uma ordenação numérica, 
9 vem antes de 80, mas porque os números são convertidos para texto e, 
"80" vem antes de "9" na ordenação Unicode.

O sorte deve retornar um número.
Maior que zero, menor que zero, ou zero.

- Se quisermos que o item1 venha antes do item2, a função deve retornar um número menor que 0.
- Se quisermos que o item2 venha antes do item1, a função deve retornar um número maior que 0.
- Se não precisar mudar a ordem, a função deve retornar 0.

- Quando um número positivo é retornado, o item2 vem primeiro.
- Quando um número negativo é retornado, o item1 vem primeiro.
- Quando não for necessario ordenar, 0 deve ser retornado.

```js
const theBigFamily = [
  { name: 'Lineu', score: 20 },
  { name: 'Nenê', score: 10 },
  { name: 'Tuco', score: 50 },
  { name: 'Bebel', score: 30 },
  { name: 'Agostinho', score: 70 }
]

// Usaremos a propriedade score para ordenar os objetos.
// Ordenaremos de forma decrecente, ou seja de cima para baixo.

theBigFamily.sort((item1, item2) => {
  if (item1.score > item2.score) {
    return -1
  }

  if (item2.score > item1.score) {
    return 1
  }

  return 0
})


console.log(theBigFamily)

/**
 * [
    {
        "name": "Agostinho",
        "score": 70
    },
    {
        "name": "Tuco",
        "score": 50
    },
    {
        "name": "Bebel",
        "score": 30
    },
    {
        "name": "Lineu",
        "score": 20
    },
    {
        "name": "Nenê",
        "score": 10
    }
]
 */
```

Refatorando o código

```js
const theBigFamily = [
  { name: 'Lineu', score: 20 },
  { name: 'Nenê', score: 10 },
  { name: 'Tuco', score: 50 },
  { name: 'Bebel', score: 30 },
  { name: 'Agostinho', score: 70 }
]

// Usaremos a propriedade score para ordenar os objetos.
// Ordenaremos de forma decrecente, ou seja de cima para baixo.

theBigFamily.sort((item1, item2) => item1.score - item2.score)



console.log(theBigFamily)
```

Exemplo ordenando números

```js
const scores = [10, 20, 100, 66, 50, 200, 33]

scores.sort((number1, number2) => number1 - number2)

console.log(scores)

/*
[
    10,
    20,
    33,
    50,
    66,
    100,
    200
]
*/
```

Perceba o seguinte. Quando a expressão de retorno do callback é `item1 - item2`,
será ordenado de forma **crescente**, do menor para o maior.

Quando a expressão de retorno do callback é `item2 - item1`
será ordenado de forma **decrescente**, do maior para o menor.

Resumindo:

- `item1 - item2`: ordenação crescente.
- `item2 - item1`: ordenação decrescente.

