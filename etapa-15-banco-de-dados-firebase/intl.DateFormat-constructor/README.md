# Intl.DateTimeFormat

## Introdução 

É um constructor, que retorna um objeto que possuí métodos
para lidar com datas de uma forma mais acertiva.

```js
const options = {
  dateStyle: 'short',
  timeStyle: 'short'
}

return Intl.DateTimeFormat('pt-BR', options).format(new Date())
```

## Método format 

Getter function que formata a data de acordo com o local e com algumas opções
que podem ser passadas para configurar a exibição da data.


## Parametros

Intl.DateTimeFormat recebe uma string com o local, e um objeto option, que conterá propriedades
de formatação da data.

.format() espera receber um objeto de data ou dado que possa ser interpretado como data, e à
formata com base nas options e no local passados como argumentos para o construtor do objeto.

## Exemplos
```js
options = {
  hour: 'numeric', minute: 'numeric', second: 'numeric',
  timeZone: 'Australia/Sydney',
  timeZoneName: 'short'
}

console.log(new Intl.DateTimeFormat('en-AU', options).format(date))
// "2:00:00 pm AEDT"
```

