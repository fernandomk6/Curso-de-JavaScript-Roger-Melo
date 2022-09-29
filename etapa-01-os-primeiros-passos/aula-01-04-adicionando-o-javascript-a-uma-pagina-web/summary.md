# Adicionando o JavaScript a uma página web

## Onde colocar o javascript?

O javascript pode ser adiciona em qualquer lugar dentro da tag
head e em qualquer lugar dentro da tag body.

Colocar seu bloco javascript no head, pode ocasionar problemas
de performance. Quase sempre será melhor colocar seu
bloco de código javascript como última tag dentro da tag body.

### Exemplo de Bloco de código javascript

```html
<script>
    alert('hello world')
</script>
```

Caso você tenha muito código javascript, é interessante externalizar seus scripts
em um arquivo separado do seu HTML (assim como é feito com css) e apenas linkar esse
arquivo a sua página HTML.

Como linkar um arquivo externo de javascript no seu HTML
```html
<script src="./app.js"></script>
```

