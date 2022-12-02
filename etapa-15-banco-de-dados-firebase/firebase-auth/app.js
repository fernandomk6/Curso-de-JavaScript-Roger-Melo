import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithRedirect } from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js'
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js'

const firebaseConfig = {
  apiKey: 'AIzaSyAAiOndsiORYtRUNX7d97dr2_FUVI7m7ys',
  authDomain: 'firestore-crud-cjrm.firebaseapp.com',
  projectId: 'firestore-crud-cjrm',
  storageBucket: 'firestore-crud-cjrm.appspot.com',
  messagingSenderId: '605476002290',
  appId: '1:605476002290:web:194d5af8791efea5f2736b',
  measurementId: 'G-031FJLB0CT'
}

const app = initializeApp(firebaseConfig)
const auth = getAuth()
const provider = new GoogleAuthProvider()

const loginBtn = document.querySelector('#login-btn')

const login = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result)
      const token = credential.accessToken
      const user = result.user
      console.log(user)
      console.log('logou')
    }).catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      const email = error.customData.email
      const credential = GoogleAuthProvider.credentialFromError(error)

      console.log({
        errorCode,
        errorMessage,
        email,
        credential,
        error
      })

      console.log('erro ao logar')
    })
}

const init = () => {
  M.AutoInit()
}

loginBtn.addEventListener('click', login)

init()