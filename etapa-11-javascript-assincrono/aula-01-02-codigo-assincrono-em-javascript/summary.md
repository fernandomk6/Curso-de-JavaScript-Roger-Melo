# Código assíncrono

É um código que inicializa um processo agora, e 
finaliza-o posteriormente.

## O que é código síncrono

O javascript executa uma operação por vez, de cima para baixo.

## Javascript é single thread

Thread significa fio.

Jávascript é uma linguagem de fio único.

Ou seja um fio é uma pilha de instruções. javascript possui apenas uma fila,
ou fio, ou pilha... da no mesmo.

## Ordem de execução

Quando um código assíncrono é lido, o callback que é passado para ele
é armazenado em uma fila, quando concluído o processo o callback será executado
depois de todas as operações síncronas terem sido executadas.

Outra parte do browser vai lidar com a manipulação dos códigos assíncronos
e quando estiverem prontos, ele vai retornar o callback para a thread do 
javascript como ultimo processo.