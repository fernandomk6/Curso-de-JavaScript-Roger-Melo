// const logData = (firstData, secondData) => {
//   console.log({ firstData, secondData })
// }
// // primitive types

// let firstData = 1
// let secondData = firstData

// logData(firstData, secondData)

// firstData = 2

// logData(firstData, secondData)

const logData = (firstData, secondData) => 
  console.log({ firstData, secondData })

// reference types

let firstData = { name: 'Fernando' }
let secondData = firstData

logData(firstData, secondData)

firstData.name = 'Maria'

logData(firstData, secondData)

// { firstData: { name: 'Fernando' }, secondData: { name: 'Fernando' } }
// { firstData: { name: 'Maria' }, secondData: { name: 'Maria' } }

