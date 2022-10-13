// Usamos o map quando querermos gerar um novo array
// com a mesma quantidade de itens do array original
// porém com esses itens modificados.

// Exemplo 1

const numbers = [1, 2, 3]

const newNumbers = numbers.map((number, index, array) => {
  // console.log(number, index, array)
})

// console.log(newNumbers) // [ undefined, undefined, undefined ]

// O resultado foi undefined pois o callback do map não está retornando valor.
// Toda vez que o callback do map é executado o
// valor retornado será adicionado ao novo array.

const doubleNumbers = numbers.map(number => number * 2)

// console.log(numbers, doubleNumbers)

const prices = [20, 50, 100.99, 500, 2050.99]

const salesPrices = prices.map(price => (price - price * 0.1).toFixed(2))

// console.log(salesPrices)

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

// console.log(newProducts)

products[0].name = 'telecoteco'

console.log(products, newProducts)

