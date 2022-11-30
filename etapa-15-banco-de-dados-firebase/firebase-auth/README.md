# Instruções para implementação

[Link](https://github.com/roger-melo-treinamentos/firebase-auth)

## Anotações sobre materialize CSS e JS

### Cores

#### Backgrounds `

```html
<div class="card-panel teal lighten-2">This is a card panel with a teal lighten-2 class</div>
```

teal é a cor, lighten-1 é o clereamento podendo ir até 5, sendo o 5 o mais claro.
Também é possível escurecer usando a class darken-1, que vai até o 4 em
escurecimento, sendo 4 o mais escuro.

#### Text

Para aplicar cor no texto basta colocar `-text` depois depois da cor e antes do clareamento
ou escurecimento

```html
<div class="card-panel">
  <span class="blue-text text-darken-4">This is a card panel with dark blue text</span>
</div>

<div class="card-panel">
  <span class="blue-text text-lighten-5">This is a card panel with dark blue text</span>
</div>
```

### Grids

#### Container

A classe container é usada para centralizar um conteúdo

```html
<body>
  <div class="container">
    <!-- Page Content goes here -->
  </div>
</body>
```

#### 12 Columns grid

A grid padrão possúi 12 colunas, independentemente do tamanho da tela, 
haverá 12 columnas e cada coluna terá o mesmo tamanho.

Cada col div possúi um padding bacanal.

```html
<div class="row">
  <div class="col s1">1</div>
  <div class="col s1">2</div>
  <div class="col s1">3</div>
  <div class="col s1">4</div>
  <div class="col s1">5</div>
  <div class="col s1">6</div>
  <div class="col s1">7</div>
  <div class="col s1">8</div>
  <div class="col s1">9</div>
  <div class="col s1">10</div>
  <div class="col s1">11</div>
  <div class="col s1">12</div>
</div>

<div class="row">
  <div class="col s6">6 columns</div>
  <div class="col s6">6 columns</div>
</div>
```

*s1 significa 1 coluna em tela pequena (s de small)*

#### Rows

As columnas vivem dentro das rows (linhas).
Uma div com a class col deve estar dentro de uma div com a class row.
**Para que o grid funcione as cols devem estar dentro de uma div com a classe row**.

**As classes row e col devem ser usadas em divs**.

```html
<div class="row">
  <div class="col s12">This div is 12-columns wide on all screen sizes</div>
  <div class="col s6">6-columns (one-half)</div>
  <div class="col s6">6-columns (one-half)</div>
</div>
```

#### Offsets

Offset é uma coluna ou mais que ficarão em branco, uma coluna de espaçamento.
Essa coluna sempre será adicionada antes das colunas especificadas em `s5` 5 podendo
ser qualquer numero válido para colunas.

```html
<div class="row purple">
  <div class="col s5 red">Essa div possúi 5 colunas</div>
  <div class="col s5 offset-s2 yellow">Essa outra div também possúi 6 colunas</div>
</div>
```

Nesse exemplo acima a row terá uma div que ocupará 5 colunas preenchidas com o 
texto `Essa div possúi 5 colunas`.
E também terá outra div que ocupará 5 colunas e terá 2 colunas de offset.
Ou seja seu conteúdo estará dentro de 5 colunas e existirar 2 colunas antes desse
conteúdo que estarão vazias (oofset). O offset é uma ou mais colunas vazias
antes da div.

```html
<div class="row">
  <div class="col s12">
    <span class="flow-text">This div is 12-columns wide on all screen sizes</span>
  </div>
  <div class="col s6 offset-s6">
    <span class="flow-text">6-columns (offset-by-6)</span>
  </div>
</div>
```

Para compensar, simplesmente adicione offset-s2 à classe onde s significa o prefixo 
de classe da tela (s = pequeno, m = médio, l = grande) e o número depois é o número 
de colunas pelas quais você deseja compensar.

screen-cçass-prefix: *s = small, m = medium, l = large*

#### push em pull (puxar e empurrar)

- pull empurra para a esquerda
- push empurra para a direita

Push e pull movem a coluna pelo numero passado para `push-s1 ou pull-s1` podendo
esse 1 ser qualquer número válido de colunas. É como um possícionamento absulute dentro
da linha, apenas na horizontal.

```html
  <div class="row blue">
    <div class="col s3 push-s1 green">
      <span class="flow-text">div 1</span>
    </div>
    <div class="col s3 pull-s1 yellow">
      <span class="flow-text">div 2</span>
    </div>
  </div>
```

#### Criando leiaute

##### sections

A classe de seção é usada para preenchimento simples superior e inferior. 
Basta adicionar a classe de seção aos seus divs contendo grandes blocos de conteúdo.

##### divider

É uma linha horizontal que irá dividir as suas sections.

Os divisores são linhas de 1 pixel que ajudam a dividir seu conteúdo. 
Basta adicionar o divisor a um div entre o seu conteúdo.

```html
<div class="divider"></div>
<div class="section">
  <h5>Section 1</h5>
  <p>Stuff</p>
</div>
<div class="divider"></div>
<div class="section">
  <h5>Section 2</h5>
  <p>Stuff</p>
</div>
<div class="divider"></div>
<div class="section">
  <h5>Section 3</h5>
  <p>Stuff</p>
</div>
```

##### Exemplo de tabela de promoções 3 colunas

```html
<div class="row">
  <div class="col s4">
    <div>Imagem</div>
    <h4>Título</h4>
    <p>Texto</p>
  </div>
  <div class="col s4">
    <div>Imagem</div>
    <h4>Título</h4>
    <p>Texto</p>
  </div>
  <div class="col s4">
    <div>Imagem</div>
    <h4>Título</h4>
    <p>Texto</p>
  </div>
</div>
```

Você pode ver como é fácil criar layouts usando o sistema de grade. 
Apenas lembre-se de garantir que os números das colunas somem 12 para um 
layout uniforme.

```html
<!-- Navbar goes here -->

<!-- Page Layout here -->
<div class="row">

  <div class="col s3">
    <!-- Grey navigation panel -->
  </div>

  <div class="col s9">
    <!-- Teal page content  -->
  </div>

</div>
```

O exemplo acima cria uma divisão na tela, um "sidebar" de 3 colunas e o conteudo
de 9 colunas.

##### Criando leiaute responsivos

Acima, mostramos como fazer o layout de elementos usando nosso sistema de grade. 
Agora, mostraremos como projetar seus layouts para que tenham uma ótima aparência 
em todos os tamanhos de tela.

| Screen Sizes | | | | | 
| --- | --- | --- | --- | --- |
| | Mobile Devices <= 600px | Tablet Devices > 600px | Desktop Devices > 992px | Large Desktop Devices > 1200px | 
| Class Prefix| .s | .m	| .l	| .xl | 
| Container Width	| 90%	| 85%	| 70%	| 70% | 
| Number of Columns | 12	| 12 | 12 |	12 | 

*Class Prefix for screens:	.s (small)	.m (medium) .l (large)	.xl (extra-large)*

###### Adicionando responsividade as linhas

Nos exemplos anteriores, definimos apenas o tamanho para telas pequenas usando "col s12". 
Isso é bom se quisermos um layout fixo, pois as regras se propagam para cima. 
Ao dizer apenas s12, estamos essencialmente dizendo "col s12 m12 l12". 
Mas, definindo explicitamente o tamanho, podemos tornar nosso site mais responsivo.

```html
<div class="row">
  <div class="grid-example col s12"><span class="flow-text">I am always full-width (col s12)</span></div>
  <div class="grid-example col s12 m6"><span class="flow-text">I am full-width on mobile (col s12 m6)</span></div>
</div>
```

O código acima é uma linha que contem 2 colunas. A primeira div ocupa 12 colunas em telas pequenaas (s12).
A segunda div ocupa 12 colunas em telas pequenas (s12) e 6 espaços em telas médias (m6).

Dessa forma você consegue montar um row completamente responsivo.

###### Sidebar responsiva

Layout de navegação lateral responsivo
Neste exemplo abaixo, pegamos o mesmo layout acima, mas o tornamos responsivo 
definindo quantas colunas o div deve ocupar em cada tamanho de tela. Tente redimensionar 
seu navegador e observe a mudança de layout abaixo.

```html
<!-- Navbar goes here -->
<!-- Page Layout here -->
<div class="row">
  <div class="col s12 m4 l3 xl1 blue"> 
      div 1
  </div>
  <div class="col s12 m8 l9 xl11 red"> 
      div2
  </div>
</div>
```

- `col s12 m4 l3 xl1 blue`: em telas pequenas ocupará 12 colunas, em telas médias 4,
em telas grandes 3 e em telas extra grande ocupará 1 coluna.

##### Mais exmplos de responsividade

```html
<div class="row">
  <div class="col s12"><p>s12</p></div>
  <div class="col s12 m4 l2"><p>s12 m4</p></div>
  <div class="col s12 m4 l8"><p>s12 m4</p></div>
  <div class="col s12 m4 l2"><p>s12 m4</p></div>
</div>
<div class="row">
  <div class="col s12 m6 l3"><p>s12 m6 l3</p></div>
  <div class="col s12 m6 l3"><p>s12 m6 l3</p></div>
  <div class="col s12 m6 l3"><p>s12 m6 l3</p></div>
  <div class="col s12 m6 l3"><p>s12 m6 l3</p></div>
</div>
```
