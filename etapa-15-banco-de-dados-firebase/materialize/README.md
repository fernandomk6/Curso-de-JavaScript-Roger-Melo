# Materialize

## CSS

### Cor

#### Uso

##### Cor de fundo

```html
<div class="card-panel teal lighten-2">This is a card panel with a teal lighten-2 class</div>
```

teal é a cor, lighten-1 é o clereamento podendo ir até 5, sendo o 5 o mais claro.
Também é possível escurecer usando a class darken-1, que vai até o 4 em
escurecimento, sendo 4 o mais escuro.

##### Cor de texto

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

**As rows devem estar dentro de containers**

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

#### Criando leiaute responsivos

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

### Helpers

#### Alignment (alinhamento)

##### Vertical Align

Você pode facilmente verticalizar centralmente coisas por adicionar a 
class `valign-wrapper` ao container que segura os itens que você quer 
alinhar verticalmente.

Essa class centraliza verticalmente todos os seus filhos.

```js
<div class="valign-wrapper">
  <h5>This should be vertically aligned</h5>
</div>
```

##### Text align

Essas classes são para alinhar horizontalmente o conteúdo: 

- `left-align`
- `right-align`
- `center-align`

##### Flutuações rápidas

Faça as coisas flutuarem rapidamente adicionando a classe à `left` ou `right` do elemento. 
!important é usado para evitar problemas de especificidade.

**Não funciona dentro de containers flex**.

```html
<div class="left">...</div>
<div class="right">...</div>
```

##### Escondendo e mostrando conteúdo

Podemos facilmente mostrar ou esconder contaúdo baseado no tamanho da tela.

| Class | Screen Range |
| --- | --- |
| .hide |	Hidden for all Devices |
| .hide-on-small-only |	Hidden for Mobile Only |
| .hide-on-med-only |	Hidden for Tablet Only |
| .hide-on-med-and-down |	Hidden for Tablet and Below |
| .hide-on-med-and-up |	Hidden for Tablet and Above |
| .hide-on-large-only |	Hidden for Desktop Only |
| .show-on-small | Show for Mobile Only |
| .show-on-medium |	Show for Tablet Only |
| .show-on-large | Show for Desktop Only |
| .show-on-medium-and-up | Show for Tablet and Above |
| .show-on-medium-and-down | Show for Tablet and Below |

```html
<div class="hide-on-small-only"></div>
```

#### Formating

Essas classes ajudam a formatar vários conteúdos em suas páginas.

##### Truncation

Para truncar longas linhas de texto em reticências, adicione a classe truncate 
à tag que contém o texto. Veja um exemplo abaixo de um cabeçalho sendo truncado 
dentro de um cartão.

Texto truncado ele não vai quebrar linha se a tela for pequena e não caber todo
o conteúdo. Ao invés de quebrar a linha aparecerá uma reticências.

```html
<div class="card-panel"> 
  <h4 class="truncate">This is an extremely long title that will be truncated</h4>
</div>
```

##### Hover

Adiciona a classe `hoverable` ao elemento para que ele tenha hover.

```html
<div class="card-panel hoverable"> Hoverable Card Panel</div>
```

### Transições

#### Escalas

Use esta escala dentro e fora dos elementos. Certifique-se de adicionar a 
classe de transição base `scale-transition`. Em seguida, adicione a classe `scale-out` 
para reduzir o elemento até que ele fique oculto. Para iniciar algo como oculto, 
adicione a classe `scale-out` primeiro e, em seguida, adicione a classe `scale-in` para 
dimensionar o elemento até que seja mostrado.

```html
<button id="btn">Click para aparecer a parada</button>

<a id="scale-demo" href="#!" class="btn-floating btn-large scale-transition scale-out">
  <i class="material-icons">add</i>
</a>
```

```js
const button = document.querySelector('#scale-demo')
const btnShow = document.querySelector('#btn')

btnShow.addEventListener('click', () => {
  button.classList.add('scale-in')
})

button.addEventListener('click', () => {
  button.classList.remove('scale-in')
})
```

### Shadows 

Para adicionar sombra a um elemento adicione a class `z-depth-1`. Sendo 1 o nível da sembra, podendo
ir de 0 a 5.

```html
<p class="z-depth-1">z-depth-1</p>
```

### Tables 

As tags padrão de table do HTML já são estilizadas quando usamos o materialize.

Porém podemos adionar estilos diferentes usando as seguintes classe.

#### Striped Table

Adicione a classe ``class="striped"`` para a table tag para deixar a tabela listrada.

#### highlight 

