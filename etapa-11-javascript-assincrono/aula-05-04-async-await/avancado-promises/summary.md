# Avançado em async await

[dev.to/lydiahallie](https://dev.to/lydiahallie/javascript-visualized-promises-async-await-5gke)

Async functions retornam implicitamente uma promise

```js
// ambos os codigos fazem a mesma coisa

console.log(Promise.resolve('Hello'))
console.log((async () => 'Hello')())
```

## Primeiro uma reestudada em promises

1. Promise é um objeto que contém um **status** e um **valor**.
2. Promise é um objeto que contém um **status** e um **valor**.
3. Promise é um objeto que contém um **status** e um **valor**.
4. Promise é um objeto que contém um **status** e um **valor**.
5. Promise é um objeto que contém um **status** e um **valor**.
6. (...)

Grave isso.

Status possíveis de uma promise

- fulfilled: A promessa foi `resolved`, nenhum erro.
- reject: A promessa foi `rejected`, algo deu errado.
- pending: A promessa **ainda** não foi `rejected` nem `resolved`.

```js
new Promise(() => {})
```

No exemplo acima, acabamos de passar um callback simples 
`() => {}` para o Promise construtor. No entanto, esse callback na verdade recebe dois argumentos. 

- O valor do primeiro argumento, geralmente chamado **resolve** ou res, é o **método** a ser 
chamado quando a Promise deve resolver. 

- O valor do segundo argumento, geralmente chamado **reject** ou rej, é o **método** de 
valor a ser chamado quando a Promise deve rejeitar, algo deu errado.

O callback que o Promise construtor recebe como argumento, vai receber 2 parametros.
Resolve e reject.

- O parametro `resolve` é uma função, e deve ser chamada, recebendo como argumento,
o valor da promise quando resolvida.

- O parametro `reject` também é uma função, e deve ser chamada, recebendo como argumento,
o valor da promise quando ela for rejeitada.

1. Promise é um objeto que contém um **status** e um **valor**.
2. Promise é um objeto que contém um **status** e um **valor**.
3. Promise é um objeto que contém um **status** e um **valor**.
4. Promise é um objeto que contém um **status** e um **valor**.
5. Promise é um objeto que contém um **status** e um **valor**.
6. (...)

O status da promise se torna fulfilled, quando a função `resolve` é chamada. 
Quando `resolve` é lida, o valor passado como argumento para a função `resolve`,
se torna o `value` da promise.

O status da promise se torna `rejected` quando a função `reject` é chamada.
quando `reject` é chamada, o status da promise se torna `rejected` e o valor
da promise recebe o valor que foi passado como argumento para a função `reject`.

Se `reject` e `resolve` ainda não foram chamados, o status será `pending` e o valor
será undefined.

![promises resolve reject](https://res.cloudinary.com/practicaldev/image/fetch/s--9A_mOYMP--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/duen4peq0bdr55cka5ya.png)

```js
const rejectedPromise = new Promise((res, rej) => { 
  rej('rejeitada') 
})

const resolvedPromise = new Promise((res, rej) => { 
  res('resolvida') 
})

console.log(resolvedPromise, rejectedPromise)

// Promise {<fulfilled>: 'resolvida'} 
// Promise {<rejected>: 'rejeitada'}
```

O status de uma promessa é "fulfilled" se invocamos o resolve método.
O status da promessa é "rejected" se invocamos o reject método.

O valor de uma promessa, o valor de [[PromiseValue]], é o valor que passamos para o 
método the resolve ou reject como argumento.

Não nos importamos com todo o objeto de promessa, apenas nos importamos com o 
valor dos dados! Felizmente, existem métodos integrados para obter o valor de 
uma promessa. Para uma promessa, podemos anexar 3 métodos:

- .then(): é chamado depois que uma promessa é resolvida.
- .catch(): é chamado após uma promessa rejeitada.
- .finally(): Sempre é chamado, independentemente de a promessa ter sido resolvida ou rejeitada.

Lembre-se o método then é chamado apenas, após, a promise ficar com o status `fulfilled`.
O método catch é chamado quando a promise fica com o status `rejected`.
O método finally é sempre chamado apos o método then ou catch.

O método then recebe como argumento um callback. Esse callback recebe o `value` da promise como argumento.
O método catch recebe como argumento um callback. Esse callback recebe o `value` da promise como argumento.

O método then sempre retorna uma promise implicitamente.

O finally recebe como argumento um callback. Esse callback não tem parametros.

Para sua informação, quando você sabe que uma promessa sempre será resolvida ou 
sempre rejeitada, você pode escrever Promise.resolve ou Promise.reject, 
com o valor que deseja rejeitar ou resolver a promessa!

![promise resolve e promise reject](https://res.cloudinary.com/practicaldev/image/fetch/s--61Gva3Ze--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/90hxwjfadzslvdbkr4l8.png)

O método then sempre retorna uma promise implicitamente.
A promise retornada pelo then, vai resolver com o valor retornado pelo then.

Assim:

```js
.then((data) => {
  return data.toString()
})
```

O then na verdade está retornando uma promise que resolve com esse valor (data.toString).

`Promise {<fulfilled>: data.toString()}`

Como sabemos o then recebe um callback como argumento. E esse callback recebe o valor
da promise resolvida como paramêtro.

Ou seja, se um them retorna uma promise com status fulfilled e um value. Podemos encadear vários thens.

Lembre-se desses passos.
Lembre-se desses passos.
Lembre-se desses passos.

1. O callback passado como argumento do then recebe como parametro o value da promise.
2. O then é executado quando o status da promise se torna fulfilled (o callback do then é **assíncrono** pois, é executado
apenas quando a promise se torna fullfilled, e isso pode demorar).
3. O status da promise tem o status fulfilled quando a função `resolve` 
(informada no callback que foi passado como argumento do promise constructor) é chamada.

1. O callback passado como argumento do catch recebe como parametro o value da promise.
2. O catch é executado quando o status da promise se torna rejected (o callback do catch é **assíncrono** pois, é executado
apenas quando a promise tem o status rejected, e isso pode demorar).
3. O status da promise se torna rejected quando a função `reject` 
(informada no callback que foi passado como argumento do promise constructor) é chamada.

Muitos thens encadeados para você se deliciar.

```js
const getImage = (url) => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve(`imagem obtida na url '${url}'`)
    } else {
      reject('Erro ao obter imagem')
    }
  })
}

const getCompressedImage = (image) => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve('Imagem comprimida')
    } else {
      reject('Ocorreu um erro ao comprimir a imagem')
    }
  })
}

const applyfilter = (compressedImage) => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve('Filtro aplicado')
    } else {
      reject('Erro ao aplica filtro')
    }
  })
}

const saveImage = (filteredImage) => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve('imagem salva')
    } else {
      reject('Erro ao salvar a imagem')
    }
  })
}


getImage('./image1.png')
  .then((image) => {
    console.log(image)
    return getCompressedImage(image)
  })
  .then((compressedImage) => {
    console.log(compressedImage)
    return applyfilter(compressedImage)
  })
  .then((filteredImage) => {
    console.log(filteredImage)
    return saveImage(filteredImage)
  })
  .then((response) => {
    console.log(response)
  })
  .catch((error) => {
    console.log(error)
  })

// imagem obtida na url './image1.png'
// Imagem comprimida
// Filtro aplicado
// imagem salva
```

Os callbacks de then, catch e finally, são adicionados a microtask queue. Ou seja,
são assíncronos.

Ordem de execução das 'filas'

1. Primeiro tudo que está na call stack é executado (o javascript sincrono)
2. Depois tudo o que está na microtask é executado (callback das promises, thens, catch e finalys).
3. Tudo que está na macrotask queue é executado (setTimes, eventListeners).

Para comprovar, toma essa lapada

```js
const functionSyncrono = () => {
  console.log('task 1 - sincrona')
}

// task 1
functionSyncrono()

// task2, 3, 4

const aPromise = new Promise((resolve, reject) => {
  if (true) {
    resolve('resolvida')
  } else {
    reject('rejeitada')
  }
})

aPromise
  .then((data) => {
    console.log(`task (callback promise) 2 executada, a promise tem o valor ${data}`)
    return 'outro valor de promise resolvida'
  })
  .then((data) => {
    console.log(`task (callback promise) 3 executada, a promise tem o valor ${data}`)
    return 'outro valor de promise resolvida, de novo isso amigo?'
  })
  .then((data) => {
    console.log(`task (callback promise) 4 executada, a promise tem o valor ${data}`)
  })
  .catch((error) => {
    console.log(error)
  })

// task4, 5

setTimeout(() => {
  console.log('task 4 settime')
}, 0)

setTimeout(() => {
  console.log('task 4 settime')
}, 0)

/*
task 1 - sincrona
task 2 (callback promise) executada, a promise tem o valor resolvida
task 3 (callback promise) executada, a promise tem o valor outro valor de promise resolvida
task 4 (callback promise) executada, a promise tem o valor outro valor de promise resolvida, de novo isso amigo?
task 4 settime
task 4 settime
*/
```

**Esse é o gif**

![O gif](https://res.cloudinary.com/practicaldev/image/fetch/s--05Fi8vBq--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/42eatw03fcha0e1qcrf0.gif)

Se entendeu explique esse código

```js
console.log('start')

setTimeout(() => {
  console.log('timeout')
})

Promise.resolve('Promise')
  .then((value) => {
    console.log(value)
  })

console.log('end')

/*
start
end
Promise
timeout
*/
```

Explicação 

![js engine](https://res.cloudinary.com/practicaldev/image/fetch/s--6NSYq-nO--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/yqoemb6f32lvovge8yrp.gif)

