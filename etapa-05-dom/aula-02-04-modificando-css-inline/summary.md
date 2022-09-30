# Modificando css inline

É possível alterar o conteúdo de uma tributo usando 
o setAttribute, porém esse método sobreescreve o valor anterior.
Ou seja, não podemos adicionar um valor a um atributo. Podemos
apenas setar um novo.

Para adicionar um novo estilo inline a um elemento HTML do DOM.
Usaremos a propriedade style.

```js
console.log(mainTitle.style)
```

style é uma propriedade que tem o seu valor um objeto. Esse objeto
possúi uma propriedade para cada estilo.

Por exemplo

`element.style.backgroundColor = 'red'`

Altera a cor do background do elemento para red.

Esse objeto é uma abstração de todos os estilos possívels que um
elemento HMTL pode ter. Essa propriedade setada nesse objeto
style, é passada como atributo para o lemento. Ou seja
será usado como CSS inline.

`element.color = 'blue'` fará com que o elemento fique com a cor
azul e tenha o seu css inline alterado. Agora ele terá a string

```html
<element style="background-color: blue; color: red;"> </element>
```

Perceba que a propriedade background-color não foi setada,
ela já existia antes. Ou seja o javascript vai pegar
todas as propriedades desse objeto style, e vai colocar no
css inline do elemento.

**No javascript para propriedades css ao invés de hífen usamos camelCase**

Exemplo:

Para alterar a propriedade css `font-size`.
No javascript acessaremos por meio de `element.style.fontSize = '50px'`.