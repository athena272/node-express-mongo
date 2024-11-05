import http from 'http'

const PORT = 3000

const rotas = {
    "/": "Curso de Node.js",
    "/books": "Entrei na rota de livros",
    "/authors": "Entrei na rota de authors",
};

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" })
    console.log("🚀 ~ server ~ req.url:", req.url)
    res.end(rotas[req.url])
})

server.listen(PORT, () => {
    console.log("Server on 🔥🔥🔥")
})