# Templates strings

Quando você não for interpolar variáveis, usar aspas, ou quebrar linha,
não tem a necessidade de usar templates strings.

Agora se sua string precisa interpolar uma variável, ou conterá aspas, ou
quebra de linha ou é um template html, sempre oppite por usar uma
template string.

## Tagged Template Strings

```js
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

/*
    <strong>Paulo Scalercio</strong> trabalha na Caelum/Alura como desenvolvedor e instrutor 
    e você pode encontrá-lo nas redes sociais procurando por <strong>@PauloScalercio</strong>
/*
```
