const request = new XMLHttpRequest()

request.addEventListener('readystatechange', () => {
  console.log(request.readyState)
  console.log(request.status)
  
  if (request.readyState === 4 && request.status === 200) {
    console.log(request.response)
  }
})

request.open('GET', 'https://jsonplaceholder.typicode.com/todos')
request.send()
