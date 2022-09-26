# Break e continue

## Break

O break deve ser usado dentro de um for loop.
Quando a instrçõa break for lida dentro de um for loop, o loop
será encerrado. 

Isso é útil quando queremos interromper o loop com base
em alguma condição.

```js
const points = [10, 20, 30, 90, 50, 100, 250]

for (let i = 0; i < points.length; i++) {
  console.log(points[i])

  if (points[i] >= 100) {
    console.log('Parabéns, você atingiu a pontuação máxima.')
    break
  }
}
```

Perceba que a proxíma iteração do loop que seria o número 250,
não foi executada. Pois quando o break foi lido, o loop
foi encerrado.


## Continue

O continue deve ser usando dentro de um for loop.
Quando a instrução continue for lida, o for passará altomáticamente para
a próxima iteração.
Quando o continue é executado, todo o código abaixo dele é ignorado, e o
loop passa para a próxima iteração. Pode ser dizer que o continue
faz é "ignorar o código abaixo e ir para a próxima iteração".

```js
const points = [0, 10, 20, 30, 90, 50, 100, 250]

for (let i = 0; i < points.length; i++) {
  if (points[i] === 0) {
    continue
  }
  
  console.log(points[i])

  if (points[i] >= 100) {
    console.log('Parabéns, você atingiu a pontuação máxima.')
    break
  }
}

/*
  10
  20
  30
  90
  50
  100
  Parabéns, você atingiu a pontuação máxima.
*/
```

Perceba que o 0, não foi exibido no console, pois quando o valor atual era 0,
a condição do primeiro if foi verdadeira, e o continue foi lido. Isso fez
com que todo o código abaixo fosse ignorado e que o loop fosse para a próxima iteração.
Como o código abaixo foi ignorado, o 0 não foi impresso no console.
