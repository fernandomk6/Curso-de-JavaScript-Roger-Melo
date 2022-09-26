# Switch

O switch deve ser usado quando queremos fazer
fazer várias verificações.

Entendendo o problema.

```js
const grade = 'C'

if (grade === 'A') {
  console.log('Você tirou um A')
} else if (grade === 'B') {
  console.log('Você tirou um B')
} else if (grade === 'C') {
  console.log('Você tirou um C')
} else if (grade === 'D') {
  console.log('Você tirou um D')
} else {
  console.log('Valor inválido')
}
```

No exemplo acima fizemos várias verificações, usando else if.
Porém podemos fazer a mesma coisa com um switch, que será mais legível
e mais performático, mas talvez não será muito comum.

```js
switch (grade) {
  case 'A':
    console.log('Você tirou nota A')
    break
  case 'B':
    console.log('Você tirou nota B')
    break
  case 'C':
    console.log('Você tirou nota C')
    break
  case 'D':
    console.log('Você tirou nota D')
    break
  default:
    console.log('Nota inválida')
}
```

No default não deve ser usado o break.