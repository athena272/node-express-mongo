import express from 'express'
import connectDatabase from './config/dbConnect.js';
import { book } from './models/Book.js';

const conection = await connectDatabase()
conection.on('error', (error) => console.error("Something went wrong 💀\n", error))
conection.once('open', () => console.log("Connection established 🔥"))

export const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).send("Curso de Node.js")
})

app.get('/books', async (req, res) => {
    const books = await book.find({})
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
    const bookId = searchBookId(req.params.id)
    if (bookId) {
        books[bookId].title = req.body
        res.status(200).send("Updated book successfully")
    }
    else {
        res.status(404).json({ "message": "Book not found" })
    }
})

app.delete('/books/:id', (req, res) => {
    const bookId = searchBookId(req.params.id)
    if (bookId) {
        books.splice(bookId, 1)
        res.status(200).send("Deleted book successfully")
    }
    else {
        res.status(404).json({ "message": "Book not found" })
    }
})