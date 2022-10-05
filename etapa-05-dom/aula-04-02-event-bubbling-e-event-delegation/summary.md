# Event bubbling e event delegation

# Event bibbling

Ao clicar em um elemento que está dentro de outro elemento.
Você está clicando nos dois elementos ao mesmo tempo.

Ou seja, você irá disparar 2 eventos de cliques.

Dado a seguinte estrutura HTML:

```html
  <div class="container">
    <span>Container</span><br>
    <article>
      <span>Article</span><br>
      <button>.container / article</button>
      <section>
        <span>Section</span><br>
        <button>.container / article / section</button>
      </section>
    </article>
  </div>
```

Ao clicar no button `.container / article / section` ocorrerão
os sequintes eventos:

```log
app.js:19 Clicou no buttonSection
app.js:21 Clicou no section
app.js:20 Clicou no article
app.js:22 Clicou no container
app.js:17 Clicou no body
```

Perceba que todos os elementos 'pais' foram clicados também. Esse é o event bibbling.

**Ao clicar em um elemento você clica também no elemento pai deste**.

## Evitando o event bubbling.

Caso queira que um evento não seja propagados para os elementos
pais do elemento target. Use o método `event.stopPropagation`
após a execução do evento no elemento target.

```js
buttonSection.addEventListener('click', event => {
  console.log('Clicou no buttonSection')
  event.stopPropagation()
})
```

Dessa forma quando esse butão for clicado, a propagação do evento será
interrompida quando o método `stopPropagation` for executado.

## Event Delegation

Quando deve ser usado?

Quando você precisar que uma mesma ação seja feita para vários elementos.
Em uma aplicação de médio e grande porte, iterar sobre todos os elementos
X, e então setar uma ação para cada um desses elementos, pode ser muito
custozo. 

Também deve ser usado quando queremos colocar eventos em elementos
dinâmicos. Os quais não teremos acesso a setar o evento diretamente no elemento.

Nesses casos é melhor usar event delegation.