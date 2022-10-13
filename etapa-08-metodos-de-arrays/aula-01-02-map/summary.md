# Dica muito importante

É muito comum o map iterar sobre um array de objetos.
Sempre que isso ocorrer tome cuidado para que o callback
do map não retorne a referencia ao objeto que esta
dentro do array original. 

**Sempre retorne um novo objeto**

## Forma errada

```js
const products = [
  { name: 'Mouse Sem Fio', price: 30 },
  { name: 'Pen Drive', price: 25 },
  { name: 'Cartucho de Tinta', price: 50 },
  { name: 'Suporte Ergonômico para Notebook', price: 23 },
  { name: 'Repetidor de Sinal Wi-Fi', price: 44 }
]

const newProducts = products.map(product => {
  if (product.price <= 30) return product

  product.price /= 2

  return product
})
```

O `newProducts` é um array de objetos, porem esses objetos apontam para o mesmo
local na memoria pois a referencia ao objeto original foi retornado pelo callback
do map

## Forma correta (sempre faça assim ao lidar com map em array de objetos)

```js
const products = [
  { name: 'Mouse Sem Fio', price: 30 },
  { name: 'Pen Drive', price: 25 },
  { name: 'Cartucho de Tinta', price: 50 },
  { name: 'Suporte Ergonômico para Notebook', price: 23 },
  { name: 'Repetidor de Sinal Wi-Fi', price: 44 }
]

const newProducts = products.map(product => {
  if (product.price <= 30) return { ...product }

  product.price /= 2

  return { ...product }
})
```

Agora um novo objeto literal está sendo retornado em cada iteração do map.
Agora são arrays completamentes diferentes.

Lembre-se: **Sempre retorne um novo objeto**.

## Considerações finais

O Map sempre **NUNCA** deve alterar o array original.
O map não deve retornar **referências**.

O array retornardo pelo map, deve ser um array novo, com valores novos
e independentes.
