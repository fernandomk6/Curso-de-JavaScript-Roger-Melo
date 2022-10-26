console.log('start')

setTimeout(() => {
  console.log('timeout')
})

Promise.resolve('Promise')
  .then((value) => {
    console.log(value)
  })

console.log('end')