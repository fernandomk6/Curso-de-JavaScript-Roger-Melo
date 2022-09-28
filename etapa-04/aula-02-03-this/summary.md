# This

## Em function declarations

O this em uma function declaration depende do contexto em que foi chamado.
O this sempre será um objeto.
O this será o objeto que está invocando o método.

Exemplo: 

```js
car.run()
```

Caso o método run, possua um this, o this irá referenciar quem invocar esse método,
no caso, o this se referencia ao objeto car. Pois é esse objeto quem está
invocando esse método.

Outro exemplo: 

```js
function anyFunction () {
  console.log(this)
}

anyFunction()
```

Nesse caso perceba que não tem nenhum objeto invocando a função
anyFunction. Nesse caso o this irá ser o objeto global.

## Em arrow functions

**Arrow functions não devem ser usadas como métodos**

Arrow functions não tem o seu próprio this.
O this de uma arrow function será o this do escopo onde ela foi chamada.
Básicamente, ela não tem isso de vincular o objeto que há chamou.
O this dela não depende do contexto onde está sendo chamado.
O this de uma arow functio, aonde quer que ela seja chamada,
sempre será o mesmo. Será o this de seu escopo léxico.

Um exemplo:

```js
const obj = {
  name: 'Marreco',
  sayHello: () => {
    console.log(`${this.name} disse oi`)
  }
}

obj.sayHello() 
// undefined disse oi
```

This nas arrow functions não tem nada haver com quem 
está chamando ou invocando a função.

O this da arrow function herda o this de seu pai.

Arrow function não tem seu proprio this, elas usam o this
léxico.

O mesmo this de fora do escopo da arrow function, será o
this dentro da arrow function. **Sempre**.

## Resumo

Em funções tradicionais o this depende de onde a função é chamada.
O this sempre será quem invocou a função. Se um objeto invocou a função,
o this será esse objeto. Se nenhum objeto invocou essa função, o this será
o objeto global. Sempre terá relação com onde a função é chamada.

Em arrow functions o this é lexíco, ou seja arrow function usarão o mesmo this
do seu escopo léxico, o this mais próximo. Sempre terá relação com
onde a função é declarada.

