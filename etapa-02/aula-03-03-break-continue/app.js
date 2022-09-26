const points = [0, 10, 20, 30, 90, 50, 100, 250]

for (let i = 0; i < points.length; i++) {
  if (points[i] === 0) {
    continue
  }
  
  console.log(points[i])

  if (points[i] >= 100) {
    console.log('Parabéns, você atingiu a pontuação máxima.')
    break
  }
}