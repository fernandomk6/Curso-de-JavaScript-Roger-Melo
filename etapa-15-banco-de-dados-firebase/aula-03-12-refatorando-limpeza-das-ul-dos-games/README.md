# Refatorando a limpeza das ULs dos games

O método docChanges() do querySnapshot retorna um array com todos ou
com apenas um documento(s) com uma propriedade type que armazena a ultima ação feita no documento.

- type: added -> já estava adicionado no banco
- type: removed -> Esse item foi removido agora do banco
- type: modified -> Esse item foi adicionado ou modificado agora no banco

Técnica para evitar limpar a UL diretamente como `EL.innerHTML = ''`

```js
const renderGamesList = (querySnapshot) => {
  if (querySnapshot.metadata.hasPendingWrites) {
    return
  }

  querySnapshot.docChanges().forEach(docChange => {
    if (docChange.type === 'removed') {
      const gameItemToRemove = gamesList.querySelector(`li[data-id="${docChange.doc.id}"]`)
      gameItemToRemove.remove()
      return 
    }

    const gameItemElement = buildGameItemElement(docChange)
    gamesList.append(gameItemElement)
  })
}
```

docChanges armazena um array com objetos. Quando a pagina é carregada pela primeira vez,
ela armazena todos os docs que estão adicionados no banco.
Quando um doc é adicionado ou modificado, ela armazenará um array com **apenas um objeto** com a propriedade
doc que é uma referencia ao doc adicionado ou modificado no banco e também uma
propriedade type, que armazenará o tipo de mudança, no caso será "modified".

Você pode usar isso para adicionar esse doc na UL que já contem todos os docs.

Quando um doc é deletado do banco, o evento querySnapshot é acionado, e a docChanges armazenará
um array, com um objeto contendo o doc removido e também um type, que no caso será "removed".
Você pode usar os dados desse doc removido para remover apenas esse LI da sua UL.