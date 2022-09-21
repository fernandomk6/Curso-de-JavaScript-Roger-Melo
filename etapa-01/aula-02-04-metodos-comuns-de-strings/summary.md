# Métodos comuns de strings

## lastIndexOf

Vai retornar a posição da ultima ocorrencia do caractere que você passar 
como argumento. Caso o caractere não seja encontrado, -1 será retornado.

```js
const myName = 'Fernando'
const lastIndexOfN = myName.lastIndexOf('n')

console.log(lastIndexOfN) // 5

// A ultima ocorrência do caractere 'n' está na posição 5
// 0 1 2 3 4 5 6 7
// F e r n a n d o

```

## Slice

O método slice() extrai uma parte de uma string e a retorna como uma nova string, 
sem modificar a string original.

Quando usar o slice?
**Quando você quiser obter uma parte de uma string**.

Recebe dois argumentos:
- É o índice, de base zero, onde se inicia a extração.

Se for um número negativo, será o mesmo que executar str.length + startIndex 
(por exemplo, se startIndex for -3, será o mesmo que executar str.length - 3).

**Se startIndex for maior ou igual a str.length, uma string vazia será retornada**.

- Apartir de onde a string deve ser cortada (descartada).

Opcional. É o índice, de base zero, onde termina a extração. 
O caractere que possuir este índice não será incluso.

Se omitido ou possuir valor de undefined, ou for maior que str.length, 
slice() extrairá até o fim da string.

### Exemplos

```js
const myName = 'Fernando Henrique Pontes Pereira'

const firstName = myName.slice(0, 8)
const lastName = myName.slice(myName.lastIndexOf('P'))

console.log(firstName, lastName)
```

```js
const email = 'fernandomk6@gmail.com'

const emailProvider = email.slice(12, 17)
const emailName = email.slice(0, 11)

console.log(emailProvider) // gmail
console.log(emailName) // fernandomk6
```

## Replace

Vai substituir um caractere em uma string por outro.
Passamos dois argumentos:
- Primeiro: string que queremos substituir.
- Segundo: caractere que irá substituir o primeiro caractere passado como argumento.

**Quando passado string, apenas a primeira ocorrência será substituida**.

```js
const myName = 'Fernando Henrique'
const myNameReplaced = myName.toLowerCase().replace('n', 's') 

console.log(myNameReplaced) // fernando henrique

/**
 * Perceba que apenas a primeira ocorrencia
 * do caractere 'n' foi substituída.
 * /

/**
 * Perceba também que 'n' é diferente de 'N'
 * e por esse motivo antes de invocar o método replace,
 * invocamos o método toLowerCase, para deixar a string
 * com todos os caracteres em minúsculo.
 * /
```

Podemos substituir uma cadeia de caracteres também.

```js
const motocicle = 'Lander 250'
const motocicleModified = motocicle.replace('Lander', 'Twister')

console.log(motocicleModified) //Twister 250
```

O método replace() retorna uma nova string com algumas ou todas as 
correspondências de um padrão substituídas por um determinado caractere 
(ou caracteres). O padrão pode ser uma string ou uma RegExp, e a 
substituição pode ser uma string ou uma função a ser chamada para 
cada correspondência. Se o padrão for uma string, apenas a primeira 
ocorrência será substituída.

**A string original não é modificada**.
