// Tagged Template Literals

const func = (strArray, variable1, variable2) => {
    console.log({
        strArray,
        variable1,
        variable2
    })
}

const variable1 = 'Variavel 1'
const variable2 = 'Variable 2'

console.log(
    func`Esse é um texto antes da variavel1 ${variable1} esse texto vem depois da variable 1 ${variable2}`
)


// Exemplo Tagged Template Literals
function negrito(arrayStrings, ...valores) {

    // arrayStrings = 
    // [
    //     '', 
    //     ' trabalha na Caelum/Alura como desenvolvedor e instrutor e você pode encontrá-lo nas redes sociais procurando por ', 
    //     ''
    // ]

    // valores =
    // ['Paulo Scalercio', '@PauloScalercio']

    return arrayStrings.reduce((acumulador, string, i) => {
     return `${acumulador}${string}${valores[i] ? `<strong>${valores[i]}</strong>` : ''}`
   }, '')
}

const nome = 'Paulo Scalercio'
const redeSocial = '@PauloScalercio'

console.log(
    negrito`
        ${nome} trabalha na Caelum/Alura como desenvolvedor e instrutor 
        e você pode encontrá-lo nas redes sociais procurando por ${redeSocial}
    `
)


// Outro exemplo

const formatTextToHTML = (strings, ...values) => {
    const result = strings.reduce((accumulator, string, index) => {
      return `${accumulator}${string}${values[index] ? `<span>${values[index]}</span>` : ''}`
  
    }, '')
  
    console.log(result)
  }
  
const name = 'Fernando'
const age = 23
const mother = 'Helenice'
const newVariable = 'nova variavel'

formatTextToHTML`${name} é filho da ${mother} e tem ${age} anos de idade e gosta de matemática ${newVariable}`
