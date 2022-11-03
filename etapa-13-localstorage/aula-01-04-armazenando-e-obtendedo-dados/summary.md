# Armazenando e obtendo dados localStorage

## O que é o localStorage?
O browser tem uma API chamada WEB Storage API.
Essa api torna possível salvar dados no browser do usuário,
e esses dados são pares de chave e valor.

LocalStorage é um mecanismo interno da WEB Storage API.

Existem duas formas de salvar dados.

- Servidor
- Ferramentas do browser (web storage API)

## Diferenças entre session storage e localStorage

Session storage os dados ficam salvos na sessão. Caso o usuário feche a aba,
os dados são perdidos. Ou seja eles so persistem enquanto a aba está aberta.

LocalStorage os dados ficam salvos no navegador local, e mesmo fechando a 
aba ou o navegador, os dados continuam sendo persistidos.

## Varias formas de salvar dados no usuario

- Cookies
- WEB Storage API ( dados simples strings )
- indexDB API ( grandes volumes de dados, videos )
- Cache API, dados para a aplicação funcionar offiline.

## Limites de armazenamos

O armazenamentos máximo é dinamico. Mas tenha como base:

- 10mb localStorage.
- 5mb sessionStorage.

## Segurança

Session storage e localStorage não são muitos seguros.
Use-o apenas para testes ou armazenar dados não sensivéis, preferencias
de usuario etc.

> "Um é maior que zero. Faça seu melhor com o que você tem, até
ter condições melhores de fazer melhor ainda".

## LocalStorage não substitui um banco de dados

O banco de dados vai fornecer informações para qualquer dispositivos.
O localStorage fornece informações apenas para aquele browser especifico.
Os dados ficam salvos naquele browser. Ou seja, se você salvar dados
no browser do desktop do cliente, caso o cliente acesso pelo celular,
os dados não estarão salvos. Pois os dados ficaram salvos apenas no browser
do desktop. O banco de dados pode fornecer dados para qualquer aplicação 
de qualquer lugar.

## Estratégia

Combine localStorage com banco de dados.
Por exemplo: sua aplicação faz um request de alguns dados e esses dados não mudam,
são apenas consultados. Ao invés de fazer sempre uma nova consulta para trazer
sempre os mesmos dados, deixe os dados salvos no localStorage, e quando precisar
use os dados que já estão salvos. Assim você evita gastar a banda do cliente
e otimiza sua performance.

## Por que o localStorage?

Por que iremos começar do começo.

> "Primeiro você faz, depois você melhora".

## Verificando se existe algo na localStorage

localStorage.length amazena o numero de itens
no local storage. Caso nenhum item esteja armazenado,
localStorage.length retorna 0.

## Um item

Um item é um par de chave e valor.
O valor deve ser uma string. A chave deve ser uma string.
Vários itens podem ser armazenados na localStorage.

```js
localStorage.setItem('key', 'value')
```

## Objeto localStorage

localStorage retorna um objeto com todos os pares de chave e valor
setados na localStorage e uma propriedade length que armazena o
número de itens setados.

## Conversão de tipos

Automáticamente os tipos passados como key ou value
de um item da localStorage são transformados em strings.

## LocalStorage x Dominio

Os dados na localStorage são divididos por dominio.
Ou seja cada dominio possuí seus itens de storage.

## Evento window storage

`window.addEventListener('storage', () => {})`

É possivel setar um listener para executar uma função sempre que 
algum valor é alterado na storage do dominio atual.

## Obter itens da localStorage

`const value = localStorage.getItem('key')`

## Persistência de dados

Uma vez os dados armazenados na localStorage, eles ficam salvos
até serem removidos pelo javascript (removeItem ou clear) ou 
até o usuário manualmente limpar os dados do navegador (cache).

## LocalStorage funciona como um mini banco de dados no browser do usuário

Os itens ficam salvos apenas nesse browser e nesse dominio.
Os itens podem ser alterados, acessados e excluidos.
Existe um limite de tamanho. tome por base 10mb.
Use o localStorage para persistir dados de preferencia do usuário,
dados de um request único... dados que são necessário apenas nesse
browser e pode ser "perdidos". É uma funcionalidade extra, para
melhorar a experiência do usuário e melhorar o desempenho, pois é possível
obter os dados uma vez e armazenar na local storage ao invés de
fazer vários requests. LocalStorage também é muito usado para testes
e por desenvolvedores iniciantes para simular dados de um servidor WEB.

## SetItem

O setItem ou adiciona um item ou altera um item já existente com a mesma chave. 

## Remover dados da localStorage

Remover um item especifico
- localStorage.removeItem('key')

Remover todos os items da localStorage
- localStorage.clear()

**Lembre-se que a localStorage é por dominio**

Cada dominio tem seus proprios itens na localStorage.