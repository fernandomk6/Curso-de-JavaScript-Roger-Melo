# Firestore Listeners em tempo real

Como fazer com que, quando houver uma alteração no banco, as aplicações que estão
conectadas ao banco, sejam atualizadas? Ou seja, não será necessário recarregar a página
para poder fazer a atualização na interface.

Qualquer mudança feita no banco, irá atualizar a interface de todos os apps que
usam esse banco de dados.

*A função getDocs deve ser usada para obter os dados apenas uma única vez*.

Para obter os dados sempre que houver uma mudança no banco você deve usar
a função **onSnapshot** do sdk do firestore.

Para isso iremos setar um *real time listener* ou escutador em tempo real.

## Setando um real time listener

1. Obter a referencia da collection que deverá ser escutada.

```js
import { initializeApp, getFirestore, onSnapshot } from '...'

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const collectionGames = collection(db, 'games')

onSnapshot(collectionGames, (querySnapshot) => {
  console.log(querySnapshot)
})
```

A função onSnapshot espera receber como argumento, a collection que será escutada,
e um callback, que será executado sempre que alguma alteração for feita nessa collection.

Será passado para o callback como argumento, um snapshot, esse snapshot é uma representação
da collection já com as atualizações feitas.

Esse callback será executado sempre que alguma alteração for feita na collection referenciada
no primeiro argumento.

Quando a onSnapshot é executada pela primeira vez, o callback é executado e o argumento querySnapshot
recebe uma representação da collection.

## O mais importante sobre o onSnapshot

O callback passado como segundo argumento, será invocado **imediatamente**,
após a chamada de qualquer função de escrita no banco. As funções de escrita
retornam promises, e essas promises possuem um then ou await que desencapsulam 
o valor da promise. Porém o listener é acionado sempre que a função é executada,
e não resolvida. Ou seja o callback do onSnapshot será executado antes
da resolução da promise. Caso na resolução da promise, alguma alteração seja feita
no banco, o listener será acionado novamente.

```js
onSnapshot(collection, () => { 
  console.log('onSnapshot callback executed') 
})

addDoc()
  .then(() => {
    console.log('promise resolved')
  })
  .catch()

// onSnapshot callback executed (first read execution)
// onSnapshot callback executed (immediatly call after invocation of a addDoc)
// promise resolved (addDoc promise resolve)

// Caso no callback do then fosse executado algum código que 
// alterasse a collection o evento seria disparado novamente.
```

Add, update, delete são operações de escrita no banco.

Quando uma operação de escrita é invocada, imediatamente após essa invocação,
o onSnapshot é disparado, já contendo as alterações, porém, as anterações
ainda não foram executadas no banco. Essa feature se chama "compensasão de latência".

Quando uma operação de escrita é executada no código, o listener é executado
com as novas informações, **antes** que as informações sejam enviadas para o banco.

## Parando escutador em tempo real

A função onSnapshot retorna uma função 'unsubscribe' que quando executada, 
irá desabilitar a escuta em tempo real.

```js
const unsubscribe = onSnapshot(collectionGames, (querySnapshot) => {
  // ...
})

buttonUnsub.addEventListener('click', unSubscribe)
```