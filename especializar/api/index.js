const express = require('express')
const axios = require('axios')

const app = express()

app.listen('3000')

app.route('/').get( (req, res) => {

    axios.get('https://api.github.com/users/adriellyvitoria')
    .then(result => res.send(`<img src="${result.data.avatar_url}"/>`))
    .catch(erro => console.log(error))
})

// app.route('/').get((req, res) => res.send(req.query.nome ) )
// app.route('/about/user').get((req, res) => res.send(req.query  ) )

//## route params definir em qual parans vai entra dependendo da routa
// app.route('/').get ( (req, res) => res.send('oi') )
// app.route('/:variavel').get( (req, res) => res.send(req.params.variavel))
// app.route('/identidade/:nome').get (  (req, res) => res.send(req.params.nome ))

//middlewaew ## Body Params
// app.use(express.json())

// app.route('/').post( (req, res) => {
//     const { nome, cidade} = req.body
//     res.send(`Meu nome é ${nome}, moro em ${cidade}`)
// })

//app.route('/').get( (req, res) => res.send("olá hellor") )
// app.use(express.json())
//let author= 'Adrielly'
// app.route("/").get ( (req, res)  => res.send(author))

//middleware
//app.use(express.json())
//app.route("/").post( (req, res) => res.send(res.body) )
// objetivo do put é editar 
// app.route('/').put( (req, res) => {
//     author = req.body.author
//     res.send(author)
// } )


// ## delete
// app.route('/:identificador').delete ( (req,res) => {
//     res.send(req.params.identificador)
// } )
