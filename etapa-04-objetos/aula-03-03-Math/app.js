// console.log(Math.round(1.5)) // 2
// console.log(Math.round(1.6)) // 2
// console.log(Math.round(1.4)) // 1

// console.log(Math.floor(1.5)) // 1
// console.log(Math.floor(1.6)) // 1
// console.log(Math.floor(1.4)) // 1

// console.log(Math.ceil(1.5)) // 2
// console.log(Math.ceil(1.6)) // 2
// console.log(Math.ceil(1.4)) // 2

// console.log(Math.trunc(1.5)) // 1
// console.log(Math.trunc(2.6)) // 2
// console.log(Math.trunc(3.4)) // 3

// const result = Math.floor(Math.random() * 10) - 5;

// console.log(result)

// function getRandomInt(min, max) {
//   return Math.round(Math.random() * (max - min)) + min;
// }

// const result = getRandomInt(10, 15)

// for (let count = 1; count <= 1000; count++) {
//   const result = getRandomInt(10, 15)

//   if (result < 10 || result > 15) {
//     console.log('Algo está errado')
//     break
//   }

//   if (result === 10) {
//     console.log('Deu 10')
//     break
//   }

//   if (result === 15) {
//     console.log('Deu 15')
//     break
//   }
// }

function getMax(max) {
  return Math.round(Math.random() * max)
}

for (let count = 0; count <= 1000; count++) {
  const result = getMax(10)

  if (result < 0 || result > 10) {
    console.log('Algo está errado')
    break
  }

  if (result === 0) {
    console.log('Deu 0')
    break
  }

  if (result === 10) {
    console.log('Deu 10')
    break
  }
}

