import mongoose from 'mongoose'
import { author } from '../models/Author.js'
import { book } from '../models/Book.js'

// Singleton instance
export default class BookController {
    // List all registers
    static async index(req, res) {
        try {
            const books = await book.find({})
            if (books) {
                return res.status(200).json(books)
            }

            return res.status(404).json({ "message": "Books not found" })
        } catch (error) {
            return res.status(500).json({ message: `${error.message} - request failed` })
        }
    }

    static async show(req, res) {
        try {
            const id = req.params.id
            const bookFound = await book.findById(id)
            if (bookFound) {
                return res.status(200).json(bookFound)
            }

            return res.status(404).json({ "message": "Book not found" })
        } catch (error) {
            if (error instanceof mongoose.Error.CastError) {
                return res.status(400).json({ "message": "Bad request" })
            }

            return res.status(500).json({ message: `${error.message} - request failed` })
        }
    }

    static async store(req, res) {
        try {
            const reqBook = req.body
            const authorFound = await author.findById(reqBook.author)
            const fullBook = { ...reqBook, author: { ...authorFound._doc } }
            const newBook = await book.create(fullBook)
            return res.status(201).json({ message: "Add book successfully", newBook })
        } catch (error) {
            return res.status(500).json({ message: `${error.message} - request failed` })
        }
    }

    static async update(req, res) {
        try {
            const id = req.params.id
            const bookFound = await book.findByIdAndUpdate(id, req.body)
            if (bookFound) {
                return res.status(201).json({ message: "Updated book successfully", bookFound })
            }

            return res.status(404).json({ "message": "Book not found" })
        } catch (error) {
            return res.status(500).json({ message: `${error.message} - request failed` })
        }
    }

    static async delete(req, res) {
        try {
            const id = req.params.id
            const bookFound = await book.findByIdAndDelete(id)
            if (bookFound) {
                return res.status(201).json({ message: "Deleted book successfully", bookFound })
            }

            return res.status(404).json({ "message": "Book not found" })
        } catch (error) {
            res.status(500).json({ message: `${error.message} - request failed` })
        }
    }

    static async searchBookByPublisher(req, res) {
        try {
            const publisher = req.query.publisher
            const booksByPublisher = await book.find({ publisher })
            if (booksByPublisher) {
                return res.status(200).json(booksByPublisher)
            }

            return res.status(404).json({ "message": "Books not found" })
        } catch (error) {

        }
    }
}
