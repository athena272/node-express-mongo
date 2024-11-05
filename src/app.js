import express from 'express'
export const app = express()
app.use(express.json())
const books = [
    {
        id: 1,
        title: "O Senhor dos Anéis"
    },
    {
        id: 2,
        title: "O Hobbit"
    }
];

function searchBook(id) {
    const book = books.find(book => book.id === Number(id))
    return book
}

function searchBookID(id) {
    const bookId = books.findIndex(books => books.id === Number(id))
    console.log("🚀 ~ searchBookID ~ bookId:", bookId)
    return bookId
}

app.get('/', (req, res) => {
    res.status(200).send("Curso de Node.js")
})

app.get('/books', (req, res) => {
    res.status(200).json(books)
})

app.get('/books/:id', (req, res) => {
    const book = searchBook(req.params.id)
    if (book) {
        res.status(200).json(book)
    }
    else {
        res.status(404).json({ "message": "Book not found" })
    }
})

app.post('/books', (req, res) => {
    books.push(req.body)
    res.status(201).send("Add book successfully")
})

app.put('/books/:id', (req, res) => {
    const bookID = searchBookID(req.params.id)
    if (bookID) {
        books[bookID].title = req.body
        res.status(200).send("Updated book successfully")
    }
    else {
        res.status(404).json({ "message": "Book not found" })
    }
})