Adicione a class `highlight` para a table tag para que a tabela tenha hover nas suas linhas.

#### centered

Adicione a class `centered` para a table tag para que a tabela tenha o seu texto centralizado.

#### Responsive table

Adicione a class `responsive-table` para a tag table para que a tabela seja responsiva.

### Pulse

Chame a atenção para seus botões com as pulsações.
Basta adicionar a class `pulse` em qualquer botão que ele pulsará.

`pulse` não funciona em botões com a classe `disabled`.

Essa class so funciona em botões flutuantes (`btn-floating`)

```html
<a class="btn-floating pulse"><i class="material-icons">menu</i></a>
<a class="btn-floating btn-large pulse"><i class="material-icons">cloud</i></a>
<a class="btn-floating btn-large cyan pulse"><i class="material-icons">edit</i></a>
```

## Components

### Badges

Os badges são formas de notificar o usuário geralmente usada para mostrar números.
Um badge flutua a direita do container.

```html
<ul>
  <li>
    fernando
    <span class="new badge">1</span>
  </li>
  <li>
    helenice
    <span class="badge">4</span>
  </li>
</ul>
```

Perceba que o badge é armazenado dentro de um span que está dentro de um container.
Esse span será flutuado a direita.

A class `new` faz com que o badge receba um destaque de notificação não vista.

#### Options

##### Texto customizado

É possível customizar as legendas de uma badge.

```html
<span class="new badge" data-badge-caption="custom caption">4</span>
<span class="badge" data-badge-caption="custom caption">4</span>
```

O `data-badge-caption` é a mensagem que aparecerá atrás do conteúdo textual da 
span que tenha a class `badge`.

##### Cor

É possível customizar a cor do badge quando ele tem também a class `new`.

```html
<span class="new badge red">4</span>
<span class="new badge blue">4</span>
```

### Buttons

Existem 3 tipos principais de botões descritos no material design. 

1. O botão elevado (raised button):

É um botão padrão que significa ações e procura dar profundidade a uma página quase plana. 

2. O botão de ação circular flutuante (floating circular button):

Destina-se a funções muito importantes. 

3. Os botões planos (Flat buttons):

Geralmente são usados em elementos que já possuem profundidade, como cartões ou modais.

#### Raised

Um button raised é uma tag button que tem a class `btn`. Esse é o botão padrão.

```html
<a class="waves-effect waves-light btn">button</a>
<a class="waves-effect waves-light btn"><i class="material-icons left">cloud</i>button</a>
<a class="waves-effect waves-light btn"><i class="material-icons right">cloud</i>button</a>
```

Apenas a class `btn` seta o button com o estilo raised. A classe `waves-effect`, adiciona efeito de
ondas quando o botão for clicado. A class `waves-light` é uma classe opcional de um elemento que tenha
a class `waves-effect`. `waves-light` é o tipo de efeito de ondas.

Você também pode usar `waves-dark` assim as ondas serão escurecidas.

#### Floating

Um button floating é uma tag button que tem a class `btn-floating`. Esse é o botão circular que
flutua.

```html
<a class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">add</i></a>
```

É possivel adicionar classes opcionais para definir o efeito de click e o tamanho do botão

- `btn-large`, define o botão como grande.

#### Flat

Botões Flat são botões planos, semelhantes ao botão padrão (raised). Porém o button flat, não
possui sombreamento. Geralmente usado dentro de cartões ou modais para evitar sobras sobrepostas.

```html
<a class="waves-effect waves-teal btn-flat">Button</a>
```

#### Submit button

Quando quiser um botão de submit em um formulário ao invés de usar input tag, 
use uma tag de button com o type submit.

```html
<button class="btn waves-effect waves-light" type="submit" name="action">Submit
  <i class="material-icons right">send</i>
</button>
```

#### Destaques (tamanhos) e desabled

É possível usar classes em botões que definem o tamanho dos botões.
Tamanhos maiores chamarão mais atenção para os botões.

- `btn-large`: deixa o botão pequeno
- `btn-small`: deixa o botão grande
- `disabled`: deixa o botão desabilitado

Todas essas classes são válidas apenas para buttons e tag a.

### Breadcrumbs

Breadcrumbs são usados para mostrar a localização atual dentro do conteúdo da páginas.

```html
<nav>
  <div class="nav-wrapper">
    <div class="col s12">
      <a href="#!" class="breadcrumb">First</a>
      <a href="#!" class="breadcrumb">Second</a>
      <a href="#!" class="breadcrumb">Third</a>
    </div>
  </div>
</nav>
```

É como uma navbar, porém deve mostrar a localização atual ou o path.
Semelhante a um caminho de pasta.

