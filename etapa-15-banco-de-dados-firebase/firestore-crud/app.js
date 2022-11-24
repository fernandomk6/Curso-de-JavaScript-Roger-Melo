import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-app.js"
import { getFirestore, collection, getDocs, addDoc, serverTimestamp, doc, deleteDoc, updateDoc, setDoc } from 'https://www.gstatic.com/firebasejs/9.0.1/firebase-firestore.js'

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

const gamesList = document.querySelector('[data-js="games-list"]')
const formAddGame = document.querySelector('[data-js="add-game-form"]')

const collectionGames = collection(db, 'games')

getDocs(collectionGames)
  .then((querySnapshot) => {
    const gamesListItems = querySnapshot.docs.map((doc) => {
      const { title, developedBy, createdAt } = doc.data() 

      return `<li data-id="${doc.id}" class="my-5">
        <h5>${title}</h5>

        <ul>
          <li>Desenvolvidor por ${developedBy}</li>
          <li>Adicionado no banco em ${createdAt.toDate()}</li>
          
          <button data-remove="${doc.id}" class="btn btn-danger btn-sm">Remover</button>
        </ul>
      </li>`
      })
      .join('')
    
    gamesList.innerHTML = gamesListItems
  })
  .catch((error) => {
    console.log(error)
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
      console.log('Documento adicionado com sucesso', doc)
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
        const game = document.querySelector(`[data-id="${idRemoveButton}"]`)
        game.remove()

        console.log('Game removido com sucesso')
      })
      .catch((error) => {
        console.log(error)
      })
  }
})


const re3 = doc(db, 'games', 're')

setDoc(re3, {
  title: 'Resident Evil 3'
}, { merge: true })
  .then((result) => {
    console.log('Game atualizado', result)
  })
  .catch((error) => {
    console.log(error)
  })



