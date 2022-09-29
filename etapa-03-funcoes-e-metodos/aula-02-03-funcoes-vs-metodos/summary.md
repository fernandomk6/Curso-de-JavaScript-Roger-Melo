# Funções vs Métodos

Funções e métodos são em excência a mesma coisa.
O que vai diferenciar é a forma como eles são 
declarados e invocados.

Um método é uma função que é pertencente a um objeto.
Ou seja é uma função que é uma "propriedade" de um objeto.

Funções que são propriedades de objetos são métodos.

Funções que não são propriedade de métodos, são 
apenas funções.

Podemos deixar isso mais claro analisando a sintaxe de invocação
de cada um.

Um método sempre será invocado com a sintaxe de ponto. Assim:

```js
console.log('Hello World')
```

Perceba que que log é um método pois vem depois de um ponto (.).
O que vem antes do ponto é o objeto. Ou seja console é um objeto.
O ponto, caracteriza o acesso a uma propriedade. Qual propriedade?
a função log. Como eu sei que é uma função? Pois está sendo invocada com
os parâmetros. Se é uma função e é uma propriedade de um objeto, é um método.

Já as funções normais não tem esse ponto. São chamadas direto. Assim:

```js
function (aString) {
  console.log(aString)
}

log('Hello World')
```

Perceba que a função log foi chamada sem o ponto anterior a ela. 
E foi declarada no escopo global ou em um escopo que não seja 
pertencente a um objeto. 

Se não tem o ponto, então não tem vínculo com objeto então não é um 
método. É apenas uma função.