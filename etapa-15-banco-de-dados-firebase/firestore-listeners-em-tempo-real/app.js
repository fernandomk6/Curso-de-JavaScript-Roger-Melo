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

const buildGameItemTemplate = (id, title, developedBy, createdAt) => {
  createdAt = getFormattedDate(createdAt)

  return `
    <li data-id="${id}" class="my-5">
      <h5>${title}</h5>
      <ul>
        <li>Desenvolvidor por ${developedBy}</li>
        <li>Criado no banco em ${createdAt}</li>
        <button data-remove="${id}" class="btn btn-danger btn-sm">Remover</button>
      </ul>
    </li>
  `
}

const buildListGameTemplate = (doc) => {
  const [ id, { title, developedBy, createdAt }] = [ doc.id, doc.data() ]
  return buildGameItemTemplate(id, title, developedBy, createdAt)
}

const renderGamesList = (querySnapshot) => {
  if (querySnapshot.metadata.hasPendingWrites) {
    return
  }
  
  const gamesListItems = querySnapshot.docs
    .map(buildListGameTemplate)
    .join('')

  gamesList.innerHTML = gamesListItems
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

  console.log('Game removido com sucesso')
}

const handleErrorOnSnapshot = error => console.log(error)


const unSubscribe = onSnapshot(collectionGames, renderGamesList, handleErrorOnSnapshot)
formAddGame.addEventListener('submit', addGame)
gamesList.addEventListener('click', removeGame)
buttonUnsub.addEventListener('click', unSubscribe)
