# Numbers

## Inteiros e decimais

```js
const radious = 10
const pi = 3.14

console.log(radious, pi) // 10 3.14
```

Um number em javascript pode ser tanto um inteiro 10 ou um
numero de ponto flutuante como 3.14.

Os numeros inteiros geralmente são utilizados quando precisaremos
fazer operações matemática.

## Operações matemáticas

### Operador de modulo %: 

Retorna o resto da divisão entre dois operandos.

```js
console.log(5 % 2) // 1

// 1 é o resto da divisão entre 5 e 2
```

O operador de modulo dividirá com números inteiros ou seja
5 / 2, da 2 para cada e fica restando 1. O resultado dessa divisão
feita pelo operador de modulo sempre sera um inteiro. 
Ou seja a duvisão não será 2.5, pois o modulo resultará apenas
números inteiros na divisão. Já o seu retorno pode ser sim
um número de ponto flutuante.

```js
console.log(2.5 % 2) // 0.5
```

### Exponênciação

Para fazer 4 elevado a 2, em javascript, escrevemos o código dessa forma.

```js
console.log(4 ** 2) // 16
```

#### Precedência dos operadores

1. Parênteses
2. Expoêntes ou raizes
3. Multiplicação e divisão
4. Adição e subtração

Percebam que algumas ordens tem dois operadores, como 
por exemplo, adição e subitração. Qual dos dois deve ser executado
primeiro? nesses casos onde os dois operados estão na mesma ordem,
o primeiro a ser usado é o que está mais a direita. Ou seja aquele que
apareceu primeiro.

```js
console.log(1 + 1 - 1) // 1

// 1 + 1 - 1
// 2 - 1
// 1
```

Nesse exemplo temos soma e subtração, que estão no mesmo nivel.
Nesse caso executamos primeiro o que esta mais a direita.
Ou seja a soma, e depois a subitração.

## Operadores de incremento e decremento

```js
let postLikes = 10

postLikes = postLikes + 1 

console.log(postLikes) // 11

// Podemos fazer essa mesma coisa dessa forma
postLikes++

console.log(postLikes) // 12

// A mesma coisa funciona para decrementar

postLikes--
console.log(postLikes) // 11
```

Existem 2 operadores de incremento e dois de decremento
- number++
- ++number
- number--
- --number

Basicamente o operador (++ ou --) pode vir antes ou depois do numero
quando vem antes, o javascript primeiro incrementa depois executa sua ação.
Quando o operador vem depois do numero, o javascript primeiro executa a ação depois
incrementa. Veja o exemplo.

```js
let aNumber = 1
console.log(aNumber++) // 1

// Perceba que no exemplo acima primeiro foi executado a ação (console.log)
// e depois disso o incremento foi feito, por isso 1 foi exibido.

// Para se certificar que foi incrementado é so colocar para imprimir
// na tela o valor

console.log(aNumber) // 2 
```

### Adicional assing

Veja esse exemplo:

```js
let aNumber = 10
aNumber = aNumber + 10

console.log(aNumber) // 20

// Podemos fazer a mesma coisa assim
aNumber += 10
console.log(aNumber) // 30

// O mesmo funciona para subtrair, multiplicar, dividir... 
// para todos os operadores matemáticos
aNumber -= 10
aNumber /= 10
aNumber *= 10
aNumber **= 10
aNumber %= 10
```

Quando ver o operador `number += x` ler se pegue o valor que number ja tem, 
some x a esse valor e atribuia a variável number. 

## NaN - Not a Number

- NaN é sempre o resultado de uma operação matemática incorreta.
- NaN é um number.
- NaN é um valor falsy.
- NaN === NaN retorna falso.

Exemplos:

```js
const result = 1 + 'oi'

console.log(result) // NaN
```

**Perceba que o operador + é tbm concatenação de string**.
Ou seja se você usar `1 + 'oi'` como 'oi' é uma string, o javascript
irá concatenar essa string ao número 1, retornando '1oi'.

Ou seja operações de number + string, retornarão um string e não um NaN.

