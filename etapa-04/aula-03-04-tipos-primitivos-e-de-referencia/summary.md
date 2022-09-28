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
