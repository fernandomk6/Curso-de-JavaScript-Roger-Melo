# Tipos primitivos vs tipos de referência

| Tipo primitivos |
| --- | 
| Numbers |
| Strings |
| Booleans |
| Null |
| Undefined |
| Symbol |
| Bigint |

| Tipos de refência |
| --- |
| Todos os tipos de objetos que não são primitivos |
| Ex: Objetos literais |
| Ex: Funções |
| Ex: Datas |
| Todos os objetos ou tipos de dados que não são os primitivos |

## Tipos de dados e sua referência

7 dos oitos tipos que o javascript tem atualmente são primitivos
apenas o tipo object é passado por referência.

| Todos os 8 tipos de dados em javascript | Passado por referência?|
| --- | --- |
| Numbers | Não |
| Strings | Não |
| Booleans | Não |
| Null | Não |
| Undefined | Não |
| Symbols | Não |
| Bigints | Não |
| Objects | Sim |

## Qual a diferença entre eles?

A diferença está na forma como eles são armazenados na memória.
Os tipos primitivos tem o seu valor adicionados diretamente na stack da memória.
Essa stack possuí um valor máximo definido para cada tipo de dado primitivo.
Quando esse local é acessado, o valor é retornado diretamente.

Os dados por referência são armazenados na heap, que pode ser traduzido como "amontoado".
O heap tem mais espaço disponível e não possí um valor limite, ou seja os dados armazenados
no heap, podem crescer. O heap é um pouco mais lento para ser acessado.

Quando um tipo primitivo é armazenado em uma variavel, a variavel é um identificador
para buscar por aquele valor na stack.

Quando um tipo por referência é armazenado em uma variãvel, o seu valor é adicionado na head,
é criado um ponteiro na stak, que aponta para o valor na head. A variavel é o identificado
desse ponteiro. Ou seja quando chamamos um dado por referência, o valor retornado é o seu
ponteiro. 

**Tipos por referência quando acessados retornam um ponteiro para seu valor**.
**Tipos primitivos quando acessados retornam seu valor diretamente**.

![stack & heap](https://i.stack.imgur.com/60b4B.jpg)


## Resumo

Variaveis que armazenam valores primitivos, quando atribuidas a uma outra variavel,
passam o seu valor para a outra variavel, uma cópia.

Variaveis que armazenam valores por referência, quando atribuidas a uma outra variável,
passam o seu valor, que é um ponteiro para o seu real valor, uma cópia.

Variáveis primitivas passam seu valor quando atribuídos a algo.
Variáveis por referência passam um ponteiro quando atribuídos a algo.

Uma variavel que recebe um valor primitivo armazena o valor recebido como valor da variavel.
Uma variavel que recebe um valor por refêrencia armazena um ponteiro para esse valor.

### Valor primitivo

| Variavel name (identificador / chave) | Valor |
| --- | --- |
| name | 1 |
| age | 23 |

**Uma variável quando acessada retornará o seu valor.**
Variavel primitivas retornaram o seu valor, que será um valor primitivo.

Quando usamos `const x = name` esse `name` retorna seu valor que é `1`

### Valor por referência

| Variavel name (identificador / chave) | Valor |
| --- | --- |
| user | Ponteiro para o valor real |
| movies | Ponteiro para o valor real |

Esse ponteiro para o valor real é chamado de referência.

Quando usamos `const x = user` esse `user` retorna seu valor que é uma `referência ao valor real`
Logo `x` armazena o mesmo valor que `user` que é um ponteiro que aponta para o valor real, que 
é um objeto.
