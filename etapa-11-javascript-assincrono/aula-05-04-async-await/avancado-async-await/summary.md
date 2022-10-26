# Async await avançado

[dev.to/lydiahallie](https://dev.to/lydiahallie/javascript-visualized-promises-async-await-5gke)

Já que apreendemos promises vamos falar de async await, que é uma forma
melhorada de lidar com promises.

Uma função async retorna uma promise implifitamente, essa promise é resolvida com o valor,
a esquerda do return.

Veja os códigos abaixa, eles fazem a mesma coisa

```js
const classicPromise = new Promise((resolve, reject) => {
  resolve('promise classica resolvida')
})

const asyncFunction = async () => {
  return 'promise da async function resolvida'
}

console.log(classicPromise)
console.log(asyncFunction())

/*
Promise {<fulfilled>: 'promise classica resolvida'}
Promise {<fulfilled>: 'promise da async function resolvida'}
*/
```

## O await

O await irá suspender a execução do bloco da função async.
O await sempre deve ser informado a esquerda de uma expressão que resulte em
uma promise.

O await + a promise expressão, retornarão o resultado da promise quando a promise
estiver o status fulfilled.

Lembre-se, até a promise está com o status fullfiled ou reject, o bloco da função
async, é suspenso.

```js
const one = () => {
  console.log('in a simple function that returns a promise')
  return Promise.resolve('promise classica resolvida')
}

const asyncFunction = async () => {
  console.log('in async function')
  const result = await one()
  console.log(result)
}

console.log('before a function')
asyncFunction()
console.log('after a function')

/*
o que será impresso no console?

'before a function'
'in async function'
'in a simple function that returns a promise'
'after a function'
'promise classica resolvida'

microtask

const asyncFunction = async () => {
  console.log('in async function')
  const result = (paused here) await one()
  console.log(result)
}
*/
```

Sempre que await é lido, a função async é adicionada a microtask queue.
Para continuar apartir do momento do await. Ele iriá continuar quando
a promise a direita do await for resolvida. await + a promise resolvida
retornam o resultado da promise resolvida. 

![async await microtask](https://res.cloudinary.com/practicaldev/image/fetch/s--lX9JfreE--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/lch6lutxnl88j0durpyh.gif)

A espressão a direita do await, que resulta em uma promise, é executado. Tem seu valor retornado. O await é lido
e quando é lido a função é suspensa. A função volta quando a promise estiver fullfiled. await + a promise fullfiled,
retornam o resultado da promise.

Ao encontrar uma palavra- awaitchave, a asyncfunção é suspensa . ✋🏼 
A execução do corpo da função é pausada e o restante da função assíncrona é executada 
em uma microtarefa em vez de uma tarefa normal!

função assíncrona myFuncestá suspensa ao encontrar a palavra- awaitchave, o 
mecanismo sai da função assíncrona e continua executando o código no contexto 
de execução em que a função assíncrona foi chamada

Quando o await é lido. O mecanismo sai d afunção async e continua no contexto de execução atual.
Quando a promise a direita do await fica fullfiled (e quando não há mais nada na callstack), a 
função async continua de onde parou (no momento da leitura do await). 

![event loop e await](https://res.cloudinary.com/practicaldev/image/fetch/s--V8u36kEG--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/hlhrtuspjyrstifubdhs.gif)

