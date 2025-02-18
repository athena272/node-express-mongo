import NotFound from '../errors/NotFound.js'
import { author } from '../models/Author.js'
import { book } from '../models/Book.js'

// Singleton instance
export default class BookController {
    // List all registers
    static async index(req, res, next) {
        try {
            const books = await book.find({})
            if (books) {
                return res.status(200).json(books)
            }

            next(new NotFound("Books not found"))
        } catch (error) {
            next(error)
        }
    }

    static async show(req, res, next) {
        try {
            const id = req.params.id
            const bookFound = await book.findById(id)
            if (bookFound) {
                return res.status(200).json(bookFound)
            }

            next(new NotFound("Book not found"))
        } catch (error) {
            next(error)
        }
    }

    static async store(req, res, next) {
        try {
            const reqBook = req.body;

            // Verifica se o campo "author" foi enviado na requisição
            if (!reqBook.author) {
                return res.status(400).json({ message: "Book's author is required" });
            }

            // Busca o autor no banco de dados
            const authorFound = await author.findById(reqBook.author);

            // Se o autor não for encontrado, retorna um erro
            if (!authorFound) {
                return res.status(400).json({ message: "Invalid author: Author not found" });
            }

            // Cria o livro associando o ObjectId do autor
            const newBook = await book.create(reqBook);
            return res.status(201).json({ message: "Book added successfully", newBook });

        } catch (error) {
            next(error);
        }
    }

    static async update(req, res, next) {
        try {
            const id = req.params.id
            const bookFound = await book.findByIdAndUpdate(id, req.body)
            if (bookFound) {
                return res.status(201).json({ message: "Updated book successfully", bookFound })
            }

            next(new NotFound("Book not found"))
        } catch (error) {
            next(error)
        }
    }

    static async delete(req, res, next) {
        try {
            const id = req.params.id
            const bookFound = await book.findByIdAndDelete(id)
            if (bookFound) {
                return res.status(201).json({ message: "Deleted book successfully", bookFound })
            }

            next(new NotFound("Book not found"))
        } catch (error) {
            next(error)
        }
    }

    static async searchBookByPublisher(req, res, next) {
        try {
            const publisher = req.query.publisher
            const booksByPublisher = await book.find({ publisher })
            if (booksByPublisher && booksByPublisher.length > 0) {
                return res.status(200).json(booksByPublisher)
            }

            next(new NotFound("Book not found"))
        } catch (error) {
            next(error)
        }
    }
}
