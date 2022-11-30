import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-app.js"

import { 
  getFirestore, 
  collection, 
  addDoc, 
  serverTimestamp, 
  doc, 
  deleteDoc, 
  onSnapshot 
} from 'https://www.gstatic.com/firebasejs/9.0.1/firebase-firestore.js'

const firebaseConfig = {
  apiKey: "AIzaSyAAiOndsiORYtRUNX7d97dr2_FUVI7m7ys",
  authDomain: "firestore-crud-cjrm.firebaseapp.com",
  projectId: "firestore-crud-cjrm",
  storageBucket: "firestore-crud-cjrm.appspot.com",
  messagingSenderId: "605476002290",
  appId: "1:605476002290:web:194d5af8791efea5f2736b",
  measurementId: "G-031FJLB0CT"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const collectionGames = collection(db, 'games')

const gamesList = document.querySelector('[data-js="games-list"]')
const formAddGame = document.querySelector('[data-js="add-game-form"]')
const buttonUnsub = document.querySelector('[data-js="unsub"]')

const to = (promise) => promise
  .then((result) => [null, result])
  .catch((error) => [error])


const getFormattedDate = (date) => {
  const options = {
    dateStyle: 'short',
    timeStyle: 'short'
  }

  return Intl.DateTimeFormat('pt-BR', options).format(date.toDate())
}

const buildGameItemElement = (docChange) => {
  const [ id, { title, developedBy, createdAt }] = [ docChange.doc.id, docChange.doc.data() ]

  const liContainer = document.createElement('li')
  const h5 = document.createElement('h5')
  const ulGameData = document.createElement('ul')
  const liDevelopedBy = document.createElement('li')
  const liCreatedAt = document.createElement('li')
  const buttonRemove = document.createElement('button')

  liContainer.setAttribute('data-id', id)
  buttonRemove.setAttribute('data-remove', id)
  buttonRemove.classList.add('btn', 'btn-danger', 'btn-sm')

  h5.textContent = title 
  liDevelopedBy.textContent = `Desenvolvidor por ${developedBy}`
  liCreatedAt.textContent = `Criado no banco em ${getFormattedDate(createdAt)}`
  buttonRemove.textContent = 'Remover'
  
  ulGameData.append(liDevelopedBy)
  ulGameData.append(liCreatedAt)
  ulGameData.append(buttonRemove)
  liContainer.append(h5)
  liContainer.append(ulGameData)

  return liContainer
}

const renderGamesList = (querySnapshot) => {
  if (querySnapshot.metadata.hasPendingWrites) {
    return
  }

  querySnapshot.docChanges().forEach(docChange => {
    if (docChange.type === 'removed') {
      const gameItemToRemove = gamesList.querySelector(`li[data-id="${docChange.doc.id}"]`)
      gameItemToRemove.remove()
      return 
    }

    const gameItemElement = buildGameItemElement(docChange)
    gamesList.append(gameItemElement)
  })
}

const addGame = async (event) => {
  event.preventDefault()
  
  const title = event.target.title.value 
  const developedBy = event.target.developer.value 

  const [ error ] = await to(addDoc(collectionGames, {
    title,
    developedBy,
    createdAt: serverTimestamp()
  }))

  if (error) {
    return console.log(error)
  }

  event.target.reset()
  event.target.title.focus()
}

const removeGame = async (event) => {
  const idRemoveButton = event.target.dataset.remove 

  if (!idRemoveButton) {
    return
  }

  const [ error ] = await to(deleteDoc(doc(db, 'games', idRemoveButton)))

  if (error) {
    return console.log(error)
  }
}

const handleErrorOnSnapshot = error => console.log(error)


const unSubscribe = onSnapshot(collectionGames, renderGamesList, handleErrorOnSnapshot)
formAddGame.addEventListener('submit', addGame)
gamesList.addEventListener('click', removeGame)
buttonUnsub.addEventListener('click', unSubscribe)
