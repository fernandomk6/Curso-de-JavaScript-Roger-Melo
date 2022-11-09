# Overview class

- Declarar
- Instanciar
- Propriedades
- Métodos
- Herança
- Static
- Public
- Private
- get e set

## Declarar
 
Declarando um class.
Por convenção todos os nomes de class, iniciam com a primeira letra maiúscula.

```js
class Animal {

}
```

## Instanciar

```js
const animal = new Animal()

```
`animal` é uma instancia da class Animal

### new operator

O new faz 3 coisas:

- Invaca o constructor
- Cria um contexto para o this
- Retorna o this

## Propriedades

Declare as propriedades dentro do constructor,
atribuindo elas ao `this`.

```js
class Animal {
  constructor() {
    this.isAAnimal = true
  }
}

const animal = new Animal()
```

- Constructor é um método da `class` `Animal`;
- `this` no constructor é objeto que será retornado pelo `new`.
- `isAAnimal` é uma propriedade **direta** do objeto que será instanciado. Ou seja
não é uma propriedade do proprotype, mas sim do objeto instanciado.

### Proriedades diretas

Propriedades declaradas dentro do constructor, são propriedades diretas do objeto.
Ou seja não é são propriedade do proprotype, mas sim do objeto instanciado.

- Dentro do constructor o `this` deve ser usado para se referênciar ao objeto que será
instanciado.

### Propriedades do prototype

Propriedades e métodos declarados fora do bloco do constructor, são atribuidas ao prototype,
e não ao objeto instanciado.

```js
class Animal {
  constructor() {
    this.isAAnimal = true
  }

  haveBlood = true
}
```

A propriedade `haveblood` foi declarada fora do constructor. Logo não é propriedade
direta do objeto instanciado, mas sim de seu prototype.

- O constructor criará os métodos e propriedades diretas do objeto instanciado;
- O corpo da class é o prototype do objeto instanciado.

## Métodos

**Não declare métodos dentro do constructor**

Declare métodos apenas no corpo da class.

```js
class Gato {
  miar () {
    console.log('Miauu')
  }
}
```

**Nunca use arrow functions em class**

Sempre use a sintaxe enchuta para declarações de funções `functionName () { ... }`.

## Herança

```js
class Lion extends Animal {

}
```

O objeto instanciado apartir da class Lion, também terá todas as propriedades
e métodos que um objeto da class Animal teria. Além de suas proprias propriedades
e métodos específicos.

```js
class Lion extends Animal {
  constructor (name) {
    super()
    this.name
  }

  eatZebras () {
    console.log('O leão comeu a zebra')
  }
}
```

- `super` é faz referência a class que está sendo extendida (Animal)
- `this.name`, this é objeto que será instanciado pela class Lion
- `eatZebras` é um método especifico da classe do Lion
- Todas as propriedaes e métodos da class animal também existirão na instancia de Lion
- O `super()` é igual a `Animal()`
- Também é possível executar métodos do pai na classe filha com o `super.methodName()`

## Static 

A nivel de utilidade uma classe pode ter um método que pode ser usado, sem a necessidade
de instanciar um objeto. Esses métodos são os `static`


```js
class Person {
  static run () {
    console.log('Person is running')
  }
}

Person.run()
```

Perceba que o método `run` foi encadeado na classe diretamente, sem a necessidade
de intanciar um novo objeto. Métodos staticos sempre são declarados no corpo da class.

**O corpo da classe é o prototype do objeto a ser instanciado**

O this do constructor é o objeto instanciado.

Métodos staticos não ficam no prototype.

Métodos staticos são propriedades do constructor.
Propriedade de objetos functions

É semelhante a `function.staticMethod = function () { ... }`
onde `function` é o constructor.

- O corpo da classe é o prototype do objeto a ser instanciado
- O constructor retorna o objeto instanciado
- Métodos staticos são propriedas do constructor

Métodos staticos são basicamente isso

```js
function sayHi () {
  console.log('hi')
}

sayHi.sayGoodBy = () => {
  console.log('Goodbye')
}

sayHi.sayGoodBy()
```

Onde `sayHi` é o constructor e `sayGoodbye` é o método statico.

## Public

Todas as propriedades e métodos com excesão dos static são por padrão publicos.
Ou seja, podem ser acessados dentro da classe, e de fora da classe, por suas instancias
e por seus descentendes (filhos) (herança). 

Métodos e propriedades publicos podem ser acessados de todos os locais.
Métodos e propriedades de classe são por padrão publicos.

## Private

Faz com que um método ou propriedade do corpo da classe, não seja acessivel
dentro do objeto instanciado.

- Propriedades privadas só são acessiveis dentro da propria class use `this.#privateProperty`
- Nome de propriedade privadas precisam iniciar com `#`

```js
class Person {
  constructor (name) {
    this.name = name
  }

  #run () {
    console.log('run')
  }

  static sleep () {
    console.log('sleep')
  }
}

const fernando = new Person('fernando')

fernando.#run() 
// Uncaught SyntaxError: Private field '#run' must be declared in an enclosing class
```

- Propriedades privadas não são herdadas.
- Propriedades privadas são acessiveis apenas dentro do bloco da 
class, usando o `this.#privateProperty`

## get e set

Podemos definir uma propriedade como getter ou setter.
Um getter, apenas retornará um valor, um setter, apenas alterará um valor.
Getter e seter são sempre métodos. Porém quando vamos chamar esses métodos,
usamos uma sintaxe igual a de acesso a propriedade.
Se for um  getter, retornará o valor, se for um setter esperará algum
valor ser atribuido a propriedade.

### get

```js
 class Developer extends Person {
  constructor (name, isFrontEnd) {
    super(name)
    this.frontEnd = isFrontEnd
    this.backEnd = !isFrontEnd
  }

  get info () {
    return `${this.name} ${this.frontEnd ? 'dev frontend' : 'dev backend'}`
  }
}

const fernando = new Developer('fernando', true)

console.log(fernando.info) // fernando dev frontend
```

`get info` é um método que apenas irá retornar um valor.
A sintaaxe usada é como se `info` fosse propriedade. Métodos
get e set são acessados como se fossem propriedades.
Por isso usamos `fernando.info`. Isso invoca a função get.

`get` deve ser usado quando quisermos obter algum dado de forma dinamica.
Não faz sentido retornar um dado publico.

- Método `get` **não pode ter parametro**
- Não pode haver propriedade com o mesmo nome do getter
- Não pode ser usado mais de um getter para a mesma propriedade
- Pode ter um identificador númerico ou string 
`get 1 () { ... } => instance['1'] ou instance[1]`

### Set

Geralmente usado junto dos getter. Os setter tem a finalidade de definir
o valor de alguma propriedade.

- Pode ter um identificador do tipo númerico ou string 
`set 1 () { ... } => instance['1'] ou instance[1]`
- Deve ter exatamente um parâmetro
- Não pode ter o mesmo nome de outra propriedade
- Setter e getter devem ter o mesmo itendificador quando obtém-se ou
define a mesma propriedade 
`get name () { return this.name } | set name (name) { this.name = name }`

```js
class Aluno {
  constructor (nome, curso, semestre) {
    this.nome = nome,
    this.curso = curso,
    this.semestre = semestre
  }

  get nomeAluno () {
    return this.nome
  }
  
  set nomeAluno (nomeAluno) {
    this.nome = nomeAluno
  }
}

const lucas = new Aluno('', 'Engenharia', 5)
lucas.nomeAluno = 'Lucas'
console.log(lucas.nome) // Lucas
```

getter e setters são herdados e são publicos.
