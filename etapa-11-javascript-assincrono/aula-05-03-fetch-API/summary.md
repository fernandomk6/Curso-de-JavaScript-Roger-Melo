# Fetch API

Interface nativa, usa promises por baixo dos panos.
Fetch sempre vai retornar uma promise.
Usamos fech quando queremos buscar dados de algum outro lugar.
Mais detalhadamente, quando queremos enviar uma requisição.
Mas nesse exemplo veremos apenas as requisições GET,
pois nosso foco é o frontend.

A invocação do fetch retorna uma promise. Lembre-se que uma promisse tem
2 resultados posiveis, o resolve e o reject. Para verificar
se a promise foi resolvida, ou não, usamos o then e catch.
Que receberão como argumento um callback que irá lidar com 
o sucesso (then) ou o reject (catch). Cada método then
ou catch passa para o callback o resultado da promise, de sucesso ou
falha.

Explicação de Promises e Fetch API

```js
// A promise
fetch('https://jsonplaceholder.typicode.com/users')
  // Callback que será executado quando a promise tiver sucesso. 
  // Data é o retorno de sucesso.
  // Data é o valor passado a função resolve, no callback passado
  // para o construtor Promise.
  .then((data) => { 
    console.log(data) 
  }) 

  // Callback que será executado quando a promise for rejeitada. 
  // Error é o retorno de error.
  // Error é o valor passado a função reject, no callback passado
  // para o construtor Promise.
  .catch((error) => { 
    console.log(error) 
  }) 
```

Fetch retorna uma promise, quando essa promise tem sucesso o callback do then
é executado. O callback do then vai receber como argumento um objeto
response. Por padrão o then de um FETCH, sempre vai receber um objeto
response.

```js
fetch('https://jsonplaceholder.typicode.com/users')
  .then((data) => { 
    console.log(data) 
  }) 

// Data é um objeto response
```

Quando existe algum erro no then ou quando a promise é rejeitada.
O catch é executado. Por padrão o callback do catch recebe um objeto response,
como parametro. Com as propriedades do erro.

PErceba que o then é executado quando a promise é concluída e não
quando os dados são obtidos conforme esperado.

**SEMPRE VALIDE O THEN PARA SABER SE OS DADOS FORAM OBTIDOS**

Assim:

```js
// A promise
fetch('https://jsonplaceholder.typicode.com/users1')
  // Callback que será executado quando a promise tiver sucesso. 
  // Data é o retorno de sucesso.
  // Data é o valor passado a função resolve, no callback passado
  // para o construtor Promise.
  .then((data) => { 
    if (!data.ok) {
      throw new Error ('Não foi possivel obter os dados')
    }

    console.log(data)
  }) 

  // Callback que será executado quando a promise for rejeitada. 
  // Error é o retorno de error.
  // Error é o valor passado a função reject, no callback passado
  // para o construtor Promise.
  .catch((error) => { 
    console.log(error) 
  })
```

## Rejeição de promises no FETCH API

A promise só será rejeitada caso algum erro de rede ocorra.
Se a requisição for concluída, o then será executado. Lembrando que
a requisição pode ser concluída porém com um resultado diferente do esperado.

Então: **SEMPRE VALIDE O THEN PARA SABER SE OS DADOS FORAM OBTIDOS**

Se o parametro do then não for o esperado, lance uma exceção, assim
o catch será executado.


## Response para objeto javascript

Obtendo os dados da requisição.

```js
// A promise
fetch('https://jsonplaceholder.typicode.com/users')
  // Callback que será executado quando a promise tiver sucesso. 
  // Data é o retorno de sucesso.
  // Data é o valor passado a função resolve, no callback passado
  // para o construtor Promise.
  .then((data) => { 
    if (!data.ok) {
      throw new Error ('Não foi possivel obter os dados')
    }

    // Método json do objeto response.
    // Esse método retorna uma promise com o json já convertido
    // para objeto javascript sendo passado como argumento para o resolve.
    return data.json() 
  }) 
  // Segundo then, recebe o valor passado para a função resolve, na promise retornada pelo
  // then anterior.
  .then(data => {
    console.log(data)
  })

  // Callback que será executado quando a promise for rejeitada. 
  // Error é o retorno de error.
  // Error é o valor passado a função reject, no callback passado
  // para o construtor Promise.
  .catch((error) => { 
    console.log(error) 
  }) 
```

## Lembre dos 3 passos

1. Buscar dados usando Fetch
2. Obter a resposta no then e retornar a resposta.json
3. Encadear um then no primeiro tem para lidar com os dados já parseados