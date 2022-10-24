# Async Await

São palavras chaves.
São um sintaxe sugar, para promises.

## async function

Uma função async, sempre retornará uma promise.

```js
const getUsers = async () => {

}

console.log(getUsers())
// promise fulfilled: undefined
```

Dentro do bloco de uma função async, podemos usar a palavra chave await.

Basicamente uma função async deve lidar com várias promises.
Ou seja, é um bloco de função sincrono, que dentro dele terão varios
códigos asincronos.

```js
const getUsers = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
}

// Response é o objeto response padrão retornado no sucesso de uma promise vinda
// da fatch api.
```

Perceba que o await sempre será inserido na frente de uma expressão
que retorne uma promise. O valor retornado pelo await + promise, será o valor
de sucesso da promise. Comparando com o then, seria o valor passado para o allback do then.
Usando async await, o valor que seria passado para o callback do then, é
armazenado na const response.

O await vai retornar o valor de sucesso da promise, quando ela tiver sido resolvida.
O await é semelhate ao then. É assíncrono, porém todo o código abaixo dele, só sera
executado quando a promise for resolvida, ou falhar.

## Resgatando os dados com async await 

```js
const getUsers = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await response.json()
  console.log(users)
}

getUsers()
```

## Fazendo a função async retornar um dado

```js
const getUsers = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  return await response.json()
  
}

getUsers()
  .then(users => console.log(users))
  .catch(error => console.log(error))
```

Lembra-se que o retorno de uma função async, sempre retornará uma promise,
que será resolvida com o valor retornado pela função async.

## Evitando then

```js
const getUsers = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  return await response.json()
  
}

const logUsers = async () => {
  const users = await getUsers()
  console.log(users)
}

console.log(1)
logUsers() // async code
console.log(2)

```

Nesse exemplo a logUsers lida com todo o código assíncrono e evitamos completamente,
o uso do then. Seja consistente, use ou thens ou async await.