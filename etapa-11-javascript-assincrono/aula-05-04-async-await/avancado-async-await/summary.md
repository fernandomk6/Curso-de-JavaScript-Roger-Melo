# Avançado em async await

Async functions retornam implicitamente uma promise

```js
// ambos os codigos fazem a mesma coisa

console.log(Promise.resolve('Hello'))
console.log((async () => 'Hello')())
```

