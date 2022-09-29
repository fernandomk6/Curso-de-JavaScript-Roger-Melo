# O objeto Math

Esse objeto tem muitas propriedades e métodos criados dentro dele.
Ele é criado pelo próprio javascript.

## Métodos

### Math.round(number)

Round pode ser traduzido ou redonda

Arredonda o número para o inteiro mais próximo

- 1.2 = 1
- 1.6 = 2
- 1.5 = 2

0.>=5 = 1
0.<=4 = 0

Decimal maior ou igual a 5, arredonda para cima.
Decimal menor ou igual a 4, arredonda para mbixo.

```js
console.log(Math.round(1.5)) // 2
console.log(Math.round(1.6)) // 2
console.log(Math.round(1.4)) // 1
```

### Math.floor(number)

Floor pode ser traduzido para chão.

Esse método sempre arredondará o numbero recebido para o inteiro **menor** mais próximo.

```js
console.log(Math.floor(1.5)) // 1
console.log(Math.floor(1.6)) // 1
console.log(Math.floor(1.4)) // 1
```

Ou seja, esse método arredonda para baixo.

### Math.ceil(number)

Ceil pode ser traduzido para teto.

Esse método sempre arredondará o numero recebido para o inteiro **maior** mais próximo.

```js
console.log(Math.ceil(1.5)) // 2
console.log(Math.ceil(1.6)) // 2
console.log(Math.ceil(1.4)) // 2
```

Ou seja, esse método arredonda para **cima**.

### Math.trunc(number)

Trunc pode ser traduzido para cortar.

Esse método removerá a parte decimal do número e retornará a parte inteira.

```js
console.log(Math.trunc(1.5)) // 1
console.log(Math.trunc(2.6)) // 2
console.log(Math.trunc(3.4)) // 3
```

### Math.random()

Random pode ser traduzido para aleatório.

Esse método retorna um número decimal entre 0 e 1.

Se quisermos gerar um número aleatório entre 0 e 100?

```js
const limit = 100
const result = Math.round(Math.random() * limit)
```

### Número aleatório até um valor máximo

```js
function getRandom(max) {
  return Math.round(Math.random() * max)
}
```

### Número aleatório de um número mínimo até um número máximo.

```js
function getRandomInt(min, max) {
  return Math.round(Math.random() * (max - min)) + min;
} 
```


