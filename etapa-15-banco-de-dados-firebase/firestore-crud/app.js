import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-app.js"
import { getFirestore, collection, getDocs } from 'https://www.gstatic.com/firebasejs/9.0.1/firebase-firestore.js'

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

getDocs(collection(db, 'games'))
  .then((querySnapshot) => {
    const gamesListItems = querySnapshot.docs.map(doc => {
      const { title, developedBy, createdAt } = doc.data() 

      return `<li class="my-5">
        <h5>${title}</h5>

        <ul>
          <li>Desenvolvidor por ${developedBy}</li>
          <li>Adicionado no banco em ${createdAt.toDate()}</li>
        </ul>
      </li>`
      })
      .join('')
    
    gamesList.innerHTML = gamesListItems
  })
  .catch((error) => {
    console.log(error)
  })
