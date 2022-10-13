# Método filter

## Princípios

Você deve usar o filter quando precisar, baseado em uma condição,
obter um novo array apartir de um array. Com os mesmo itens ou
com alguns itens do array original. Ou seja quando você precisar
filter elementos desse array original. Os elementos filtrados
serão adicionados ao array que será retornado pelo filter.

- O retorno do callback do filter deve sermpre ser um boolean
- Caso o boolean seja true, o item atual será adicionado ao novo array
- Caso o boolean seja false, o item atual **não** será adicionado ao novo array

## Cuidado

O filter sempre retornará o exato mesmo objeto do array original, caso o 
retorno do callback seja true.
Caso o item da iteração atual seja um object, esse objeto será adicionado
ao novo array, e não uma cópia do mesmo. Ou seja, a sua referência será
adicionada ao novo array. 

Uma solução interessante para esse problema é encadear o método map, no retorno do filter, 
pois o map pode alterar os dados do array original.

```js
const users = [
  { name: 'Ada Lovelace', premium: true },
  { name: 'Grace Hopper', premium: false },
  { name: 'Alan Turing', premium: true },
  { name: 'Linus Torvalds', premium: false },
  { name: 'Margaret Hamilton', premium: true }
]

const premiumUsers = users
  .filter(user => user.premium)
  .map(premiumUser => ({ ...premiumUser }))


console.log(users[0] === premiumUsers[0]) // false
```
