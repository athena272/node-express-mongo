import mongoose from "mongoose";
import { authorSchema } from "./Author.js";

const bookSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    title: { type: String, required: true },
    publisher: { type: String },
    price: { type: Number, required: true },
    number_pages: { type: Number },
    author: authorSchema
}, { versionKey: false })

export const book = mongoose.model('books', bookSchema)