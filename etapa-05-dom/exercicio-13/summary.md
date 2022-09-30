# Métodos pesquisados

## array.reverse()

Esse método inverte o indice dos elementos de um array.
O primeiro passa a ser o último o ultimo passa a ser o primeiro
e assim sucessivamente para todos os elementos do array.
Retorna uma referência ao array revertido.
Muta o array.

## array.shift()

Remove o elemento de indice 0 de um array, retorna esse elemento
e modifica o array original. Não tem nenhum parâmetro.

## array.find

Retorna o primeiro elemento que satisfaça a condição
passada pela função de callback.

Deve ser passado como argumento uma função de callback
que vai ser executada para cada elemento do array. Caso
essa função de callback retorne true, o elemento
da iteração atual é retornado. A função de callback
pode receber como parâmetro o elemento, index e o array
original.