# Classes

## "Tipos"

pode se dizer que um dado pertence a classe de que foi instanciado,
em outras linguagens isso é chamado de tipo.

`variable.constructor.name` retorna o nome da classe que esse dado foi
criado. Ou seja, o seu tipo. Ou sua classe.

## Quando usar class?

Quando precisarmos criar vários objetos do mesmo tipo, ou com
as mesmas propriedades e métodos, alterando apenas os valores
de alguns desses.

Resumidamente usamos classes quando criar objetos literais se tornar 
um processo imanutenível.

Usamos classes quando queremos criar um modelo para objetos. E
apartir desse modelo, criar vários outros objetos. Ou seja,
evitamos escrever um objeto de cada vez.

## Criando objetos por meio de construtores

Classe é um tipo de construtor.
Um construtor é uma função.
Todos os construtores devem ter a primeira letra da variável maiúscula.
Isso é uma convenção, para se diferenciar das funções "normais", não construtoras.

```js
class User {
  constructor () {

  }
}

const fernando = new User()
// User() invoca o constructor da class User

console.log(fernando)

// fernando é um objeto
```

### Observações sobre o operador `new`

#### 1. Ele cria um novo this dentro do constructor

Ele cria um novo objeto mesmo se a classe não tiver um
constructor, ou mesmo se a função não retornar nada. O new sempre retorna um objeto.

A direita do `new` sempre deve vir um constructor. Constructor é uma função
que use **function declaration**. 
**Arrow function não podem ser construtores**.

```js
const a = function () {}
console.log(new a) // { a object }
console.log(new function() {}) // { a object }

// with arrow function

const a = () => {}
console.log(new a) // Uncaught TypeError: a is not a constructor

```

#### 2. Retorna o valor do this

Quando usamos o new o constructor tem acesso ao this.
Esse this é customizado dentro do constructor. Geralmente ele tem suas
propriedades setadas.
No final o this é retornado. O this sempre será um objeto.

```js
class Person {
  constructor (name) {
    this.name = name // o this será retornado
  }
}

const fernando = new Person('fernando')
```

O this dentro da classe referencia a const `fernando`. Ou seja dentro da classe o `this.name`,
na verdade é `fernando.name`, o this é uma referencia a variavel que está recebendo o objeto.
Ou a instanância da classe.

#### 3. O new invoca o constructor

O constructor nada mais é do que uma função. Para que ela retorne um objeto o new deve ser usado.
Se não usar o new, ela não retornará um objeto, apenas, executará uma ação.

Instancia é um termo para um objeto que foi criado apartir de uma classe.
Instancia de person, do tipo person, criado pela class person, são sinônimos.

#### Resumo do this

- New invoca o constructor
- Cria um objeto this no constructor
- Retorna o objeto this

## Métodos em classes

**O constructor é usado apenas para criar as propriedades.**
**Class não é um objeto**

O constructor é usado apenas para setar as propriedades.
O constructor é usado apenas para setar as propriedades.
Dentro do constructor não **devemos** criar métodos.
Dentro do constructor apenas criamos propriedades.
Não **devemos** cirar métodos dentro dos constructors.
Dentro do constructor apenas criamos as propriedades.
Métodos de classes devem ser criados fora do constructor.
Métodos não podem ser criados dentro do constructor.

Os métodos das classes não são separados por virgula.
Class é uma função que pode (quando usado o `new`) retornar um objeto.
Os métodos devem ser criados após o método constructor.
Os métodos da classe devem ser criados após a declaração do constructor.
Métodos em class devem sempre usar function declarations.

Métodos criados dentro do constructor será atrelados ao objeto instanciado.
Métodos criados fora do constructor serão atrelados ao prototype do objeto instanciado.

```js
class User {
  constructor (name) {
    this.name = name
    this.sayHello = function sayHello () {
      console.log('hello')
    } // atribuido ao objeto instanciado
  }

  login () {
    console.log(`O usuario ${this.name} logou`)
  } // atribuido ao prototype
}
```

O corpo da class é o prototype. O constructor seta as propriedades diretas
do this. O this terá seu valor atribuído a uma variavel que será a instancia da 
classe.

Procure criar sempre os métodos no prototype. No corpo da classe.
No bloco da class. Propriedades no constructor e métodos no
bloco da class. Métodos no bloco da class farão os métodos
serem atribuidos ao prototype, o prototype é o mesmo para todas as instancias.
Isso melhora e muito a performance, pois evita criar os mesmo métodos
várias vezes. Veremos mais sobre prototype em aulas futuras.

## Encadeando métodos em instancias de classes

Podemos fazer um método retornar uma referência ao proprio
objeto, para poder assim encadear vários métodos
nesse objeto. Assim evitamos usar vários comandos em sequencia.
E podemos usar qualquer sequencia de método de uma forma menos "encapsulada".

```js
class User {
  constructor (name) {
    this.name = name
    this.points = 0
  }

  login () {
    console.log(`O ${this.name} logou`)
    return this
  }

  incrementPoints () {
    this.points++
    return this
  }
}

const fernando = new User('fernando')

console.log(fernando.login()
  .incrementPoints()
  .points)
```

- `fernando.login()` => objeto fernando  
- `fernando.login().incrementPoints()` => objeto fernando  
- `fernando.login().incrementPoints().points` => points property value  

## Avançado

### prototype

- Propriedade `prototype` é o objeto que será herdado para os objetos instanciados. 
Faz referencia aos filhos;
- Propriedade `[[prototype]]` é o obejto que **foi** herdado do constructor. 
Faz referencia ao pai;

```js
class User {
  constructor (name) {
    this.name = name // in own properties object
    this.points = 0 // in own properties object
  }

  login () {
    console.log(`O ${this.name} logou`)
    return this
  } // in prototype

  incrementPoints () {
    this.points++
    return this
  } // in prototype

  static test () { 
    console.log('test') 
  } // in class property => User { length, name, prototype..., test }
}
```

## prototype vs ``[[prototype]]``

- prototype: Propriedade de um constructor. Um objeto que será compartilhado com
as instancias desse constructor.

``[[prototype]]``: Um objeto. Propriedade do constructor que instanciou esse objeto.

Pode se dizer grosseiramente que prototype "olha de cima para baixo",
e ``[[prototype]]`` "olha de baixo para cima".

## Propriedades em bloco de classes

todas as propriedade devem ser armazenadas no constructor. 
Pode colocar propriedades no corpo da classe, mas essas propriedades serão,
automáticamente vinculadas ao proprio objeto e não ao prototype.

Lembre que o corpo da class, é o prototype.

O constructor deve ser apenas a função que criará o modelo inicial do objeto a nivél
de propriedades. Os métodos todos devem ser declarados no corpo da class.

Use a palavra `static` antes do método para setar que esse método é uma propriedade
da classe e não do prototype. Sendo o método uma propriedade da class, ela pode
ser acessada sem uma instancia. `Class.staticMethod()`
