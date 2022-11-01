/*
  Neste exercício, vamos praticar um pouco do que vimos até aqui, através da 
  API do GIPHY, que é um website de GIFs (https://giphy.com/).

  - Seu desafio é implementar uma funcionalidade de busca dos GIFs. Quando o 
    usuário digitar o termo de busca no input e pressionar enter, um GIF deve 
    ser exibido na tela. Como neste exemplo: https://youtu.be/RHe-uCJGCeA
  - Observe que o GIF mais recente é inserido acima dos GIFs anteriores;
  - Para fazer requests para a API do GIPHY, você precisará de uma API key. 
    Para obtê-la, siga os seguintes passos:
    - Acesse https://developers.giphy.com/dashboard/ e faça o login;
    - No Dashboard, clique em "Create an App", clique em "API Selected" e em 
      "Next Step";
    - Dê um nome e descrição para o app e crie-o;
    - Clique no código da API key para copiá-la;
  - O submit do form deve ser feito para o endpoint abaixo. Atente-se para os 2
    [PLACEHOLDERS] que devem ser substituídos:
    - https://api.giphy.com/v1/gifs/search?api_key=[SUA_CHAVE_DA_API_AQUI]&limit=1&q=[VALOR_INSERIDO_NO_INPUT]
    - Se quiser testar outras possibilidades, os endpoints da API estão 
      listados na documentação: https://developers.giphy.com/docs/api/endpoint#search
  - Ignore os avisos no console. Para limpá-lo, pressione "ctrl + L".
*/

const formSearch = document.querySelector('#formSearch')
const divOut = document.querySelector('#out')
const spanMessage = document.querySelector('#message')
const APIKey = 'XxPba3ZN4t21p7BYNiKqxgG9FdhlGCjI'
const limit = 100
const APIURL = `https://api.giphy.com/v1/gifs/search?api_key=${APIKey}&limit=${limit}&q=[value]`

const handleMessage = (message) => { 
  spanMessage.textContent = message ? message : ''
}

const getGifs = async (value) => {
  handleMessage('Carregando...')

  try {
    const response = await fetch(APIURL.replace('[value]', value))

    if (!response.ok) {
      throw new Error('Não foi possível obter os dados')
    }

    return response.json()
  } catch (error) {
    handleMessage(error.message)
  }
}

const prependGif = (src, alt) => {
  const img = document.createElement('img')
  const div = document.createElement('div')

  div.setAttribute('class', 'image-container')
  img.setAttribute('src', src)
  img.setAttribute('alt', alt)

  div.appendChild(img)
  divOut.prepend(div) 
}

const showResult = async (event) => {
  event.preventDefault()
  
  const input = event.target.search
  const value = input.value

  try {
    const gifs = await getGifs(value)

    if (!gifs) {
      return
    }

    const resultNumbers = gifs.data.length
    const noResults = resultNumbers === 0

    if (noResults) {
      throw new Error('Nenhum resultado')
    }

    const lastGifIndex = resultNumbers
    const index = Math.floor(Math.random() * lastGifIndex)
    const gif = gifs.data[index]
    const alt = gif.title
    const src = gif.images.downsized.url
    
    formSearch.reset()
    prependGif(src, alt)
    handleMessage()

  } catch (error) {
    handleMessage(error.message)
    formSearch.reset()
  }
}

formSearch.addEventListener('submit', showResult)
