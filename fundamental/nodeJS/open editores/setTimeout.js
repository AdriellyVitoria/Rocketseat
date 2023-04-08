// settimeout rodar uma função depois de X milssegundos

const timeOut = 3000
const finished = () => console.log('done')

setTimeout(finished, timeOut)
console.log('mostar')

