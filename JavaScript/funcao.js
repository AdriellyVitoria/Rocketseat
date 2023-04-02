// criar um app de frases motivacionais 

//declaration - declaração de função
//agrupamento e reutilizar o código

function createPhrases(){
    console.log("Estudar é muito bom")
    console.log("paciencia e persistencia")
    console.log("revisão é mãe do aprendizado")
}
// executar a função
//createPhrases()
//console.log("fim do programa")

//function expression
//passado parametros
// const sum = function(nu1, num2){
//    let  total = nu1 + num2
//     return total 
//  }
// let nu1 = 34
// let num2 = 25
// sum(nu1, num2) //argumentos

// //console.log(nu1)
// //console.log(num2)
// console.log(sum(nu1, num2))

//função scope 

let subject 

function createThink(){
    subject = "study"
    return subject
}

console.log(subject)
console.log(createThink(subject))
console.log(subject)

