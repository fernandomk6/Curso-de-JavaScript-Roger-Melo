# Introdução a promises

## O que é uma promise

Promise é um objeto. Esse objeto representa o sucesso ou a falha de uma
operação assíncrona. Na maioria dos casos você irá consumir uma promise
ao invés de criar.

Uma promise sempre terá dois resultados, **resolve** e **rejected**.

## iniciando uma promise 

```js
const getDat = () => {
  return new Promise((resolve, reject) => {

  })
}
```

Uma promise é criada usando o construtor Promise, e deve receber como argumento uma
função de callback, com os parâmetros, resolve e reject. Dentro do bloco
do callback da promise, os parametros resolve e reject podem ser usados.

Os parametros resolve e reject são funções imbitidas da API de promises.

Resolve deve ser invocada quando a operação assíncrona for bem sucedida.
Caso a operação falhe, a função reject deve ser invocada.

## Promises bem sucedidas

```js
const getData = () => {
  return new Promise((resolve, reject) => {
    resolve('dados aqui')
    // reject('Erro aqui')
  })
}

console.log(getData())

// Promise {<fulfilled>: 'dados aqui'}
```

Uma promise no stado fullfiled significa que ela foi resolvida.
Ou seja seu callback resolve, foi executado. 
Chamar uma função que retorna uma promise, não é um código assíncrono.
O assíncronismo das promises estão nos métodos then, catch e finally.

## Resgatando o valor de uma promise

Usamos o método then, para resgatar o valor de uma promise.
Lembrando que a promise pode ter o valor de resolve. Que é,
o callback resolve. e pode ter o valor reject, que foi o callback reject.

```js
const getData = () => {
  return new Promise((resolve, reject) => {
    resolve('dados aqui')
    // reject('Erro aqui')
  })
}

console.log(1)
getData()
console.log(2)
```

Perceba que, o `getData()` é uma expressão, a fun~ção getData, retorna uma promise.
Essa promise por si só é um objeto. Para acessar o valor desse objeto promise,
usamos o método then (que é assíncrono).

O método then, espera um callback como argumento. E esse callback terá o resultado
da promise, como parâmetro.

Desta forma:

```js
const getData = () => {
  return new Promise((resolve, reject) => {
    resolve('dados aqui')
    // reject('Erro aqui')
  })
}

console.log(1)
getData().then(data => {
  console.log(data)
})

console.log(2)
```

Veja que `data`, argumento do callback do then, é o argumento que foi passado para
o resolve, lá na instanciação do objeto promise.

## Lidando com o reject

Assim como o then lida com o resolve, temos um método que lida com o reject.
Esse método é o catch. O catch só será executado em 2 situações.
Quando o callback da promise, executar a função reject. Ou, quando, algum código,
dentro de um then, lance um erro.

```js
const getData = () => {
  return new Promise((resolve, reject) => {
    // resolve('dados aqui')
    reject('Erro aqui')
  })
}

console.log(1)

getData()
  .then(data => {
    console.log(data)
  })
  .catch(error => {
    console.log(error)
  })

console.log(2)

// 1
// 2
// erro aqui
```

Perceba que o then não foi executado, pois a promisa, foi rejeitada.
Ou melhor dizendo, a função reject foi executada no callback passado
como argumento para o construtor promise.

Resolve e reject tem um return implicito.
Ou seja, isso:

```js
new Promise((resolve, reject) => {
  if (true) {
    resolve('resolve')
    return
  } 
  
  reject('reject')
})
```

É redundante. É o mesmo que isso:

```js
new Promise((resolve, reject) => {
  if (true) {
    resolve('resolve')
  } 
  
  reject('reject')
})
```

## Comparando códigos

### Sem promises

```js
const getTodos = (url, callback) => {
  const request = new XMLHttpRequest()

  request.addEventListener('readystatechange', () => {
    const isRequestOk = request.readyState === 4 && request.status === 200
    const isRequestNotOk = request.readyState === 4 && request.status !== 200

    if (isRequestOk) {
      const data = JSON.parse(request.responseText)
      callback(null, data)
      return
    }

    if (isRequestNotOk) {
      callback('Não foi possível obter os dados', null)
      return
    }
  })

  request.open('GET', url)
  request.send()
}

getTodos('./todos/todos.json', (error, data) => {
  console.log('Errors', error, 'Data', data)
})
```

### Com promises

```js
const getTodos = (url) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', () => {
      const isRequestOk = request.readyState === 4 && request.status === 200
      const isRequestNotOk = request.readyState === 4 && request.status !== 200

      if (isRequestOk) {
        const data = JSON.parse(request.responseText)
        resolve(data)
      }

      if (isRequestNotOk) {
        reject('Não foi possível obter os dados')
      }
    })

    request.open('GET', url)
    request.send()
  })
}

getTodos('https://pokeapi.co/api/v2/pokemon/ditto')
  .then(data => {
    console.log(data)
  })
  .catch(error => {
    console.log(error)
  })
```
