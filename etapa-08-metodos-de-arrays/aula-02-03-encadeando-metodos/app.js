const books = [
  { name: 'Código Limpo', price: 30 },
  { name: 'O milagre da manhã', price: 5 },
  { name: 'Alice no País das Maravilhas', price: 10 },
  { name: 'Quem Pensa Enriquece', price: 50 },
  { name: 'O livro da ciência', price: 40 }
]

const booksOnsale = books
  .filter(({ price }) => price > 20)
  .sort((book1, book2) => book1.price - book2.price)
  .map(({ name, price }) => 
    `O preço do livro ${name} caiu para R$ ${price}`)

console.log(booksOnsale)

// Quando temos métodos encadeados, cada método deve ficar em sua
// própria linha.

