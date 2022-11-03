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

