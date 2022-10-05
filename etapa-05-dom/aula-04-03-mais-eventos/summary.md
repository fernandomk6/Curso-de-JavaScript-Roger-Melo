# Mais eventos

Aqui veremos alguns eventos do DOM

## Copy Event

Esse evento é acionado quando uma copia de texto no elemento especificado
é feita.

```js
paragraph.addEventListener('copy', () => {
  console.log('texto copiado')
})
```

## Evento que ocorre quando o usuário move o mouse dentro do elemento

```js
box.addEventListener('mousemove', event => {
  console.log(event)
})
```

Esse evento acontece quando o mouse se move sobre o elemento especificado.
No objeto event, tem algumas propriedades do mouse, como sua cordenada em pixel.