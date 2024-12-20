import { author } from "../models/Author.js";

export default class AuthorController {
    // List all registers
    static async index(req, res, next) {
        try {
            const authors = await author.find({})
            if (authors) {
                return res.status(200).json(authors)
            }

            return res.status(404).json({ "message": "Authors not found" })
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

            return res.status(404).json({ "message": "Author not found" })
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

            return res.status(404).json({ "message": "Author not found" })
        } catch (error) {
            next(error)
        }
    }

    static async delete(req, res) {
        try {
            const id = req.params.id
            const authorFound = await author.findByIdAndDelete(id)
            if (authorFound) {
                return res.status(201).json({ message: "Deleted author successfully", authorFound })
            }

            return res.status(404).json({ "message": "Author not found" })
        } catch (error) {
            next(error)
        }
    }
}