### Cards

Os cartões são um meio conveniente de exibir conteúdo composto por diferentes tipos de elementos. 
Eles também são adequados para apresentar elementos semelhantes cujo tamanho, ações suportadas 
e conteúdo podem variar consideravelmente, como fotos com legendas de tamanho variável.

#### Basic card

```html
<div class="row">
  <div class="col s12 m6">
    <div class="card blue-grey darken-1">
      <div class="card-content white-text">
        <span class="card-title">Card Title</span>
        <p>I am a very simple card. I am good at containing small bits of information.
        I am convenient because I require little markup to use effectively.</p>
      </div>
      <div class="card-action">
        <a href="#">This is a link</a>
        <a href="#">This is a link</a>
      </div>
    </div>
  </div>
</div>
```

Esse é um card básico que contem um título, conteúdo textual, e dois botões.

Um card é carcterizado por uma div que tenha a class `card`.
A class `card-content` deve ser usada em uma div, e essa div deve conter o conteúdo
do card. Essa div deve estar dentro de uma div que tenha a class `card`.

O titulo do card deve ser um span que tenha a class `card-title`.

O conteúdo do card, pode estar dentro de uma tag p sem clases.

A class `card-action` deve ser informada em uma div. Essa div irá ser o rodapé
do card e nele haverá links ou buttons de ações.

#### Image card

```html
<div class="row">
  <div class="col s12 m7">
    <div class="card">
      <div class="card-image">
        <img src="images/sample-1.jpg">
        <span class="card-title">Card Title</span>
      </div>
      <div class="card-content">
        <p>I am a very simple card. I am good at containing small bits of information.
        I am convenient because I require little markup to use effectively.</p>
      </div>
      <div class="card-action">
        <a href="#">This is a link</a>
      </div>
    </div>
  </div>
</div>
```

Segue mesmo padrão da card basic, porém ao inves da div com class `card-title`, temos
uma div com a class `card-image`, que será um container para uma tag img e um elemento
com a class `card-title`. As demais tags seguem a lógica do card basic.

#### Card image com bottões

```html
<div class="row">
  <div class="col s12 m6">
    <div class="card">
      <div class="card-image">
        <img src="images/sample-1.jpg">
        <span class="card-title">Card Title</span>
        <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
      </div>
      <div class="card-content">
        <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
      </div>
    </div>
  </div>
</div>
```

A diferença aqui é que dentro do container com a class `card-image`, existe uma tag a com 
a class `btn-floating`.

**Depois veremos com detalhes a class halfway-fab**.

#### Horizontal card

Card simples ideal para conter poucas linhas de informações.

Caso tenha um `card-image` container para img, a imagem fica na lateral.

```html
<div class="col s12 m7">
  <h2 class="header">Horizontal Card</h2>
  <div class="card horizontal">
    <div class="card-image">
      <img src="https://lorempixel.com/100/190/nature/6">
    </div>
    <div class="card-stacked">
      <div class="card-content">
        <p>I am a very simple card. I am good at containing small bits of information.</p>
      </div>
      <div class="card-action">
        <a href="#">This is a link</a>
      </div>
    </div>
  </div>
</div>
```

#### Card reveal (card com três pontinhos)

```html
<div class="card">
  <div class="card-image waves-effect waves-block waves-light">
    <img class="activator" src="images/office.jpg">
  </div>
  <div class="card-content">
    <span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span>
    <p><a href="#">This is a link</a></p>
  </div>
  <div class="card-reveal">
    <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
    <p>Here is some more information about this product that is only revealed once clicked on.</p>
  </div>
</div>
```

Quando os três pontos são clicados é expandido o conteúdo.

Aqui você pode adicionar um cartão que revela mais informações quando clicado. 
Basta adicionar a class `card-reveal` a uma div com um título `span.card-title` dentro 
para fazer isso funcionar. Adicione a classe `activator` a um elemento dentro 
do cartão para permitir que ele abra a revelação do cartão.

O que tiver a class `activator` vai acionar a revelação do contúedo. O conteúdo
fica dentro da class ` card-reveal`.

Você pode fazer seus `card-action` sempre visivel por adicionar a classe `sticky-action` no elemento
que tiver a class `card`.

Por padrão o reaveal cobre as ações. Mas se você usar a class `sticky-action`. No elemento `card`,
as ações sempre ficarão visíveis.

