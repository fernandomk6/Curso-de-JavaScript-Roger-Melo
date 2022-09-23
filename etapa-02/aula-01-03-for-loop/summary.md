# For loop

O propósito de um loop é executar um bloco de código repetidas vezes.

Sintaxe básica

```js
for (let i = 0; i < 5; 1++) {

}
```

O for recebe entre os parênteses, 3 expressões separadas por ponto e vírgula.

## A primeira expressão (inicialização do contador)

A primeira expressão deve ser a unicialização de uma variável. E essa variavel
contará quantas vezes esse bloco de código já foi executado. Por convenção
a variavel "contador" é sempre usada como i. Essa expressão é executada
apenas na primeira execução do bloco de código. Serve apenas para dar um ponto de
partida. Nas proxímas execuções ela não é criada novamente.

## A segunda expressão (condição do contador)

Uma expressão que resulta em um boolean. Caso esse boolean seja true, o bloco de código
será executado. Caso seja false, o loop será interrompido. Essa expressão é executada
antes da execução do bloco de código.

## A terceira expressão (incremento do contador)

É um incremento, e essa expressão é executada no final de cada execução do bloco de código.
Esse incremento será o responsável por fazer com que, em algum momento, a expressão 2,
resulte em false.

## Fluxo do loop for

- variavel contador iniciada -> 
- condição é verificada (true) -> 
- bloco executado -> 
- incremento do contador -> 
- condição é verificada (true) -> 
- bloco executado -> 
- incremento do contador -> 
- condição é verificada (true) -> ...

Esse ciclo se repete até a condição ser false. Quando a condição for false, o loop é encerrado.
