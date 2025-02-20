import { author } from "../models/index.js";
import NotFound from "../errors/NotFound.js";

export default class AuthorController {
    // List all registers
    static async index(req, res, next) {
        try {
            const authors = author.find()
            if (authors) {
                req.result = authors
                return next()
            }

            next(new NotFound('Authors not found'))
        } catch (error) {
            next(error)
        }
    }

    static async show(req, res, next) {
        try {
            const id = req.params.id
            const authorFound = await author.findById(id)
            if (authorFound) {
                return res.status(200).json(authorFound)
            }

            next(new NotFound('Author not found'))
        } catch (error) {
            next(error)
        }
    }

    static async store(req, res, next) {
        try {
            const newAuthor = await author.create(req.body)
            return res.status(201).json({ message: "Add author successfully", newAuthor })
        } catch (error) {
            next(error)
        }
    }

    static async update(req, res, next) {
        try {
            const id = req.params.id
            const authorFound = await author.findByIdAndUpdate(id, req.body)
            if (authorFound) {
                return res.status(201).json({ message: "Updated author successfully", bookFound })
            }

            next(new NotFound('Author not found'))
        } catch (error) {
            next(error)
        }
    }

    static async delete(req, res, next) {
        try {
            const id = req.params.id
            const authorFound = await author.findByIdAndDelete(id)
            if (authorFound) {
                return res.status(201).json({ message: "Deleted author successfully", authorFound })
            }

            next(new NotFound('Author not found'))
        } catch (error) {
            next(error)
        }
    }
}