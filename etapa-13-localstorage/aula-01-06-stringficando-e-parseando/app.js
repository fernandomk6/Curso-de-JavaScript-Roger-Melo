const arrayInJSON = localStorage.getItem('myArray')
const convertedArrayInObject = JSON.parse(arrayInJSON)

console.log(typeof convertedArrayInObject) // object