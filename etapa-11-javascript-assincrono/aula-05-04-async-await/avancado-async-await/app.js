const one = () => {
  console.log('in a simple function that returns a promise')
  return Promise.resolve('promise classica resolvida')
}

const asyncFunction = async () => {
  console.log('in async function')
  const result = await one()
  console.log(result)
}

console.log('before a function')
asyncFunction()
console.log('after a function')

/*
o que será impresso no console?

'before a function'
'in async function'
'in a simple function that returns a promise'
'after a function'
'promise classica resolvida'

microtask

const asyncFunction = async () => {
  console.log('in async function')
  const result = (paused here) await one()
  console.log(result)
}
*/