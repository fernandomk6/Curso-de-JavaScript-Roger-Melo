# Document fragment DOM

`const documentFragment = document.createDocumentFragment()`

O método createDocumentFragment retorna um elemento container para elementos do DOM.

```js
documentFragment.append(element)
divElement.append(documentFragment)
```

O createDocumentFragment deve ser usado para armazenar uma lista de elementos do dom,
para futuramente incluir todos esses elementos no dom de uma vez so.

Geralmente usado para evitar manipular o dom dentro de estruturas de repetição.
Ao invés de, em cada iteração manipular o DOM. Em cada iteração você irá adicionar 
o elemento ao documentfragment. Ao final do loop adicione o documentFragment ao DOM.
Dessa forma apenas uma manipulação de dom é feita.

**Manipular o dom é uma tarefa custosa para o processador do cliente**.



