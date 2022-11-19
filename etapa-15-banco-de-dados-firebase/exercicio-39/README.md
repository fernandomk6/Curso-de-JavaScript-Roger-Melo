# Coisas aprendidas nesse exercicio


## Nomeamento de callbacks

Se o seu callback for especíco, não tente nomea-lo.

Quando um callback usa um valor disponível apenas no escopo léxico,
ele é um callback especifico daquele escopo. Nesse caso, 
faz sentido não nomea-lo. Caso queira nomea-lo, você terá
que nomea-lo dentro do escopo atual.

Funções especificas de outras funções, são aquelas funções que,
no bloco delas usam uma variavel disponivel no escopo léxico.
Ou seja é uma variavel não declarada em seu escopo atual, e nem
é um de seus parametros.

Esse tipo de situação é bem comum ao usar callbacks. Callbacks
geralmente manipularão valores desclarados no escopo léxico.
Nesse caso, esse callback é uma função especifica. Então, não é
necessário nomea-la globalmente pois a mesma não será usada em
outros locais.Se quiser nomea-la, declara-a dentro do escopo
atual.

- Se o callback não manipular valores do escopo léxico, nomei-o.
- Se o callback usar valores de seu escopo léxico, nomei-o dentro
do escopo atual.

## Foreach e thisArg

```js
const names = ['fernando', 'maria', 'romário', 'fernando']

function nameIsEqualTo (name) {
  return name === this.targetName
}

function getNamesOcurrences (targetName) {
  this.targetName = targetName

  return names.filter(nameIsEqualTo, this)
}

console.log(getNamesOcurrences('fernando'))
```

filter, forEach e outros métodos poder receber um parametros thisArgs.
Esse thisArgs é o this que será usado dentro da função de callback.
usar o thisArgs pode fazer com que seu callback altere valores
não disponiveis no escopo que foi declarado. Perceba que na função
nameIsEqualTo não existe this.targetName. Porem quando ela foi invocada em um
filter passando o thisArgs e nesse thisArgs o this possúi a propriedade 
targetName. O this passado no filter foi atribuido ao this usado no callback do
filter.

## Use spread operator ao invés do método push.


```js
// Ao invés disso:
let numbers = [1, 2, 3]

numbers.push(4)

// faça isso:

const numbers = [1, 2, 3]
const numbers2 = [ ...numbers, 4]
```

