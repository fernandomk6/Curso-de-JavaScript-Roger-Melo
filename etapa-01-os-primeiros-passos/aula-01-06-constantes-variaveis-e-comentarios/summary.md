# Constantes, variáveis e comentários

O papel de uma variável é armazenar um valor.
Como ela armazena uma variável, você pode usar o valor 
dela em outro lugar.

## let

```js
let age = 31

// age agora possuí 31 armazenado
// o = é operador de atribuição, ler ser "atribua 31 a variável age"
```

Um `console.log` pode receber mais de um valores, separados por vírgula.

```js
console.log(1, 'Olá')
```

**Se é uma variável seu valor pode variar**

Nas reatribuição, não precisa usar a palavra let novamente.

```js
let a = 'a';
console.log(a); // Imprime 'a' no console.

a = 'b'
console.log(a) // Imprime 'b' no console.
```

## const

Usamos const quando não queremos reatribuir algum valor a variável.

```js
const points = 1000
points = 1000

console.log(points) 
// Um erro ocorrerá no console pois, não é possivel
// reatribuir um valor a uma constante.

// Uma constante deve ter o seu valor inalterado, desde sua declaração
// até o fim do código.
```


## var

Antigamente usavamos var para criar variavel

```js
var a = 'a'
```

**Não use o var**

## Regras para nomear variaveis

- Não pode ter espaços (use camelcase)
- Nome de variaveis so pode conter número, underscore ou cifrão mas 
o nome não pode começar com números
- Não podemos usar palavras reservadas da linguagem como nome de variáveis

**Der nomes claros para as variáveis**.

## Comentários

- Comentarios de uma linha iniciam com `// meu comentário de linha`
- Comentário com multiplas linhas `/* Comentário em bloco */`
