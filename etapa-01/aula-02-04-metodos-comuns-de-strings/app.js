// slice
const email = 'fernandomk6@gmail.com'

const emailProvider = email.slice(12, 17)
const emailName = email.slice(0, 11)

console.log(emailProvider) // gmail
console.log(emailName) // fernandomk6

// replace

const myName = 'Fernando Henrique'

const myNameReplaced = myName.toLowerCase().replace('n', 's') 

console.log(myNameReplaced) // fernando henrique

// replace com palavras

const motocicle = 'Lander 250'
const motocicleModified = motocicle.replace('Lander', 'Twister')

console.log(motocicleModified) //Twister 250