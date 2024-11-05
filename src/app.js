import express from 'express'
export const app = express()
app.use(express.json())
const books = [
    {
        id: 1,
        título: "O Senhor dos Anéis"
    },
    {
        id: 2,
        título: "O Hobbit"
    }
];

function searchBook(id) {
    const book = books.find(book => book.id === Number(id))
    return book
}

app.get('/', (req, res) => {
    res.status(200).send("Curso de Node.js")
})

app.get('/books', (req, res) => {
    res.status(200).json(books)
})

app.get('/books/:id', (req, res) => {
    const book = searchBook(req.params.id)
    res.status(200).json(book)
})

app.post('/books', (req, res) => {
    books.push(req.body)
    res.status(201).send("Add book successfully")
})