const state = (() => {
  let exchangeRates = {}

  return {
    getExchangeRates: () => exchangeRates,
    setExchangeRates: newExchangeRates => {
      if (!newExchangeRates.conversion_rates) {
        console.log('O objeto precisa ter uma propriedade conversion_rates')
        return
      }

      exchangeRates = newExchangeRates
      return exchangeRates
    }
  }
})()

console.log(state.getExchangeRates())
console.log(state.setExchangeRates({
  conversion_rates: { USD: 1 }
}))

console.log(state.getExchangeRates())

/*

state armazena um objeto, que possuí métodos que manipularão um objeto
que foi declarado no escopo léxico. O escopo aonde o objeto que será manipulado
foi declarado é o escopo da função imediatamente invocada.

state.getExgangeRates sempre vai retornar uma referencia ao mesmo objeto
state.setExchangeRates vai alterar sempre a mesma referência de objeto e retornar essa
referência.

Os conceitos chaves aqui são

- IIFE
- Clousures
- Escopo léxico

Esse state também pode ser descrito como um objeto que possúi uma propriedade privada.
Aonde somente é possível acessa-lá atraves da propria classe. No caso, atraves do objeto state
que é como se fosse uma instancia de class.

Essa IIFE usada é como uma factory function e a let exchangeRates é como uma propriedade
privada.

*/