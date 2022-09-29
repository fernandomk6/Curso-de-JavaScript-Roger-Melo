# Strings

Strings armazenas letras ou textos.

## Concatenação de strings

```js
const firstName = 'Fernando'
const lastName = 'Henrique'

const fullName = firstName + ' ' + lastName
console.log(fullName)
```

## Acessando um caractere da string

```js
const abc = 'abc'
console.log(abc[0]) // a

// o caractere 'a' está na posição 0 da string
// usamos string[posicao] para acessar o caractere desta posição
```

## Métodos e propriedades de strings

- length: exibe o número de caracteres da string

**Espaços em branco também são contados como caracteres**.

- toUppercase

Retorna uma nova string com todos os caracteres em maiúsculo.
Métodos e funções devem ser invocados para serem executados, por esse motivo
usamos `myString.toUpperCase()`.

toUpperCase e toLowerCase não alteram o valor original da string, eles retornam um 
novo valor.


- indexOf

O método indexOf vai retornar a posição do primeiro caractere caractere passado como argumento
que foi encontrado na string. Caso o caractere não seja encontrado -1 será retornado.

**O que é enviado para a função é um argumento**.
**O que é recebido pela função é um parâmetro**.

```js
const myName = 'Fernando'

const indexOfD = myName.indexOf('d')

console.log(indexOfD) // 6

// 6 é a posição do caractere 'd' dentro da string
```

### Diferenças entre metodos e propriedades

As propriedades apenas acessam um valor que já está definido.
Os métodos eles fazem uma ação e retornam um valor.

```js
const abc = 'abc'

console.log(abc.length) // 3
```

### Funções x métodos

Função é um bloco de código que executa alguma ação.
Método é uma função, que está associada a um objeto.