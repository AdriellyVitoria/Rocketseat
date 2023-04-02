/* ## Variaveis e tipos de dados */

/* // declaração or declaration */
var name

/* // assignment or atribuição de valores */
name = "mike"

/* // que tipo de dado foi colocado na variavel 
 console.log(typeof name)*/

/* Agrupamento de declaração */
let age, isHuman
age = 20
isHuman = true

/*multiplos aroguemntos na funcao
console.log(name, age, isHuman)*/

/*Escrita de texto + variáveis 
concatenando valores:*/
//console.log("o " + name + " tem  " + age + " anos.")

/* Interpolando valores com template literals */
//console.log(`O ${name} tem ${age}`)

/*Object */

const person = {
    name: "jonh",
    age: 30,
    weight: 88.6,
    isAdmin: true
}
 //console.log(person.name) // chamar o nome do objeto ponto e atributo 

 // lista
 const animais = [
    "lion",
    "monkey",
    "cat",
    {
        name: 'adrielly',
        age: 10
    }
]

//acessar valores dentro do Array

console.log(animais[0]) // vai pegar o numero do intem na lista 
console.log(animais[3].name) // para pegar a informação dentro de chaves



