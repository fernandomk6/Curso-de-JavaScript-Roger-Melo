const getUsers = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  return await response.json()
  
}

const logUsers = async () => {
  const users = await getUsers()
  console.log(users)
}

console.log(1)
logUsers() // async code
console.log(2)

// fetch('https://jsonplaceholder.typicode.com/users')
//   .then((data) => { 
//     if (!data.ok) {
//       throw new Error ('Não foi possivel obter os dados')
//     }
//     return data.json() 
//   }) 
//   .then(data => {
//     console.log(data)
//   })
//   .catch((error) => { 
//     console.log(error) 
//   }) 
