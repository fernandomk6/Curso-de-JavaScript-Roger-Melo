# Não use innerHTML

Inner HTML permite ataques XSS (cross-site script). Como o innerHTML
parseia uma string para elementos HTML, uma string maliciosa pode ser
adicionado em seu HTML. Como por exemplo 

```js
DOMElement.innerHTML = `
  <img src="x" onerror="console.log('te peguei')"></img>
`
```

A seguinte string quando renderizada como HTML iria tentar renderizar uma imagem que tenha
o sourche "x". Como "x" naão é um source válido um erro foi gerado. Quando o erro foi gerado
o evento onerror foi disparado, iniciando o ataque.

O que pode ser usado ao invés de innerHTML?

Use a combinação de document.createElement e setAttributes e etc. E textContent.

Use também sempre uma lib de sanitização, como a DOMPurify para lidar com strings 
nas quais você não tem controle como por exemplo inputs ou dados vindo de
um request externo. Satinite todas as strings, para renderização e para gravações
no banco.

Resumindo substitua innerHTML por:

- document.createElement
- textContent
- Lib de sanitização

**Toda instring a qual você não tem controle, deve ser sanitizada.**

**Manipulação do DOM apenas com createElement**

**TextContent para inserir nós textos em elementos HTML**
