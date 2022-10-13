const phaseScores = [
  { name: 'Vinicius Costa', score: 337 },
  { name: 'Roger Melo', score: 43 },
  { name: 'Alfredo Braga', score: 234 },
  { name: 'Pedro H. Silva', score: 261 },
  { name: 'Ana Paula Rocha', score: 491 },
  { name: 'Vinicius Costa', score: 167 },
  { name: 'Roger Melo', score: 137 },
  { name: 'Alfredo Braga', score: 135 },
  { name: 'Ana Paula Rocha', score: 359 },
  { name: 'Pedro H. Silva', score: 133 }
]

// Obtenha a soma total da pontuação do Roger Melo.

const rogerMeloScore = phaseScores.reduce((accumulator, player) => {
  if (player.name === 'Roger Melo') {
    accumulator += player.score
  }

  return accumulator
}, 0)

console.log(rogerMeloScore)