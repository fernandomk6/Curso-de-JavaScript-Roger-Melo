// A promise
fetch('https://jsonplaceholder.typicode.com/users')
  // Callback que será executado quando a promise tiver sucesso. 
  // Data é o retorno de sucesso.
  // Data é o valor passado a função resolve, no callback passado
  // para o construtor Promise.
  .then((data) => { 
    if (!data.ok) {
      throw new Error ('Não foi possivel obter os dados')
    }

    // Método json do objeto response.
    // Esse método retorna uma promise com o json já convertido
    // para objeto javascript sendo passado como argumento para o resolve.
    return data.json() 
  }) 
  // Segundo then, recebe o valor passado para a função resolve, na promise retornada pelo
  // then anterior.
  .then(data => {
    console.log(data)
  })

  // Callback que será executado quando a promise for rejeitada. 
  // Error é o retorno de error.
  // Error é o valor passado a função reject, no callback passado
  // para o construtor Promise.
  .catch((error) => { 
    console.log(error) 
  }) 
