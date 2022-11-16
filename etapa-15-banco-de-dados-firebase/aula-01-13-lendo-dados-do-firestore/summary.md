# Lendo dados do firestore

Código base para ler todos os docs de uma collection específica.

```js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-app.js"
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-firestore.js"

const firebaseConfig = {
  // ...
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

getDocs(collection(db, 'games'))
  .then(querySnapshot => {
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data())
    })
  })
  .catch(error => {
    console.log(error)
  })

```

## O que é um querySnapshot

A função getDocs retorna uma promise que resolve com o valor querySnapshot

QuerySnapshot é uma fotografia de como o collection especificado está, no momento
que a promise é resolvida. E por fotografia eu quero dizer representação.
Ou seja, querySnapshot é uma representação do collection games no momento em que o request
foi executado.

## Obtendo os docs apartir de um querySnapshot

Cada doc contém um método data que retorna os dados do doc.

A primeira forma é usando o forEach método do querySnapshot (Esse não é o forEach do constructor Array) 

```js
querySnapshot.forEach((doc) => {
  console.log(doc.data())
})
```

A segunda forma é, apartir do array docs, que é propriedade do objeto querySnapshot,
encadear um método forEach (Esse é o método nativo do construtor Array)

```js
querySnapshot.docs.forEach(doc => {
  console.log(doc.data())
})
```

## Objetos timestamp no firestore

Cada objeto do tipo timestamp tem um método toDate que converte o timestamp para um objeto
de data javascript.

