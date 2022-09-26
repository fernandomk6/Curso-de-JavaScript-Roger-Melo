const grade = 'C'

// if (grade === 'A') {
//   console.log('Você tirou um A')
// } else if (grade === 'B') {
//   console.log('Você tirou um B')
// } else if (grade === 'C') {
//   console.log('Você tirou um C')
// } else if (grade === 'D') {
//   console.log('Você tirou um D')
// } else {
//   console.log('Valor inválido')
// }


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