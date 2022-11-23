# Firestore crud

## Estrutura básica do firebase

- Collection 
- Document
- Field

- Collection

Uma lista de documents. Um container para todos os documents. É como
uma table para bancos SQL.

- Document

É um objeto semelhante a objeto javascript. Um document é formado por 
fields e cada fiend possúi um valor, e esse valor é um tipo de dado como string ou number entre
outros. É semelhante a um registro em uma tabela para bancos SQL.

- Field

São campos. Propriedades de um document. Cada field tem um valor e esse valor possúi
um tipo de dado (veja os tipos de dados permitidos no firestore).

## Conectando o projeto firebase a aplicação frontend

*Nesse tutorial será usado CDN por motivos didáticos*

1. Crie um app no projeto do firebase
2. Importe o firebase na aplicação

```js
// import das funções dos serviços usados
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-app.js"

// configuração inicial com base nas informações do projeto no firebase
const firebaseConfig = {
  apiKey: "AIzaSyAAiOndsiORYtRUNX7d97dr2_FUVI7m7ys",
  authDomain: "firestore-crud-cjrm.firebaseapp.com",
  projectId: "firestore-crud-cjrm",
  storageBucket: "firestore-crud-cjrm.appspot.com",
  messagingSenderId: "605476002290",
  appId: "1:605476002290:web:194d5af8791efea5f2736b",
  measurementId: "G-031FJLB0CT"
}

// inicialização do app firebase
const app = initializeApp(firebaseConfig)
```

3. Importe o firestore na aplicação

```js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-app.js"
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.0.1/firebase-firestore.js'

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

// Qualquer função get importada no firebase não precisa passar o app como argumento, mas
// nesse tutorial será usado para deixar explícito que o get faz referência ao app.
```

Apartir desse momento todas as leituras e escrita no banco, serão feitas através
da const db.

## Lendo dados do firestore

### Obtendo todos os docs de uma collection

```js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-app.js"
import { getFirestore, collection, getDocs } from 'https://www.gstatic.com/firebasejs/9.0.1/firebase-firestore.js'

const firebaseConfig = {
  // ...
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

getDocs(collection(db, 'games'))
  .then((querySnapshot) => {
    querySnapshot.docs.forEach((doc) => {
      console.log(doc.data())
    })
  })
  .catch((error) => {
    console.log(error)
  })
```

querySnapshot é uma representação de uma consulta feita, no momento em que é
feita. Pode se traduzir como uma fotografia dos dados solicitados.
O querysnapshot é um objeto que possúi uma representação dos dados daquele
momento.

Entendendo o que cada dunção faz:

- getDocs

Retorna uma promise que resolve com um objeto que possui a propriedade docs que é um array
de objeto, e cada objeto desse array possui um método doc que retorna um objeto
com os fields e values do documento. Espera que seja passado como argumento, uma referencia
para a collection onde os documents serão buscados.

Em resumo: retorna uma promise que resolve com um objeto que contém todos os documents.

- collection

Uma função que retorna uma referencia para uma collection. Espera receber como argumento
uma referencia para o banco de dados firestore e uma string com o nome da collection.

- doc.data()

Retorna um objeto com os fields e values do doc.

