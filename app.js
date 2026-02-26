// Import the framework and instantiate it
import Fastify from 'fastify'

const fastify = Fastify({
    logger: true
})

// Declare a route
fastify.get('/', async function handler(request, reply) {
    const pessoas = [
        { nome: "kauã", idade: 19 },
        { nome: "gabriel", idade: 27 },
    ];
    return pessoas;
})

// Run the server!
try {
    await fastify.listen({ port: 3000 })
} catch (err) {
    fastify.log.error(err)
    process.exit(1)
}