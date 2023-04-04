// Control flow
// if Se; else se não

// let temperatura = 36.5

// if (temperatura >= 37) {
//     console.log("febre")
// } else {

// }
// console.log("a")
// console.log("b")

// Switch
// let expression = 'a'

// switch(expression) {
//     case "a":
//         // Codigo 
//         console.log('a')  
//     case "b":
//         //codigo para expressao b
//         console.log('b')
//     default:
//         console.log('default')
//         break    
// }

// throw
// function sayMyName(name = "") {
//     if (name == ""){ 
//         throw "nome obrigatorio"
//     }
//     console.log("depois do erro")
// }

// // try...catch
// sayMyName()
// try {
//     sayMyName()
// } catch(e) {
//     console.log(e)
// }

// Estrutura de repeticão
// for... of

// let name = "adrielly"
// let names = ['joao', 'pedro', 'paulo']

// for (let char of names){
//     console.log(char)
// }

//for...in

let person = {
    name: "jonh",
    age: 30,
    weight: 88.6
}

for (let property in person) {
    console.log(property)
    console.log(person[property])
}