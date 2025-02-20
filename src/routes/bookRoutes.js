import { Router } from 'express'
import BookController from '../controllers/BookController.js'
import pagination from '../middlewares/pagination.js'
export const bookRouter = Router()

bookRouter.get('/books', BookController.index, pagination)
bookRouter.get('/books/searchPublisher', BookController.searchBookByPublisher)
bookRouter.get('/books/search', BookController.searchBookByFilter, pagination)
bookRouter.get('/books/:id', BookController.show)
bookRouter.post('/books', BookController.store)
bookRouter.put('/books/:id', BookController.update)
bookRouter.delete('/books/:id', BookController.delete)

