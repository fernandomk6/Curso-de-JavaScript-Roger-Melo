const getTodos = (url) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', () => {
      const isRequestOk = request.readyState === 4 && request.status === 200
      const isRequestNotOk = request.readyState === 4 && request.status !== 200

      if (isRequestOk) {
        const data = JSON.parse(request.responseText)
        resolve(data)
      }

      if (isRequestNotOk) {
        reject('Não foi possível obter os dados')
      }
    })

    request.open('GET', url)
    request.send()
  })
}  

getTodos('https://pokeapi.co/api/v2/pokemon/ditto')
  .then(data => {
    console.log(data)
  })
  .catch(error => {
    console.log(error)
  })
