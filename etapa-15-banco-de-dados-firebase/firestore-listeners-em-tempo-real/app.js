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

const unSubscribe = onSnapshot(collectionGames, (querySnapshot) => {
  if (!querySnapshot.metadata.hasPendingWrites) {
    const gamesListItems = querySnapshot.docs.map((doc) => {
      const { title, developedBy, createdAt } = doc.data() 

      const options = {
        year: 'numeric', month: 'numeric', day: 'numeric',
        hour: 'numeric', minute: 'numeric', second: 'numeric',
        hour12: false,
        timeZone: 'America/Sao_Paulo'
      }

      const createdAtDate = Intl.DateTimeFormat('pt-BR', options).format(createdAt.toDate())
        .split('')
        .slice(0, -3)
        .join('')
  
      return `<li data-id="${doc.id}" class="my-5">
        <h5>${title}</h5>
  
        <ul>
          <li>Desenvolvidor por ${developedBy}</li>
          <li>Criado no banco em ${createdAtDate}</li>
          
          
          <button data-remove="${doc.id}" class="btn btn-danger btn-sm">Remover</button>
        </ul>
      </li>`
    })
    .join('')
  
    gamesList.innerHTML = gamesListItems
  }
})

formAddGame.addEventListener('submit', (event) => {
  event.preventDefault()
  
  const title = event.target.title.value 
  const developer = event.target.developer.value 

  addDoc(collectionGames, {
    title,
    developedBy: developer,
    createdAt: serverTimestamp()
  })
    .then((doc) => {
      console.log('Documento adicionado com sucesso', doc.id)
    })
    .catch((error) => {
      console.log(error)
    })
})

gamesList.addEventListener('click', (event) => {
  const idRemoveButton = event.target.dataset.remove 

  if (idRemoveButton) {
    deleteDoc(doc(db, 'games', idRemoveButton))
      .then(() => {
        console.log('Game removido com sucesso')
      })
      .catch((error) => {
        console.log(error)
      })
  }
})

buttonUnsub.addEventListener('click', unSubscribe)
