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

## Salvando informações no firestore

1. Especifique em qual collection as informações devem ser salvas

Para especificar, primeiro precisamos obter uma referência do collection.

```js
const collectionGames = collection(db, 'games')
```

2. Use a função do SDK do firestore chamada addDoc

```js
import { ..., addDoc } from '...'

addDoc(collectionGames, {
  // ... representação do objeto a ser adicionado na collection
  // O id é criado automaticamente
})
```

*Diferrenças entre addDoc e setDoc*

setDoc adiciona ou altera um documento.
Ao usar setDoc o id do doc, precisa ser especificado.

addDoc é recomentado para adicionar novos documentos.
setDoc é recomendado para alterações.

3. Timestamps no cliente side

Nunca use `new Date()` para armazenar o timestamp no banco, pois o new Date() irá gerar
o timestamp com base na data do relogio do cliente e não do servidor. E o relogio do
cliente pode estar errado e isso causará inconsistencia em seu banco de dados.

Para obter otimestamp com base na hora do servidor, importe a função `serverTimestamp`.

```js
import { ..., serverTimestamp } from '...'

  addDoc(collectionGames, {
    title,
    developedBy: developer,
    createdAt: serverTimestamp() // retorna o timestamp atual do servidor
  })
```

A função addDoc, retorna uma promise que resolve com uma referência ao doc que foi adicionado.

```js
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
```

## Deletando informações do firestore

1. Obter a referencia do doc a ser deletado.

```js
import { ..., doc } from '...'
doc(db, 'games', 'rdwe1JBzou26U7c0wra2') // db, collectionName, id of target doc
```

2. Usar a função que deleta doc do firestore

```js
import { ..., doc, deleteDoc } from '...'
deleteDoc(doc(db, 'games', 'rdwe1JBzou26U7c0wra2'))
```

deleteDoc retorna uma promise.

**Se um doc é deletado do banco, não é possível recupera-lo**.

Lembre-se de manipular também o DOM, após fazer uma deleção.

O correto é utilizar listener de tempo real do firestore.
Veremos mais sobre listener em tempo real mais adiante.

## Modificando informações no firestore

1. Obter a referência do document que deve ser modificado.

```js
doc(db, 'games', 'ncHWU0z7z0CyyAi2jGRm') // db, collection name, id do doc
```

2. Use a função updateDoc

Essa função deve ser usada quando queremos atualizar um ou mais
fields de um document.

```js
import { ..., doc, updateDoc } from '...'
updateDoc(theLastOfUsRef, {
  title: 'The Last Of Us Part III'
})
```

updateDoc espera que sejam passados os argumentos, referencia do doc a ser
atualizado, e um objeto contendo os campos a serem atualizados. As propriedades
devem dar match com os fields. Caso não deem match, um novo field será criado
com o nome e valor da propriedade.

updateDoc retorna uma promise.

```js
const theLastOfUsRef = doc(db, 'games', 'ncHWU0z7z0CyyAi2jGRm')

updateDoc(theLastOfUsRef, {
  title: 'The Last Of Us Part II'
})
  .then((result) => {
    console.log('Game atualizado', result) // result is undefined
  })
  .catch((error) => {
    console.log(error)
  })
```

- Mais de uma propriedade pode ser atualizada ao mesmo tempo. Basta
passar mais propriedades no objeto segundo argumento de updateDoc.

- Se inserir uma propriedade a ser atualizada e essa propriedade não
corresponder a um field existente, o field será criado.

Existe uma outra forma de atualizar dados de um doc que é usando
a função setDoc.

A setDoc pode ser usada para criar ou para sobreescrever um doc.

```js
const theLastOfUsRef = doc(db, 'games', 'ncHWU0z7z0CyyAi2jGRm')

setDoc(theLastOfUsRef, {
  title: 'The Last Of Us Part II'
})
  .then((result) => {
    console.log('Game atualizado', result)
  })
  .catch((error) => {
    console.log(error)
  })
```

Quando o id passado para a função doc não existir, um objeto doc novo com esse id
é retornado. Ao referenciar esse doc novo na setDoc, esse doc será inserido no banco,
com os fields que foram passados como propriedade do segundo argumento de setDoc.

```js

// Se não existir nenhum doc com id 're' na collection game
// um novo doc será retornado pela função doc.
const re3 = doc(db, 'games', 're')

// Como re3 é um doc que não existe na collection o doc é adicionado
// no banco com os fields que foram inseridos no objeto que é segundo 
// argumento.
setDoc(re3, {
  title: 'REsident Evil 3',
  developedBy: 'Capcom'
})
  .then((result) => {
    console.log('Game atualizado', result)
  })
  .catch((error) => {
    console.log(error)
  })
```

**Importante**

Quando o setDoc é usado em um objeto que já existe, todos os fields do
doc no banco serão sobrescritos pelas propriedades informadas no objeto
passado como segundo argumento.

Mas, é possível evitar esse comportamento.

Para evitar que os fields do doc sejam sebrescritos pelas propriedades
do objeto passado como segundo argumento, um terceiro argumento deve
ser informado na setDoc. Um objeto com a propriedade merge com o valor true.

```js
const re3 = doc(db, 'games', 're')

setDoc(re3, {
  title: 'Resident Evil 3'
}, { merge: true }) // terceiro argumento que não permite sobrescrever apenas atualizar
  .then((result) => {
    console.log('Game atualizado', result)
  })
  .catch((error) => {
    console.log(error)
  })
```

Merge significa fundir. Isso significa que todas as informações do segundo argumento,
serão fundidas ao doc existente.

Quando usar o updateDoc?

Quando quiser modificar um doc sem alterar todos os fields.
Porém ela não criará o doc caso o doc não exista.

Se não quer que o doc seja criado, a updateDoc é adeguado.

Já com a setDoc, é possível criar ou modificar um doc, sobrescrevendo todos os fields
ou apenas alguns.

Se não tem certeza se o doc existe e ou se não quer sobrescrever os fields, pode usar
o setDoc com o merge.

