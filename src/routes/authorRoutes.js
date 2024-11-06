import { Router } from 'express'
import AuthorController from '../controllers/AuthorController.js'
export const authorRouter = Router()

authorRouter.get('/authors', AuthorController.index)
authorRouter.get('/authors/:id', AuthorController.show)
authorRouter.post('/authors', AuthorController.store)
authorRouter.put('/authors/:id', AuthorController.update)
authorRouter.delete('/authors/:id', AuthorController.delete)