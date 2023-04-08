// Funcoes aceitam qualquer tipo de dado como argumento

function imprimirDado(dado) {
    console.log('outras tarefas')
    console.log(dado())
}

// imprimirDado(1) // numero
// imprimirDado('texto') // String
// imprimirDado(true) // Boleano
// imprimirDado({nome: 'Adrielly'}) // objeto
// imprimirDado([1, 2, 3]) // array

imprimirDado(function () {
    return 'olá mundo'
}) // funcao