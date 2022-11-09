# Herança em class 

É fazer com que uma sub-classe herde propriedades e métodos de outra classe.

usamos o extends quando queremos fazer com que uma class,
obtenha todas as propriedades e métodos de outra classe, mais algumas
especificas apenas dessa classe.

Por exemplo a classe lion. Tem todos os métodos e propriedades da 
classe mámifero. Porém alem desses ela tem o método comer zebra.

Então pode se dizer que a classe lion extende ou herda, a class 
mamífero.

```js
class Lion extends Mammal {
  
}
```

A palavra extends diz que a classe a esquerda, é filha da classe a direita.
Ou seja, os objetos instanciados pela class Lion, terão todas os métodos
e propriedades da classe Mammal.

```js
class Mammal {
  constructor (species, name, age) {
    this.species = species
    this.name = name
    this.age = age
    this.mammaryGland = true
  }

  incrementAge () {
    this.age++
  }
}

class Lion extends Mammal {

}

const zeca = new Mammal('zebra', 'Zeca', 6)
const pompeu = new Mammal('gnu', 'Pompeu', 5)
const angus = new Mammal('cavalo', 'Angus', 3)

const mufasa = new Lion('leão', 'mufasa', 7)

console.log(zeca, pompeu, angus)
console.log(mufasa)
```

Quando uma classe não possuí um constructor declarado dentro de seu bloco.
Ela usa o constructor da classe que está sendo extendida.
Foi por isso que o código acima funcionou. A classe Lion usou o 
constructor da classe Mammal. Apenas por que nessa não foi declarado um constructor.

Isso aqui é possível:
*Mas claro, nunca faça isso é apenas para você saber que funciona*.

```js
class A {

}

const a = new A()

console.log(a) // A {}
```

## Propriedades e métodos unicos da classe filha (classe que está extendendo outra)

```js
class Mammal {
  constructor (species, name, age) {
    this.species = species
    this.name = name
    this.age = age
    this.mammaryGland = true
  }

  incrementAge () {
    this.age++
  }
}

class Lion extends Mammal {
  eatZebras (animails) {
    return animails.filter(animal => animal.species !== 'zebra')
  }
}

const zeca = new Mammal('zebra', 'Zeca', 6)
const pompeu = new Mammal('gnu', 'Pompeu', 5)
const angus = new Mammal('cavalo', 'Angus', 3)

const mufasa = new Lion('leão', 'mufasa', 7)

const animals = [zeca, pompeu, angus]

console.log(mufasa.eatZebras(animals))
```

Perceba que a class Lion agora tem um método `eatZebras`.
Esse método pertence apenas a essa classe.
**Métodos devem ser declarados no bloco da class**.

Lion possuí todos os métodos e propriedades da class Mammal.
Isso graças a palavra `extends` que caracteriza a herança.

Perceba que Lion não tem um constructor para setar as propriedades.
Quando um constructor não é declarado em uma class, o javascript
usará o constructor da class que está sendo extendida, no caso a class
Mammal. Ou seja por baixo dos panos a class Lion está executando o constructor
da Mammal, e setando suas propriedades, apenas por que a class Lion não 
tem constructor.

Mas e se eu quiser declarar propriedades únicas na class Lion?

Podemos criar o constructor na class Lion, apartir dela chamar o constructor
da class herdada (Mammal) e continuar setando suas propriedades individuais.

O constructor na classe filho só executa o constructor da classe pai, quando na classe filha
não existe um constructor declarado. 
Se existe um constructor na classe filha, por padrão o constructor da classe pai não é executado.

Como fazemos para executar os dois constructors?

## O super

Podemos usar a função super, que irá chamar o constructor da class pai, e irá passar
os argumentos. O objeto retornado pelo constructor é o this, que foi setado pelo constructor do
pai, mais as propriedades setadas no decorrer do constructor do filho.

`super` vai invocar o constructor da class que está sendo herdada. Essa infocação do super,
vai setar as propriedades ao objeto que está sendo criado no constructor filho, o this.

Em seguida o this continua sendo configurado com  as propriedades especificas da classe filha.

Assim:

```js
class Mammal {
  constructor (species, name, age) {
    this.species = species
    this.name = name
    this.age = age
    this.mammaryGland = true
  }

  incrementAge () {
    this.age++
  }
}

class Lion extends Mammal {
  constructor (species, name, age, manEater) {
    super(species, name, age)
    this.manEater = manEater
  }

  eatZebras (animails) {
    return animails.filter(animal => animal.species !== 'zebra')
  }
}

const mufasa = new Lion('leão', 'mufasa', 7, false)
console.log(mufasa)
```