import { author } from "../models/Author.js";

export default class AuthorController {
    // List all registers
    static async index(req, res) {
        try {
            const authors = await author.find({})
            if (authors) {
                return res.status(200).json(authors)
            }

            return res.status(404).json({ "message": "Authors not found" })
        } catch (error) {
            return res.status(500).json({ message: `${error.message} - request failed` })
        }
    }

    static async show(req, res) {
        try {
            const id = req.params.id
            const authorFound = await author.findById(id)
            if (authorFound) {
                return res.status(200).json(authorFound)
            }

            return res.status(404).json({ "message": "Author not found" })
        } catch (error) {
            return res.status(500).json({ message: `${error.message} - request failed` })
        }
    }

    static async store(req, res) {
        try {
            const newAuthor = await author.create(req.body)
            return res.status(201).json({ message: "Add author successfully", newAuthor })
        } catch (error) {
            return res.status(500).json({ message: `${error.message} - request failed` })
        }
    }

    static async update(req, res) {
        try {
            const id = req.params.id
            const authorFound = await author.findByIdAndUpdate(id, req.body)
            if (authorFound) {
                return res.status(201).json({ message: "Updated author successfully", bookFound })
            }

            return res.status(404).json({ "message": "Author not found" })
        } catch (error) {
            return res.status(500).json({ message: `${error.message} - request failed` })
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
            res.status(500).json({ message: `${error.message} - request failed` })
        }
    }
}