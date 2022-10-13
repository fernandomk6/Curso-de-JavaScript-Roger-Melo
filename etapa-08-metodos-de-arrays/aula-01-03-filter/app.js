const randomNumbers = [1,6,5,4,2,35,8,9,235,365,3652,21,53,254,25,36,53]
// const numbersBigThan37 = randomNumbers.filter(number => number >= 37)

const users = [
  { name: 'Ada Lovelace', premium: true },
  { name: 'Grace Hopper', premium: false },
  { name: 'Alan Turing', premium: true },
  { name: 'Linus Torvalds', premium: false },
  { name: 'Margaret Hamilton', premium: true }
]

const premiumUsers = users.filter(user => user.premium)

users[0].name = 'ticaracatica'
console.log({ users, premiumUsers })
