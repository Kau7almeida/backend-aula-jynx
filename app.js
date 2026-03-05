import Fastify from 'fastify'

const fastify = Fastify({
    logger: true
})

fastify.get('/', () => {
    return "server is running at port 3000";
})

let users = [];

// rota de busca
fastify.get("/users", async () => {
    return users;
});

// criar usuarios
fastify.post("/users", async (req, reply) => {
    // captura o corpo da requisição
    let obj = await req.body;
    // insere o nome enviado na request para a lista de usuários
    users.push(obj.nome);
    // retorna uma mensagem ao usuário
    return `O usuário ${obj.nome} foi adicionado`;
});

// atualizar usuarios
fastify.put("/users", async (req, reply) => {
    let obj = await req.body;
    users.splice(obj.indice, 1, obj.nome);
    return `O usuário foi atualizado para ${obj.nome}`;
});

// deletar usuarios
fastify.delete("/users", async (req, reply) => {
    let obj = await req.body;
    users.splice(obj.indice, 1);
    return "Usuário deletado com sucesso"
});

try {
    await fastify.listen({ port: 3000 })
} catch (err) {
    fastify.log.error(err)
    process.exit(1)
}