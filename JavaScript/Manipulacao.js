// Prototype

// * Prototype- based language
// *prototype ChannelSplitterNode
// *__proto__

// Type conversion (typecasting) vs Type coersion
// * Alteração de um tipo de dado para outro tipo
//console.log(Number("9") + 5)

//Manibulando string e número
// Transformar string em numero e numero em string 
// let string = "123"
// console.log(String)
// let number = 321
// console.log(Number)

// Manipulando String e números 

// Contar quantos caracteres tem uma palavra e quantos digitos tem um numero
// let word = "adriel"
// length

// Transformar um numero quebrada com 2 casas decimais e trocar ponto por virgula
 //let number = 329.398844
 //console.log(number.toFixed(2).replace(".", ",")) // trocar o pponto por virgula 


// Para separar um texto por espaços, pode-se usar o método split(" "), que transforma o texto em um array de strings baseado no argumento, que no caso são os espaços. Para juntar esse array é possível usar o método join('"), que juntaria essas palavras sem nenhum separador, porém colocando um argumento, no caso um underscore ( join("_") ) as palavras são juntadas com o argumento de separador.

// let phrase = "Eu quero viver"
// let myArray = phrase.split("")
// console.log(myArray)
// let phraseWithUnderscore = myArray.join("")
// console.log(phraseWithUnderscore.toLocaleUpperCase())


// verificar se o texto contém a palavra Amor

// let phrase = "Eu quero viver o Amor"
// console.log(phrase.includes("Amor"))

// criar array com construtor
// let myArray = new Array("a", "b", "c")
// console.log(myArray)

//conta o elementos de array

// console.log(["a", {type: Array}, "b", "c"])

//Transformar uma cadeia de caracteres em elementos de um array

// let word = "manipulação"
// console.log(Array.from(word))

// Existem várias maneiras de manipular arrayscomo: o 
// -> método push(), que adiciona um elemento no final do array,
// -> o método unshift(), que adiciona um elemento no começo do array,
// -> o método pop(), que retira um elemento do final do array,
// -> o método shift(), que retira um elemento do começo do array
// -> o método slice(), que recebe como argumentos a posição de início e a posição do fim da parte que você quer selecionar, e retorna os valores destas posições
// -> o método splice(), que recebe como argumentos a posição de início e a quantidade de elementos que você quer remover
// -> e o método indexOff(), que encontra o index do valor que recebe como argumento em um array.


