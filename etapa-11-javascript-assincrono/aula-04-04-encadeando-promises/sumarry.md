# Encadeando promises

```js
getTodos('https://pokeapi.co/api/v2/pokemon/1')
  .then(data => {
    console.log(data.name)
    return getTodos('https://pokeapi.co/api/v2/pokemon/2')
  })
  .then(data => {
    console.log(data.name)
    return getTodos('https://pokeapi.co/api/v2/pokemon/3')
  })
  .then(data => {
    console.log(data.name)
    return getTodos('https://pokeapi.co/api/v2/pokemon/4')
  })
  .then(data => {
    console.log(data.name)
  })
  .catch(error => {
    console.log(error)
  })
```

O then pode retornar um valor, e esse valor, caso não seja uma promise, será
convertido para promises. Essa promise é recebida no parametros do callback
do proxímo then encadeado. Isso pode ser feito quantas vezes forem necessarias.

Resumindo, um then retorna um promise que pode ser resolvido no proximo then.

Se alguns do then apresentar um erro ou for rejeitado. O catch será executado 
logo em seguida.