# Operador not (!)

O not (!) vai inverter o valor booleano a direita

De forma mais detalhada
O operador faz é transformar valores falsy em true
e valores truthy em false

Ou seja ele faz um conversão de valor para o boolean oposto

```js
!anyFalsy === true
!anyTruthy === false
```

## Teste com valores falsy

```js
// valores falsy
const arrayFalsy = ['', null, undefined, 0, false, NaN]

arrayFalsy.forEach(value => console.log(!value))

/*
true
true
true
true
true
true
*/
```

O operador not não alterará o valor da variavel a direita, ele apenas retornará
o booleano oposto ao seu valor. Lembre-se o not é um operador, e operadores
são usados em operações / expressões, e expressões retornam valores. Retornam,
não alteram.

