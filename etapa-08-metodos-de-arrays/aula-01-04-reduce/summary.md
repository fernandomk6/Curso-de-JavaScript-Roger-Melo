# O método reduce

O reduce deve ser usado quando baseado no array original você precisa reduzir
esse array a um outro tipo dado, um number, string, objeto, novo array, etc.

## O acumulator.

O parametro acumulator deve explicitamente indicar o tipo de dado que o
reduce retornará.

O acumulator sempre será o dado retornado na ultima iteração.

Na primeira iteração o accumulator é o segundo argumento passado para o reduce.

Na ultima iteração, o valor do accumulator será o valor retornado pelo reduce.

## Importante

- O callback do reduce sempre precisa retornar um valor.
- O parametro accumulator recebe o valor retornado pelo callback.