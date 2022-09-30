# Alterando classes

## Listando as classes que o elemento tem

`console.log(paragraph.classList)`

Retorna um DOMTokenList, que é um objeto similar
a um array. Cada indice possui uma classe.


## Adicinando uma classe ao elemento

`element.classList.add('nome da classe')`

## Removendo uma classe do elemento

`element.classList.remove('nome da classe')`

## Alterandno uma classe no elemento

`element.classList.toggle('nome da classe')`

O toggle altera a classe. Caso ela exista, ele remove.
Caso ela não exista, ele adiciona.


## Diferença entre innerText e textContent

`innerText` obtém o texto visível que o elemento tem.
`textContent` obtém o texto do elemento independentemente se
ele está visível ou não.