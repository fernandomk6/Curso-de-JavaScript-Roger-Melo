# Herança prototipal

Entenda a herança prototipal para entender como o javascript compõem
objetos.

Se você não entender a herança prototipal, você vai pensar que javascript faz
a heranã clássica.  

# A principal caracteristica que faz o javascript ser o javascript

Quando queremos criar uma herança usando class. Usamos a palavra chave `extends`
e executamos a função `super`.

E com funções construtoras como fazemos herança?

## Function.call(newThis)

Function.call(newThis) faz a chamada da Function, atribuindo um outro valor ao this
dessa Function.

```js
// Isso
class Base {
  constructor (name, email) {
    this.name = name
    this.email = email
  }
}

class Extended extends Base {
  constructor (name, email) {
    super(name, email)
  }
}

// Equivale a isso
function Base (name, email) {
  this.name = name
  this.email = email
}

function Extended (name, email) {
  Base.call(this, name, email)
  this.especificProp = true
}

```

Perceba que dentro da Extended, estamos infocando a função Base com o call, passando o this,
como argumento. Esse this é o obejto que será retornado pela Extended. A função Base
é executada, e retorna o this. Ou seja esse this passa pelo processo de construção da Base
e depois pela Extended. O call recebe o this que será usado na função que está sendo
chamada. Os outros argumentoes serão os argumentos passados para a função que o call está
encadeado.

## Object.create

```js
const objProto = { a: 1 }
const objBase = Object.create(objProto)
```

`Object.cretete(aPrototypeObject)` esse método retorna um novo objeto, que tem o `aPrototypeObject` como
`__proto__`. Ou seja o `__proto__` irá apontar para o `aPrototypeObject`.

Object.create retorna um objeto vazio. Com o objeto passado como argumento como `__proto__`.

O object.create pode receber o nome das propriedades como proximos argumentos, alem do objeto
que será o `__proto__`. Essas propriedades deve ser especificadas como objetos e não cobriremos esse
caso aqui agora, fecaremos apenas em criar objetos vazios, setando um prototype

Exemplos de uso do Object.create

```js
function Constructor() {}
o = new Constructor();
// Equivale à
o = Object.create(Constructor.prototype);
```

```js
o = Object.create(null);
// Equivale á
o = { __proto__: null };
```

## Conclusão

A heranã do javascript é a cadeia de prototypes.
Não existem classe.

**Herança em javascript é a cadeia de prototypes**

Cadeia de prototypes é a possíbilidade de um objeto, acessar outro objeto.

O objeto instanciado, acessa o objeto armazenada no propriedade prototype da função que
o construiu.

Use classes ou funções construtoras quando precisar criar vários objetos que compatilhem
dos mesmos métodos e propriedades.

Classes são mais simples do que funções construtoras.

Aprenda e domine funções construtoras e herança prototipal, pos elas são uma 
das principais caracteristicas do javascript.

Se você dominar herança prototipal e funções construtoras.

Class não será um problema, muito menos objetos literais
ou **factory functions**.

Sempre use o que for melhor, para sua necessidade.

Para saber o que é melhor para sua necessidade você precisa saber **tudo**
aquilo que pode ser uma solução.
