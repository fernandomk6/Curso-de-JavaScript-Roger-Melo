# Timestamp e comparações

## Pegando a data atual

```js
const present = new Date()
// Sun Oct 16 2022 13:21:06 GMT-0300 (Horário Padrão de Brasília)
```

## Pegando o timestamp

Timestamp é a quantidades de milissegundos (number inteiro) passados desde 01/01/1970
até o momento que o objeto date foi instanciado.

```js
const presentTimestamp = present.getTime()
// 1665937258587
```

## Comparando duas datas

### Criando uma data específica

```js
const past = new Date('May 1 2020 7:47:00')
// Fri May 01 2020 07:47:00 GMT-0300 (Horário Padrão de Brasília)
```

### Obtendo a diferença de tempo em milissegundos de duas datas

```js
const present = new Date()
const presentTimestamp = present.getTime()

const past = new Date('May 1 2020 7:47:00')
const pastTimestamp = past.getTime()

const difference = presentTimestamp - pastTimestamp
```

### Formatando a diferença

```js
const present = new Date()
const presentTimestamp = present.getTime()

const past = new Date('May 1 2020 7:47:00')
const pastTimestamp = past.getTime()

const difference = presentTimestamp - pastTimestamp

const differenceSeconds = Math.round(difference / 1000)
const differenceMinutes = Math.round(differenceSeconds / 60)
const differenceHours = Math.round(differenceMinutes / 60)
const differenceDays = Math.round(differenceHours / 24)
const differenceMonth = Math.round(differenceDays / 30)
const differenceYears = Math.round(differenceMonth / 12)


console.log(`Se passaram ${differenceDays} dias, desde 1º de maio de 2000, até o agora`)
```

## Instanciando datas apartir de um timestamp

```js
const timestamp = 1236548759585
const randomDate = new Date(timestamp)

console.log(randomDate)
// Sun Mar 08 2009 18:45:59 GMT-0300 (Horário Padrão de Brasília)
```

