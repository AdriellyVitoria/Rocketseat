const {EventEmitter} = require('events')
const ev = new EventEmitter()
//once para ouvir uma vez
ev.on('saySomething', (a) => {
    console.log('eu ouvir vc', a)
})

ev.emit('saySomething' , 'adrie')


