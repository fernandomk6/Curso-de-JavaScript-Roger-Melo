# Overview em tipos de dados primitivos vs não primitivos e objetos e propriedades globais

## Tipos primitivos

Em JavaScript, um primitivo (valor primitivo, tipo de dados primitivo) 
é um dado que **não é um objeto** e **não possui métodos ou propriedades**.

- Null
- undefined
- String
- Number
- Boolean
- BigInt
- Symbol

Todos os primitivos são **imutáveis** (não podem ter o seu valor modificado).

## Wrappers em JavaScript

À exceção do null e do undefined, todos os primitivos tem um objeto wrapper equivalente:

- String para o primitivo string.
- Number para o primitivo.
- Boolean para o primitivo Boolean.
- BigInt para o primitivo BigInt
- Symbol para o primitivo Symbol.

O Método `valueOf()` do objeto wraper retorná o valor do dado primitivo.

É possível verificar o tipo da variável usando o operador `typeof <variável>`

## Verificando tipo de dados

- Quando usado o perador `typeof` seguido da referencia ao dado, e o retorno não for, `object`
esse dado é um dado primitivo.

- Quando usado o operador `typeof` seguido da referencia ao dado, e o retorno for `object`,
esse não é um dado primitivo.

O primitivos não tem métodos, nem propriedades, pois não são objetos.

## Objetos wraper

O javascript possui, para cada tipo primitivo, um objeto wraper.
Esse objeto wraper armazena métodos e propriedades que auxiliam a lidar
com qualquer tipo de dado primitivo.

Quando tentamos acessar um método em um dado primitivo, o javascript,
transforma esse dado primitivo em uma instância de seu objeto wraper correspondente.

Ou seja:

```js
const name = 'fernando'
const nameCapitalized = name.toUpperCase()
```

`name` armazena um dado primitivo, uma `String`. Logo essa string não tem métodos
nem propriedades. Logo abaixo usamos `name.toUpperCase()`, esse método não está sendo
executado diretamente na string mais sim no objeto wraper String.

Ou seja, sempre que necessário, o javascript transforma o dado primitivo em uma instância
de seu objeto wraper correspondente. Logo em seguida, o javascript transforma o dado em primitivo 
de novo. Descartando o objeto wraper.

É por isso que strings, numbers podem usar métodos e propriedades. Mas esses métodos 
não estão no dado primitivo, mas no objeto wraper, que o javascript instância sempre que necessário,
sempre que alguma propriedade ou método é acessado em um primitivo, o javascript verifica
se esse método ou propriedade existem no seu wraper correspondente. Se sim, a conversão é
feita, de primitivo para object, depois a ação é executada, o object wraper é desfeito
e o dado volta a ser primitivo.

## Primitos e seus valores

Primitivos são imultaveis. Não podem ter seu valor alterado.
Mas pode tem seu valor substituído.

```js
let name = 'fernando'
name = 'pedro'
```

`name` teve seu valor substituído e não alterado. O valor `fernando` foi excluído, e 
foi criado um novo.

Todos os primitivos tem seus valores passados diretamente.

```js
const name = 'fernando'
const name2 = name 

// name armazena `fernando`
```

Ao executar `name2 = name` name2 recebeu 'fernando', pois, name armazena um tipo primitivo,
e tipos primitivos tem seu valor acessado diretamente. o valor de `name` é 'fernando'.

O operador de atribuição `=` atribuí o valor do operando da direita ao operando da esquerda.
O valor de um primitivo é o seu valor literal.

## Objectos e seus valores

Objetos são multaveis. Podem ter seu valor alterado e podem ter seu valor
substituído.

```js
const person = {
  name: 'fernando'
}

person.name = 'pedro'
```

`person` teve seu valor alterado e não substituído. O valor de `person` ainda é um
objeto. Apenas o valor do objeto que foi alterado. Mas especificamente a propriedade
`name` que teve seu valor alterado para 'pedro'.

**Todos os object tem seus valores passados por referências**
Ou
**Todos os objects são ponteiros**

```js
const person = {
  name: 'fernando'
}

const person2 = person

// O valor de person é um ponteiro para { name: 'fernando' }
// Lembre-se o aao usar o operador de atribuição = o valor do operando
// da direita é atribuído ao operando da esquerda.
// Então:
// person2 recebe um ponteiro para { name: 'fernando' } (que é o valor de person)
```

Ao executar `person = person2` person2 recebeu um ponteiro para o objeto `{ name: fernando }`.

**O valor de uma variável que teve um objeto atribuída a sí, é um ponteiro para o objeto**
que lhe foi **atribuído**.

**Objetos sao passados por referência**.

```js
const person = { name: 'fernando' }
```

`person` agora armazena um ponteiro para `{ name: 'fernando' }`;
`{ name: 'fernando' }` retorna um ponteiro, para esse objeto literal.
Esse objeto é alocado em algum local na memoria e é retornado o local que esse objeto está
alocado. Ou seja, um ponteiro ou referência.

O operador de atribuição `=` atribuí o valor do operando da direita ao operando da esquerda.
O valor de um primitivo é o seu valor literal.
O valor não primitivo é um ponteiro para o seu valor literal.

## Objetos e propriedades padrão do javascript

### Pripriedades globais que retornam um valor

- Infinity
- NaN
- undefined
- GlobalThis

### Métodos globais que retornam um valor

- isFinite()
- isNaN() *isNaN(Number(value)): Number({}) => NaN, Number([]) => 0, Number('oi') => NaN*
- parseFloat()
- parseInt()

Number(' '), number recebendo uma string com espaço retorna 0;
Number(''), number recebendo um astring vazia retorna 0;
Number('50') number recebendo uma string numérica retorna um numero (50);

Se isNaN(x) retorna false, você pode usar xem uma expressão 
aritmética sem fazer a expressão retornar NaN.

Se retornar true, x fará com que todas as expressões aritméticas 
retornem NaN.

### Objetos fundamentais

Estes são os objetos básicos e fundamentais sobre os quais todos os 
outros objetos são baseados. Isso inclui objetos gerais, booleanos, 
funções e símbolos.

- Object
- Function
- Boolean (wraper)
- Symbol (wraper)

### Objetos de erro

- Error
- ReferenceError
- SyntaxError
- TypeError

### Números e datas

Estes são os objetos base que representam números, datas e cálculos matemáticos.

- Number (wraper)
- BigInt (wraper)
- Math
- Date

### Processamento de texto

Esses objetos representam strings e suportam manipulá-los.

- String (wraper)
- RegExp

### Coleções indexadas

Esses objetos representam coleções de dados que são ordenados por um 
valor de índice. 
Isso inclui matrizes (digitadas) e construções semelhantes a matrizes.

- Array

### Coleções com chave

Esses objetos representam coleções que usam chaves. 
As coleções iteráveis ​​(Mape Set) contêm elementos que 
são facilmente iterados na ordem de inserção.

São diferentes de arrays e objects. É como um array chaveado. 
Organizado por chaves e iterável.

- Map
- Set

### Dados estruturados

Esses objetos representam e interagem com buffers de dados estruturados 
e dados codificados usando JavaScript Object Notation (JSON).

- JSON

### Controlar objetos de abstração

As abstrações de controle podem ajudar a estruturar o código, 
especialmente o código assíncrono (sem usar retornos de chamada profundamente aninhados, por exemplo).

- Promise
- Generator
- GeneratorFunction
- AsyncFunction
- AsyncGenerator
- AsyncGeneratorFunction