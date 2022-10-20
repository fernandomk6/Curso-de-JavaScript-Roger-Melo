# Fazendo request HTTP

Antes do JSON ser o padrão de arquivo para troca de informações
entre sistemas, o padrão era usar xml.

## Instanciando objeto request

```js
const request = new XMLHttpRequest()
```

## Abrindo uma requisição

Configuração inicial da requisição

```js
const request = new XMLHttpRequest()

request.open('GET', 'https://jsonplaceholder.typicode.com/todos')
```

## Enviado a requisição

```js
const request = new XMLHttpRequest()

request.open('GET', 'https://jsonplaceholder.typicode.com/todos')
request.send()
```

## Stados da requisição

Obter indicios da respostaa da requisição e começar a acessar os dados.

Devemos setar um listener de eventos ao 'readstatechange'.
Esse evento será disparado sempre que o state da requisição mudar.

O que significam essas mudanças de estado da requisição?

A propriedade `request.readyState` irá retornar o stado da requisição.

Mapa de estados da requisição

| Value | State | Description |
| --- | --- |--- |
| 0	| UNSENT | Client has been created. open() not called yet. |
| 1	| OPENED	| open() has been called. |
| 2	| HEADERS_RECEIVED | send() has been called, and headers and status are available. |
| 3	| LOADING | Downloading; responseText holds partial data. |
| 4	| DONE | The operation is complete. |

## Recebendo a resposta da requisição

```js
const request = new XMLHttpRequest()

request.addEventListener('readystatechange', () => {
  console.log(request.readyState)
  if (request.readyState === 4) {
    console.log(request.response)
  }
})

request.open('GET', 'https://jsonplaceholder.typicode.com/todos')
request.send()
```

