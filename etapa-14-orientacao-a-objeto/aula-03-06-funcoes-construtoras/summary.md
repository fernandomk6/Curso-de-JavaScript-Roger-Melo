# Funções construtoras

**Em javascript não existe class**

A `class` do javascript é apenas um açucar sintático, para funções
construtoras.

Em javascript classes são uma abstração.

> Abstração é: o processo de ocultar o menos importante e exibir apenas o mais importante.

Abstrações são feitas para que, através de um código mais simples você lide com códigos
mais complexos.

- O async await é uma abstração de promises.
- Qualquer lib é uma abstração de códigos mais complexos.

O que as class em jvascript abstraem?

Para começar vejamos o seguinte.

```js
console.log(typeof Student) // function
```

Classes, por baixo dos panos, são funções.

## Declarando uma função construtora

```js
class Student {
  constructor (name, email) {
    this.name = name
    this.email = email
  }
}

const fernando = new Student('fernando', 'fernandomk6@gmail.com')

// Equivale à

function Student (name, email) {
  this.name = name
  this.email = email
}

const fernando = new Student('fernando', 'fernandomk6@gmail.com')
```

### A importancia do new

O new Faz 3 coisas:

1. Cria um objeto vazio
2. O this na class / funções referência esse this vazio criado pelo new
3. Faz com que a função construtora/class retorne o this manipulado
  - No casos de class, o this manipulado também terá as propriedades declaradas no corpo da class*
  - Em funções contrutoras o this manipulado é terá apenas as propriedades declaradas no corpo da função*

Arrow functions não pode ser funções construtoras.
**Uma function construtora precisa ser uma function declaration**
*O this dentro de uma arrow function referência o this do escopo em que a arrow function foi declarada*

Como declarar métodos em funções construtoras?

```js
function Student (name, email) {
  this.name = name
  this.email = email

  this.login = function () {
    return `${this.name} fez login`
  }
}
```

O método login pode ser declarado no corpo da função construtora.
Porém isso é uma **má prática**. Métodos devem ser declarados no prototype.
Lembra que, métodos em class são declarados no corpo da class? Isso acontece para os
métodos serem atribuidos ao prototype. O constructor, seta apenas as propriedades.
A função construtora deve setar apenas as propriedades, dinâmicas e padrão (que terão o memso valor
para cada uma das instancias, essas propriedades padrão em classes seriam setadas no copor da classe.
O constructor em casses apenas manipula as propriedades dinâmicas). Em funções construtoras,
o this vai setar todas as propriedades dinamicas e padrão. Os métodos devem ser setados no prototype.

## Prototypes

**Em javascript, todo objeto, herda métodos e propriedades de seu prototype ou protótipo**

Por que não é bom decalrar métodos dentro da função construtora?
Quando você adiciona métodos dentro da função construtora, esse método será criado
em cada instancia desse constructor. Isso fará com que, mesmo se os métodos forem identicos,
eles ocuparão locais diferentes na memória. Se 10 objetos forem criados, com métodos declarados no constructor.
O javascript criara 10 metodos iguais, um para cada objeto instanciado, ocupando espaço diferentes na
memoria, e isso pode ser otimizado utilizando prototypes.

**O que for "identico" entre os objetos instanciados, devem ser setados no prototype**

Dentro de ada instancia, o constructor serve apenas para setar os dados que irão variar entre os objetos.
Dados identicos e que nunca mudarão, podem ser atribuidos ao prototype.

```js
class Student {
  constructor (name, email) {
    this.name = name
    this.email = email

    this.login = function () {
      return `${this.name} fez login`
    }
  }
}

const fernando = new Student('fernando henrique', 'fernandomk6@gmail.com')
const pedro = new Student('pedro emanoel', 'pedro20matar@gmail.com')

console.log(fernando.login === pedro.login)  // false
```

`fernando.login === pedro.login` retorna false, isso por que são referências (ponteiros) diferentes.
Apontam para locais distintos na memoria. Referências iguais apontam para o memso local
na memória. Isso mostra que não devemos declarar métodos no corpo da função construtora.

Prototypes... foca comigo

**Em javascript, todo objeto, herda métodos e propriedades de seu prototype ou protótipo**

### O que é um prototype?

É o objeto do qual o novo objeto que você criou vai herdar propriedades e métodos.

### Então prototype é:

O objeto que armazena as propriedade e métodos que serão herdados pelo novo objeto que
você criou.

**Em javascript, todo objeto, herda métodos e propriedades de seu prototype ou protótipo**

