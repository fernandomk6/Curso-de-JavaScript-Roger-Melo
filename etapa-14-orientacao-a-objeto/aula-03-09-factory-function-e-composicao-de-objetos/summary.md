# Factory functions e composição de objetos

Factory function é uma alternativa ao uso de classes e de funções construtoras.

Factory function é qualquer função que não é uma classe nem uma função construtora, mas
retorna um novo objeto.

Em javascript qualquer função pode retornar um objeto.

E quando a função faz isso sem usar a palavra chave `new` ela é uma factory function.

Com uma factory function eu consigo com por um objeto de retorno sem utilizar complexidade
de classes ou funções construtoras, como o uso de `constructor`, `new`, `extends` e etc.

## Comparando factory function com class e com funções construtoras

```js
// usando class
class User {
  constructor (name, email) {
    this.name = name
    this.email = email
  }
}

const user = new User('fernando', 'fernandomk6@gmail.com')

// usando factory functions
const createUser = (name, email) => ({ name, email })
const user2 = createUser('fernando', 'fernandomk6@gmail.com')

// logando os objetos no console
console.log(user, user2)
```

Percebe-se que a factory function é muito mais concisa e abstrai muito
da complexidade das classes.

## Dados privados em factory functions

- Como campos privados em factory functions?

Valores que são acessiveis apenas dentro da class

Basta declarar o campo dentro do corpo da função fábrica e não retornar o
mesmo. O objeto isntanciado apenas manipulará o que a factory
function retornar. As variaveis declaradas dentro do corpo da factory function
que não são aquilo que ela retorna, não podem ser acessadas de fora dela.

## Como atualizar um campo privado (private filed) em factory functions?

Podemos declarar um método no retorno da factory function. Esse
método irá atualizar o calor da variavel privada e retornar o seu valor.

**Escopo léxico** e **closures** são conceitos chaves para entender isso.

```js
class User {
  #counter = 0 // private field

  constructor (name, email) {
    this.name = name
    this.email = email
  }

  incrementCounter () {
    this.#counter++
    
    return this.#counter
  }
}

const createUser = (name, email) => { 
  let counter = 0 // private field

  return { 
    name, 
    email,
    incrementCounter: () => {
      counter++
      return counter
    }
  } 
}

const user = new User('fernando', 'fernandomk6@gmail.com')
const user2 = createUser('fernando', 'fernandomk6@gmail.com')
const user3 = createUser('fernando', 'fernandomk6@gmail.com')

console.log(user)
console.log(user.incrementCounter()) // 1
console.log(user.incrementCounter()) // 2

console.log(user2)
console.log(user2.incrementCounter()) // 1
console.log(user2.incrementCounter()) // 2

console.log(user3)
console.log(user3.incrementCounter()) // 1
console.log(user3.incrementCounter()) // 2
```

- Escopo léxico é a forma como o javascript busca por uma variavel.
O javascript irá procurar aquela váriavel no escopo atual, se não encontrar, irá
procurar no escopo externo, e assim por diate até achar a váriavel ou não. Se não
encontrar um erro é lançado.

- Clousures é a capacidade de uma função se lembrar o do escopo em que foi declarada.
E apartir desse escopo ela busca suas variaveis, usando o escopo léxico.

A função `incrementCounter` se lembra que foi declarada dentro da `createUser`.
Busca pela counter e à acha dentro do escopo da `createUser` e atualiza o valor da mesma.

### Clousures

É a combinação de uma função com seu escopo léxico.

### Escopo léxico

É a capacidade de uma variavel poder ser acessada dentro de um escopo aninhado.
Escopo léxico é escopo aninhado. O javascript busca por váriavies, em cada um dos
escopos aninhados, começando pelo escopo atual, indo até encontrar o valor ou até o escopo global.
Se não for encontrado, um erro será lançado dizendo que a variavel que esta sendo buscada não foi
declarada.

## Voltando a solução

```js
class User {
  #counter = 0 // private field

  constructor (name, email) {
    this.name = name
    this.email = email
  }

  incrementCounter () {
    this.#counter++
    
    return this.#counter
  }
}

const createUser = (name, email) => { 
  let counter = 0 // private field

  return { 
    name, 
    email,
    incrementCounter: () => {
      counter++
      return counter
    }
  } 
}

const user = new User('fernando', 'fernandomk6@gmail.com')
const user2 = createUser('fernando', 'fernandomk6@gmail.com')
const user3 = createUser('fernando', 'fernandomk6@gmail.com')

console.log(user)
console.log(user.incrementCounter()) // 1
console.log(user.incrementCounter()) // 2

console.log(user2)
console.log(user2.incrementCounter()) // 1
console.log(user2.incrementCounter()) // 2

console.log(user3)
console.log(user3.incrementCounter()) // 1
console.log(user3.incrementCounter()) // 2
```

A factory function `createUser` foi invocada duas vezes. Ou seja,
o seu código foi executado duas vezes. No corpo da `createUser` uma let é criada.
Se a função foi executada duas vezes, duas let foram criadas. É é por isso que cada
objeto altera a sua propria let. Pois o objeto está executando um método que busca por
uma variavel counter. Esse método irá buscar essa variavel no escopo em que ele foi decalrado.
Ou seja o escopo da função que ele foi executado.

```js
console.log(user2.incrementCounter === user3.incrementCounter) // false
```

Perceba que são funções diferentes. Locias diferentes na memoria. Cada um dessas funções
tem seu proprio corpo, seu proprio escopo.

## Composição ao invés de herança

Herança faz com que um objeto instanciado, tenha, obrigatóriamente todos os métodos
e propriedades de sua classe e de seus ancestrais.

Usando composição podemos definir quais métodos queremos usar naquele objeto.

```js
// herança
class A {
  first () {
    return 1
  }

  second () {
    return 'Nãa'
  }
}

class B extends A {
  third () {
    return 3
  }
}

const obj = new B()

// composição

const a = { first: () => 1 }
const b = { second: () => 'Nãa' }
const c = { third: () => 3 }

const obj2 = {
  ...a,
  ...c
}

// comparação

console.log(obj, obj2)
```

Perceba que criamos o `obj2` com apenas as propriedades e métodos que queríamos.
Diferentemente da herança classica aonde somos obrigados a possuir no objeto instanciado,
todos os metodos e propriedades de sua classe e das classes ancestrais.

A composição da mais liberdade em sua aplicação javascript e facilita a manutenção,
pois evita o acoplamento, o código não fica "engessado".

## vantagens de usar factory functions

1. Não te deixam tentado a fazer níveis de herança
2. Sua aplicação tente a ter menos problemas de refatoração
3. Não precisa usar o new
4. Invoca como qualquer outra função
5. O this volta ao comportamento padrão (referenciar o objeto que o método está encadeado)
6. Você esqueve menos this e quando menos this melhor pois ele é imprevisivel.
7. Sua aplicação se torna mais flexível
8. Sua aplicação se torna mais previsível

