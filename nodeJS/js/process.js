// // lista de argumentos
// console.log(process.argv)


// // const firstName = process.argv[2]
// // const lastName = process.argv[3]
// // console.log(`Seu nome é ${firstName} ${lastName}`)

// //console.log()
// const desafio = process('./desafio')
// console.log(desafio)
const getFlag = require('./desafio')

console.log(`Oi ${getFlag('--name')}. ${getFlag('--greeting')}`)