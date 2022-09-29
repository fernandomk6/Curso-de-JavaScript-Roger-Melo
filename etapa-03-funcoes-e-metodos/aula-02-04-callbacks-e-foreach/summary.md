# Callbacks

Callback é uma função que é passada como argumento
para outra função.

```js
const myFunc = callback => {
  const value = 77

  callback(value)
}

myFunc((number) => {
  console.log(number)
})
```

| Fluxo | |
| --- | --- |
| 1 |myFunc é declarada |
| 2 |myFunc é invocada com a declaração de um função como argumento |
| 3 |A função passada como argumento para a função myFunc é atribuida ao parametro callback |
| 4 |A função callback é invocada, passando value como argumento |
| 5 |A callback é executada, value é atribuído ao parametro number |
| 6 |O bloco de código da callback é executado |

## Foreach

Veja:

```js
const socialNetworks = ['youtube', 'twitter', 'instagram', 'facebook']

socialNetworks.forEach(() => {
  console.log('olá')
})

// olá
// olá
// olá
// olá
```

O método ForEach executa o callback uma vez para cada
item do array.

Perceba que o callback é a função que foi passada como argumento para
o forEach.

### Parânmetros opcionais

Veja:

```js
const socialNetworks = ['youtube', 'twitter', 'instagram', 'facebook']

socialNetworks.forEach((socialNetwork, index, array) => {
  console.log(socialNetwork, index, array)
})

// youtube 0 [ 'youtube', 'twitter', 'instagram', 'facebook' ]
// twitter 1 [ 'youtube', 'twitter', 'instagram', 'facebook' ]
// instagram 2 [ 'youtube', 'twitter', 'instagram', 'facebook' ]
// facebook 3 [ 'youtube', 'twitter', 'instagram', 'facebook' ]
```

Perceba que, o nosso callback, agora tem 3 argumentos,
esses argumementos são recebidos pois, o forEach,
passa como argumento para o callback, o item, o index, e uma referência
ao array original. Logo esse argumento podem ser recebidos como parâmetros,
na declaração no callback.


### Referênciando callbacks

Veja: 

```js
const socialNetworks = ['youtube', 'twitter', 'instagram', 'facebook']
const logArrayInfo = (socialNetwork, index, array) => {
  console.log(socialNetwork, index, array)
}

socialNetworks.forEach(logArrayInfo)
```

Perceba que o forEach agora recebeu um "logArrayInfo" como argumento.
Essa logArrayInfo armazena uma função, e essa função tem 3 argumentos.
Logo ela pode ser usada como callback para o forEach.

O foreach é executado, o logArrayInfo é executado pela primeira vez
dentro do forEach. É passado como argumento, o item, o indice atual
e o array original para a invocação da função logArrayInfo.
Esses argumentos são recebidos na função logArrayInfo, seu bloco de
código é executado. Isso acontece para cada item do array.

Essa forma é igual a anterior porém o callback agora é nomeado.
Isso torna o código mais legível e manutenivél e cria a possibilidade
de reaproveitar essa função em outros locais.
