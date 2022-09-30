# Query selectors

## document.querySelector('seletor css')

Retorna **apenas uma** e a primeira referência ao elemento html encontrada correspondente 
ao seletor css.

Essa referência possuí métodos e propriedades que permitem resgatar
os dados e manipular esse elemento.

## document.querySelectorAll('seletor css')

Retorna **uma lista (object array like)** ou mais específicamente um **NodeList**
com todas as referência aos elementos html correspondentes ao seletor css.

## Copiando seletor CSS pelo google dev tools

Você pode de maneira fácil copiar o seletor único do elemento que deseja
pelo google dev tools.

![copy selector](https://i.stack.imgur.com/MoXsN.png)

## Outras maneiras de fazer query no DOM

### Selecionando elemento pelo ID

Sintaxe 

```js

const paragraph = document.getElementById('main-paragraph')

// cont armazena uma referência ao elemento do DOM
// que tenha o id main-paragraph
```

### Selecionando elemento pelo nome da classe

Sintaxe 

```js

const errors = document.getElementsByClassName('error')

// errors armazena um HTMLCollection com todos os elementos
// que tenham a classe error
```

### Selecionando elemento pelo nome da tag

Sintaxe 

```js

const paragraphs = document.getElementsByTagName('p')

// paragraphs armazena um HTMLCollection com todos os elementos
// que tenham a tag p
```