```html
<div class="row">
  <div class="col s12 m6">
    <div class="card sticky-action">
      <div class="card-image waves-effect waves-block waves-light">
        <img class="activator" src="./img/nocture-sea.jpg">
      </div>
      <div class="card-content">
        <span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span>
        <p><a href="#">This is a link</a></p>
      </div>
      <div class="card-action">
        <button class="btn">Ver mais</button>
      </div>
      <div class="card-reveal">
        <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
        <p>Here is some more information about this product that is only revealed once clicked on.</p>
      </div>
    </div>
  </div>
</div>
```

#### Cards com tabs (abas)

```html
<div class="card">

  <div class="card-content">
    <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
  </div>

  <div class="card-tabs">
    <ul class="tabs tabs-fixed-width">
      <li class="tab"><a href="#test4">Test 1</a></li>
      <li class="tab"><a class="active" href="#test5">Test 2</a></li>
      <li class="tab"><a href="#test6">Test 3</a></li>
    </ul>
  </div>

  <div class="card-content grey lighten-4">
    <div id="test4">Test 1</div>
    <div id="test5">Test 2</div>
    <div id="test6">Test 3</div>
  </div>
</div>
```

A class `card-tabs` deve conter uma UL com a class `tabs`, e as LI devem ter a class `tab`.
Cada eli deve ter um link a com a o atributo href apontando para o conteúdo correto a ser 
exeibido.

A div `card-content` conterá todas as divs que serão exibidas ao clicar nas abas.
Cada div deve ter o atributo id, que será linkado com o hred da tag a clicada dentro do
continer `card-tabs`.

#### Card sizes 

- `card small`: Card pequeno.
- `card medium`: Card medio.
- `card large`: Card grande.

#### Card panel

Para um cartão mais simples com menos marcação, tente usar um painel de cartão 
que tenha apenas preenchimento e um efeito de sombra.

O card panel é um card que apenas deverá mostrar um texto e ter uma sombra.

```html
<div class="row">
  <div class="col s12 m5">
    <div class="card-panel teal">
      <span class="white-text">I am a very simple card. I am good at containing small bits of information.
      I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
      </span>
    </div>
  </div>
</div>
```

### Collections

Collections permite você agrupar uma lista de objetos juntos.

*A class collection deve ser setada em uma UL*

#### Basic

```html
<ul class="collection">
  <li class="collection-item">Alvin</li>
  <li class="collection-item">Alvin</li>
  <li class="collection-item">Alvin</li>
  <li class="collection-item">Alvin</li>
</ul>
```

#### Collections com links

Basta setar a class `active` a um `collection-item` que ele será mostrado em
destaque.

Se um `collection-item` for um link (a), hover será habilitado nos itens.
E esse item pode ter a class `active`.

```html
<div class="collection">
  <a href="#!" class="collection-item">Alvin</a>
  <a href="#!" class="collection-item active">Alvin</a>
  <a href="#!" class="collection-item">Alvin</a>
  <a href="#!" class="collection-item">Alvin</a>
</div>
```

#### Header no collection

```html
<ul class="collection with-header">
  <li class="collection-header"><h4>First Names</h4></li>
  <li class="collection-item">Alvin</li>
  <li class="collection-item">Alvin</li>
  <li class="collection-item">Alvin</li>
  <li class="collection-item">Alvin</li>
</ul>
```

A class `collection with-header` deve ser adicionada ao container `collection`.
A class `collection-header` deve ser adicionada ao elemento que será o título.
geralmente será um header tag.

#### Secondary content

É possivel setar um contaúdo secontadário as colleções. Esse conteúdo ficará
alinhado a direita.

Pode ser um button, link, ou um badge.

```html
<ul class="collection with-header">
  <li class="collection-header"><h4>First Names</h4></li>
  <li class="collection-item"><div>Alvin<a href="#!" class="secondary-content"><i class="material-icons">send</i></a></div></li>
  <li class="collection-item"><div>Alvin<a href="#!" class="secondary-content"><i class="material-icons">send</i></a></div></li>
  <li class="collection-item"><div>Alvin<a href="#!" class="secondary-content"><i class="material-icons">send</i></a></div></li>
  <li class="collection-item"><div>Alvin<a href="#!" class="secondary-content"><i class="material-icons">send</i></a></div></li>
</ul>
```

#### Avatar Content

O avatar contanet irá setar uma "foto circular", em cada collection item.

