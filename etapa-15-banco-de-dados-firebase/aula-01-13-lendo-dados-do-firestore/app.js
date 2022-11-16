import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.1/firebase-app.js'
import { getFirestore, collection, getDocs } from 'https://www.gstatic.com/firebasejs/9.0.1/firebase-firestore.js'

const firebaseConfig = {
  apiKey: 'AIzaSyC6htPCKnJ6N9LL6CJdMAuiqRO7dprlVIQ',
  authDomain: 'testing-firebase-b6af8.firebaseapp.com',
  projectId: 'testing-firebase-b6af8',
  storageBucket: 'testing-firebase-b6af8.appspot.com',
  messagingSenderId: '1090756919742',
  appId: '1:1090756919742:web:d5ec9febb0196f3021b9ef',
  measurementId: 'G-EE9B36LEQY'
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

getDocs(collection(db, 'games'))
  .then(querySnapshot => {
    const gamesLis = querySnapshot.docs.reduce((accumulator, doc) => {
      const { title, developedBy, createdAt } = doc.data()  

      accumulator += `
        <li class="my-4">
          <h5>${title}</h5>
          
          <ul>
            <li>Desenvolvido por ${developedBy}</li>
            <li>Adicionado no banco em ${createdAt.toDate()}</li>
          </ul>
        </li>`

      return accumulator
    }, '')

    const gamesList = document.querySelector('[data-js="games-list"]')
    gamesList.innerHTML = gamesLis
  })
  .catch(error => {
    console.log(error)
  })

