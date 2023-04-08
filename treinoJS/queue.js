class Queue {
    constructor() {
        this.data = []
    }


enqueue(item) {
    this.data.push(item)
}

dauqeue() {
    const item = this.data.shift()
    console.log(`${item} saiu da fila`)
}
}

const fila = new Queue()

fila.enqueue('maria')
fila.enqueue('mateus')
fila.enqueue('castiel')




