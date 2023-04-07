process.stdout.write("alguma coisa")

const questions = [
    "oq eu aprendir",
    'oq poderia fazer pra melhor',
    'oq medeicou felix hj?'
]

const ask = ( index = 0) => {
    process.stdout.write('\n\n' + questions[index] + ' > ')
}

ask()

const answers = []
process.stdin.on('data', data => {
    answers.push(data.toString().trim())
    if (answers.length < questions.length) {
        ask(answers.length)
    } else {
        process.exit()
    }
})

process.on('exit', () => {
    console.log(`
    Bacana mayk!!

    pergunta
    ${answers[0]}

    pergunta
    ${answers[1]}

    pergunta
    ${answers[2]}

    pergunta
    ${answers[3]}

    volte amnh`
   
    )
})