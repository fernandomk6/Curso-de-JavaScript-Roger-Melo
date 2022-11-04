# Spread operator

A sintaxe de spread `...` permite que um *iterável* (leia a nota abaixo), como um 
**array** ou **string**;
Seja **espalhados** em locais onde zero ou mais argumentos (para chamadas de função);
Ou elementos (para literais de array ou objetos) são **esperados**. 
Em um literal de objeto, a sintaxe de spread adiciona os pares **chave-valor** ao objeto 
que está sendo criado.

Nota: *Iteravel é qualquer dado que tenha em sua cadeia de proprotypes a propriedade*
**Symbol(Symbol.iterator)**. 
*Para este estudo consideraremos apenas strings e arrays como iteravéis*.

Em objetos literais, o spread adicionara pares de chave e valor.

```js
const objCopy = { ...obj } 

// Equivale à

const objCopy = {
  obj.prop1,
  obj.prop2,
  obj.prop3
}
```

Nesse exemplo acima, cada par de chave e valor do objeto `obj` é adicionado
a const objCopy.

### Dicas

**Spread de objeto só pode ser atribuido a um objeto literal**.

Spread operator só pode ser usado dentro de **array literal**, 
**objeto literal** e **parentesis de funções**

*Para todos os casos separe o uso do spread para* **arrays literais e strings (iteraveis)**,
*e para **objetos literais***.

## O que pode ser "spreadado?"

- Strings;
- Arrays;
- e Objetos.

Ou seja, apenas isso é válido:

```js
const a = [...Array]
const b = [...String]
const c = {...Object}
```

## Aonde o spread é esperado?

- Dentro de Arrais literais;
- Dentro de Objetos literais;
- Dentro dos parentesis de funções.

Ou seja apenas isso é permitido

```js
func(...array, ...string) // or ...string (...object so pode ser atribuido a outro objeto)
[...array, ...string]
{...object}
```

## Exemplos

### Como parametro de funções 

```js
function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));
```

Na invocação da função `sum` o argumento é uma expressão de `spread` no array `numbers`.
Essa expressão "espalha" os itens do array. 
Isso: `sum(...numbers)`;
Equivale a isso: `sum(1, 2, 3)`.
Cada item do array numbers é iterado e adicionado como argumento, separados por
vírgula.

### Diversos usos

```js
myFunction(a, ...iterableObj, b)
[1, ...iterableObj, '4', 'five', 6]
{ ...obj, key: 'value' }
```

### Observações

Spread de strings e arrays são permitidos em objetos literais, porem 
o nome da propriedade ficara 0, 1, 2...

Isso é válido:

```js
const a = {...'fernando'}
const b = {...[1,2,3]}

/*
{
  "a": {
      "0": "f",
      "1": "e",
      "2": "r",
      "3": "n",
      "4": "a",
      "5": "n",
      "6": "d",
      "7": "o"
  },
  "b": {
      "0": 1,
      "1": 2,
      "2": 3
  }
}
*/
```

Já isso aqui não é:

```js
const a = [...{prop1: 1, prop2: 2}]

// Uncaught TypeError: {(intermediate value)(intermediate value)} is not iterable
```

## Considerações mais importantes 

**Spread de objeto (...obj) só é permitido dentro de objetos literais**.
No exemplo acima está sendo feito o spread de um obj, dentro de um array.

Spread de string e de arrays, são permitidos em arrays literais, objetos literais
e em parentesis de funções.

### Existem três lugares distintos que aceitam a sintaxe de propagação:

Lista de argumentos de função ( myFunction(a, ...iterableObj, b))
Literais de matriz ( [1, ...iterableObj, '4', 'five', 6])
Literais de objeto ( { ...obj, key: 'value' })

*iterableOBJ* = string ou array 
*obj* = objeto (chave valor) 

### Spread pode ser usado várias vezes

```js
myFunction(-1, ...args, 2, ...[3]);
```

## Cuidados

Muito cuidado ao copiar arrays e objetos usando spread

Verifique se o array ou objeto a ser copiado não é multidimensional.

Pode ser inadequado para copiar matrizes e objetos multidimensionais. 
O mesmo vale para Object.assign(), ou concat, nenhuma operação nativa 
em JavaScript faz um clone profundo. 

*Clone profundo, é fazer uma copia dos valores reais e não das referencias*

Concatc, assign e spread, copiam os valores, inclusive se os mesmos forem referências.

```js
const b = ['b']
const a = ['a', b]

const c = [...a]

// c is ['a', referenceToArrayB]
```

Lembre se que objetos são passados por referencia em javascript.
Os unicos dados que não são passados por referencias são os bons e velos tipos
primitivos.

Muito cuidado ao copiar objetos e arrays aninhdos, pois os elementos aninhados
podem ser passados por referencia. 

**O spread copia os valores apenas a primeira dimensão do array ou objeto.**
