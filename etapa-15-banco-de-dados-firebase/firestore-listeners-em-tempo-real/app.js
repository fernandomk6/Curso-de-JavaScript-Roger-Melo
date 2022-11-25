import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-app.js"
import { getFirestore, collection, addDoc, serverTimestamp, doc, deleteDoc, onSnapshot } from 'https://www.gstatic.com/firebasejs/9.0.1/firebase-firestore.js'

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

const formatDate = (date) => {
  const options = {
    year: 'numeric', month: 'numeric', day: 'numeric',
    hour: 'numeric', minute: 'numeric', second: 'numeric',
    hour12: false,
    timeZone: 'America/Sao_Paulo'
  }

  return Intl.DateTimeFormat('pt-BR', options).format(date.toDate())
    .split('')
    .slice(0, -3)
    .join('')
}

const buildGameItemTemplate = (id, title, developedBy, createdAt) => {
  createdAt = formatDate(createdAt)

  return `
    <li data-id="${doc.id}" class="my-5">
      <h5>${title}</h5>
      <ul>
        <li>Desenvolvidor por ${developedBy}</li>
        <li>Criado no banco em ${createdAt}</li>
        <button data-remove="${doc.id}" class="btn btn-danger btn-sm">Remover</button>
      </ul>
    </li>
  `
}

const buildListGameTemplate = (doc) => {
  const { id, title, developedBy, createdAt } = doc.data() 

  return buildGameItemTemplate(id, title, developedBy, createdAt)
}

const gamesRefresh = (querySnapshot) => {
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

  try {
    await addDoc(collectionGames, {
      title,
      developedBy,
      createdAt: serverTimestamp()
    })

    formAddGame.reset()
    formAddGame.title.focus()
  } catch (error) {
    console.log(error)
  }
}

const removeGame = async (event) => {
  const idRemoveButton = event.target.dataset.remove 

  if (!idRemoveButton) {
    return
  }

  try {
    await deleteDoc(doc(db, 'games', idRemoveButton))
    console.log('Game removido com sucesso')
  } catch (error) {
    console.log(error)
  }
}

const unSubscribe = onSnapshot(collectionGames, gamesRefresh)

formAddGame.addEventListener('submit', addGame)
gamesList.addEventListener('click', removeGame)
buttonUnsub.addEventListener('click', unSubscribe)
