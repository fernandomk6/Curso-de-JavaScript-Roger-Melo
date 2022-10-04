# Criando e removendo elementos do DOM

O método `document.createElement(tagNameAsString)` irá retornar um 
objeto do tipo HTMLElement que pode ser inserido no DOM, posteriormente.
Pode ser customizado.

## Inserindo elemento criado no DOM

Existem 2 métodos básicos para incluir esse elemento criado, no DOM.

1. parent.append(newElement): Insere o elemento como ultimo filho
2. parent.prepend(newElement): Insere o elemento como primeiro filho

### Diferença entre append e appendChild

O método appendChild precisa de um elemento.
O método appende não.

Ou seja não é possivel fazer: `toDoList.appendChild('oi')`.
A string 'oi' não é um elemento.

O mesmo seria possivel com o append.

`toDoList.append('oi')`. Assim não ocorre erro.