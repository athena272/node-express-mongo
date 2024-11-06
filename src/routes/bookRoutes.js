import { Router } from 'express'
import BookController from '../controllers/BookController.js'
export const bookRouter = Router()

bookRouter.get('/books', BookController.index)
bookRouter.get('/books/:id', BookController.show)
bookRouter.post('/books', BookController.store)
bookRouter.put('/books/:id', BookController.update)
bookRouter.delete('/books/:id', BookController.delete)

