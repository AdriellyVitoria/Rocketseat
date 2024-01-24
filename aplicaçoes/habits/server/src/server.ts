import fastify from "fastify";
import { PrismaClient } from '@prisma/client'

const app = fastify()
const prisma = new PrismaClient()

app.get('/hello',  async () => {
    const hobits = await prisma.habit.findMany()

    return hobits
})

app.listen({
    port: 3333,
}).then( () => {
    console.log('HTTP server running')
})