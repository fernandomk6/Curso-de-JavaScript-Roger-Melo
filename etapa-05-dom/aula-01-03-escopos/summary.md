# 3 tipos de escopos que você deve conhecer

1. Escopo de funções
2. Escopo de bloco
3. Escopo léxico

## O que é escopo?

É a visibilidade de uma variável.
Dependendo de onde você declara uma variável, outras partes do código
podem não tem acesso a essa váriavel.

Uma varável declarada em escopo X, não pode ser acessada pelo escopos
externos ao escopo x. Mas podem ser acessadas por escopos internos.

O escopo pai, não tem acesso as variáveis declaradas no escopo filho.
Já o filho, tem acesso as variáveis declaradas no escopo pai.


Os filhos tem acesso as variáveis do escopo do pai.

```js
// escopo pai (global)

const noEscopoPai = true

function escopoDeFuncao () {
  noEscopoPai // true
}
```

Já o pai não tem acesso as variáveis declaradas no escopo do filho.

```js
// escopo pai (global)

function escopoDeFuncao () {
  const noEscopoFilho = true
}

noEscopoFilho // Not defined
```
## Escopo de funções

O bloco de código de cada função é chamado de escopo de função.
As variáveis declaradas dentro do escopo de uma função, não são acessiveis fora da função.

## Escopo de blocos

Nesses exemplos usamos escopos de funções, mas o mesmo vale para escopos de bloco.
Que são caracterizados por `{ ...código }` abertura e fechamaneto de chave e algum código
executavel, dentro. Exemplos de escopos de bloco são: ifs, fors, switchs. Escopos de blocos 
são sempre estruturas de código (não estruturas de dados). 

Básicamente existe escopo de bloco e de funções.

**Variáveis declaradas com var possuem apenas escopo de funções**

## Escopo léxico

É o fato de, se uma variável não está declarada no escopo em que é usada, o javascript
irá procurar essa variável no escopo externo, ou seja no escopo pai. E assim sucessivamente em
quantos escopos estiverem. Isso é util para funções aninhadas.

**Em javascript todas as funções são cousures**

Clusures é a capacidade que uma função tem de saber qual o escopo ela foi declarada,
e com base nisso ela sempre usará o escopo léxico, para buscar suas variáveis.

