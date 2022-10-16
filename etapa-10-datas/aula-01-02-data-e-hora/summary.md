# Data e hora

Em javascripts datas são um **tipo de objeto**. São um objeto.
Com isso são um tipo de referência e não um tipo primitivo.

## Como criar e formatar datas

`const present = new Date()`

A instancia do objeto date, retorna um objeto date que armazena a data do agora.

Ao exibir no console a variável `present` o seguinte é exibido no console:

`Sun Oct 16 2022 12:59:34 GMT-0300 (Horário Padrão de Brasília)`

Parece ser uma string porém é um objeto. Quando exibimos no console,
o javascript automáticamente transforma o objeto date em uma string.

A instancia do construtor date, retorna um objeto que representa o agora.
Sendo o agora o momento em que o objeto é instanciado.

## Princípais métodos

```js

console.log('getFullYear', present.getFullYear(), 'ano') 
console.log('getMonth', present.getMonth(), 'mês, zero based') 
console.log('getDate', present.getDate(), 'dia do mês') 
console.log('getDay', present.getDay(), 'dia da semana, sendo domingo 0') 
console.log('getHours', present.getHours(), 'horas') 
console.log('getMinutes', present.getMinutes(), 'minutos') 
console.log('getSeconds', present.getSeconds(), 'segundos') 

// getFullYear 2022 ano
// getMonth 9 mês, zero based
// getDate 16 dia do mês
// getDay 0 dia da semana, sendo domingo 0
// getHours 13 horas
// getMinutes 11 minutos
// getSeconds 8 segundos

```

## Timestamp

Um timestamp é representado pelo número de **milisegundos** passados desde 
**01/01/1970** até o momento presente.

Isso é bom por que assim podemos comparar duas datas.

```js
console.log('timestamp', present.getTime(), 'milisegundos passados desde 01/01/1970 até o presente') 

// timestamp 1665936653228 milisegundos passados desde 01/01/1970 até o presente
```

## Obtendo partes da data no formato string

```js
// pegando a data presente
console.log('toDateString', present.toDateString())
// toDateString Sun Oct 16 2022


// pegando o horario da data present
console.log('toTimeString', present.toTimeString())
// toTimeString 13:14:02 GMT-0300 (Horário Padrão de Brasília)

// pegando string formatadas no formato local (do servidor)
console.log('toLocaleString', present.toLocaleString())
// toLocaleString 16/10/2022 13:15:24

```