- Prototype é um objeto que pode ser acessado por outro objeto
- Prototype é um objeto que compatilhará seus métodos e propriedades com varios outros objetos
- Prototype é um objeto que é propriedade de outros objetos
- Todo objeto em javascript possuí um prototype
- O prototype também possui um portotype, pois prototype é um objeto e todo objeto possuí um prototype
- Pode se dizer que o prototype é um modelo de métodos e propriedades, estáticos que serão
compartilhados com outros objetos que compartilham de seu contexto.

Um objeto pessoa pode ter uma propriedade nome, que é especifica desse objeto. 
E pode ter em seu prototype um método falar, correr, ou andar. Esses métodos do prototype
pode ser acessado por qualquer objeto pessoa.

- Prototype funciona como um modelo de propriedade e métodos estáticos.
- Propriedade e métodos que são mutaveis e dinamicos devem ser atribuidos ao proprio objeto
e não ao prototype.
- Apenas propriedades dinamicas no proprio objeto
- Métodos e propriedades que não serão alteradas, devem ser atribuidas ao prototype para otimizar
a performance.

O objeto prototype pode ser acessado por meio da propriedade `__proto__`
Todo objeto possuí essa propriedade. Essa propriedade é um outro objeto.

Se um método não existir no objeto que está sendo encadeado, o javascript irá procurar esse método
em seu `__proto__`. A primeira ocorrencia do método encontrado será exevutado.
Se nenhum método for encontrado em toda a cadeia de prototypes, um erro será lançado.

`__proto__` e `[[prototype]]` são a mesma coisa.

`__proto__` é um atalho, para a propriedade prototype, do constructor, desse objeto.

Ou seja, `__proto__` não existe, ele é apenas um atalho, para a propriedade
`prototype` da função construtora ou class.

Todas as funções tem uma propriedade prototype. Essa propriedade tem por padrão,
apenas o contructor, que é referencia função.

```js
function A () {
  this.a = 'a'
}

console.dir((new A()).constructor.prototype.constructor.prototype)
```

- `constructor` é a função que construiu o objeto
- Todo `constructor`, que é uma função, tem uma propriedade prototype
- A propriedade prototype tem por padrão apenas um método chamado `constructor`,
que referência a propria função
- Como `constructor` referencia a propria função, `constructor` tem uma propriedade protorype,
pois ele é uma função, e todas as funções tem uma propriedade prototype.
- Todas propriedade prototype tem apenas um método por padrão, o método `constructor`,
que referência a função que tem essa propriedade prototype.

Isso explica o loop acima.

---

- Todas função tem uma propriedade prototype que é um objeto
- Essa propriedade prototype por padrão tem apenas um método constructor
- Todos os objetos instanciados apartir dessa função, terão acesso ao objeto
prototype da função que o construiu.

E assim é para todo o javascript.

## Armazenando métodos no prototype do objeto usando funções construtoras

Lembre que toda função tem uma propriedade prototype, onde todos os obejtos
instanciados por essa função, terão acesso a métodos e propriedades, desse objeto armazenado
na pripriedade prototype da função que instanciou o objeto.

Prototype é um objeto único. Que apenas é referênciado nas instancias de seu constructor.
Essa refência é chamada de `__proto__` ou `[[prototype]]`.

- `AFunction.protytope`
- `a = new AFunction()`
- `a.__proto__ === AFUNCTION.prototype // true`

## __proto__ dos prototype

Todas as funções tem a proriedade prototype, que é um objeto.
O prototyoe também tem um `__proto__`.

## Método staticos usando funções construtoras

```js
Student.stringToDataBase = function (aString) {
  return aString
    .toUpperCase()
    .replace(' ', '_')
}

Student.stringTodataBase('Olá eu sou um estudante')
```

Métodos staticos são apenas métodos/propriedades atribuidos diretamente
a função, e não a propriedade prototype.

**Nomeie sempre as functions declarations que são atribuidas a métodos**

```js
// Evite
AFunction.prototype.sayHello = function () {
  return 'hello'
}

// Refrira
AFunction.prototype.sayHello = function sayHello () {
  return 'hello'
}
```

Assim você atribui um nome a propriedade name da função.
Todas as funções tem uma propriedade name que armazena como string o nome da função.
Quando você atribui uma function declaration anonima a propriedade de um objeto.
Essa propriedade do objeto é uma função sem nome.

Isso apenas é válido quando está atribuindo uma função a uma propriedade
de um objeto. Sempre nomeie a função.

Para funções que são armazenada em const ou let, você pode usar functions 
declarations, ou arrow function, pois a const, já atribui o nome da const 
a propriedade name da função.

- Para métodos, nomeie a função.
- Para const, não é necessário.

**Métodos não devem ser fuções anonimas**