```html
<ul class="collection">
  <li class="collection-item avatar">
    <img src="images/yuna.jpg" alt="" class="circle">
    <span class="title">Title</span>
    <p>First Line <br>
        Second Line
    </p>
    <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
  </li>
  <li class="collection-item avatar">
    <i class="material-icons circle">folder</i>
    <span class="title">Title</span>
    <p>First Line <br>
        Second Line
    </p>
    <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
  </li>
  <li class="collection-item avatar">
    <i class="material-icons circle green">insert_chart</i>
    <span class="title">Title</span>
    <p>First Line <br>
        Second Line
    </p>
    <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
  </li>
  <li class="collection-item avatar">
    <i class="material-icons circle red">play_arrow</i>
    <span class="title">Title</span>
    <p>First Line <br>
        Second Line
    </p>
    <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
  </li>
</ul>
```

Basta adicionar em cada collection item a class `avatar`.
Dentro de cada `collection-item`, uma imagem com a class `circle`, que será o avatar.

Ainda dentro da `collection-item`, você pode ter um `title`, uma tag p e ainda um 
`secondary-content`.

### Floating Action Button

Floating Action button ou simplesmente FAB.

É um botão que abrirá outros botões quando clicado, ou quando passado o mouse encima.

A marcação HTML básica é essa:

```html
<div class="fixed-action-btn">
  <a class="btn-floating btn-large red">
    <i class="large material-icons">mode_edit</i>
  </a>
  <ul>
    <li><a class="btn-floating red"><i class="material-icons">insert_chart</i></a></li>
    <li><a class="btn-floating yellow darken-1"><i class="material-icons">format_quote</i></a></li>
    <li><a class="btn-floating green"><i class="material-icons">publish</i></a></li>
    <li><a class="btn-floating blue"><i class="material-icons">attach_file</i></a></li>
  </ul>
</div>
```

`fixed-action-btn` é o container do botão que irá flutuar no canto inferior direito
da página. A tag a que vem logo em seguida, é o botão que irá disparar o evento.
Que quando passado o mouse por cima, ou clicado, irá exibir os outros botões.

A baixo vem uma UL com outros botões. Essa UL será mostrada quando o evento vou disparado.

Para que o FAB funcione, devemos inicializar o evento com uso do JS:


#### Inicializando 

```js
document.addEventListener('DOMContentLoaded', () => {
  const elems = document.querySelectorAll('.fixed-action-btn')

  options = {}

  const instances = M.FloatingActionButton.init(elems, options)

  console.log(instances) // um array com todas as referencias aos FAB
})
```

O objeto `option` é usado para customizar a exibição do FAB.
O método `init` de `M.FloatingActionButton` é usado para setar o
evento com base no objeto `option`.

A const `instances` armazena um array com todas as referencias aos FAB.
Esse array pode ser usado para setar os eventos que serão disparados
ao clicar em alguns dos butões que serão exibidos.


#### Options 

O objeto option possui as sequintes propriedades:

- direction: String por padrão armazena 'top' mas pode ser setado como 'left' também. 
O menu será aberto para cima.
- hoverEnabled: Bool, por padrão true, o evento será disparado com houver.
- toolbarEnabled: Bool, ao inves de uma lista flutuante, será mostrado uma "toolbar" (nav menu)
na parte inferor da tela.

O código js abaixo seta um evento para cada button floating que é revelado.

```js
document.addEventListener('DOMContentLoaded', () => {
  const elems = document.querySelectorAll('.fixed-action-btn')
  const instances = M.FloatingActionButton.init(elems) // todos os FAB

  const [ firstInstance ] = instances // Apenas o primeiro FAB
  const floatingBtns = Array.from(firstInstance.$floatingBtns)

  floatingBtns.forEach(floatingBtns => {
    floatingBtns.addEventListener('click', () => {
      console.log(floatingBtns.dataset.id)
    })
  })
})
```

Exemplo de FAB com floating buttons

```js
document.addEventListener('DOMContentLoaded', () => {
  const elems = document.querySelectorAll('.fixed-action-btn')
  const instances = M.FloatingActionButton.init(elems)

  const [ firstInstance ] = instances
  const toolbarElement = firstInstance.$menu[0]
  
  toolbarElement.addEventListener('click', (e) => {
    const isAButton = e.target.tagName === 'I'
    if (!isAButton) {
      return
    }

    console.log(`você clicou no botão ${e.target.dataset.color}`)
  })
})
```

#### Methods 

As intances possuem 3 métodos 

- instance.open(): Abre a lista de botões
- instance.close(): Fecha a lista de botões
- instance.destroy(): Desatroy a instancia do plugin FAB

#### Propriedades das instances

| Name | Type | Description |
| --- | --- | --- |
| el	| Element	| The DOM element the plugin was initialized with. |
| options |	Object | The options the instance was initialized with. |
| isOpen	| Boolean	| Describes open/close state of the FAB. |

