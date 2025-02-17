import mongoose from "mongoose";
import { authorSchema } from "./Author.js";

const bookSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    title: { 
        type: String, 
        required: [true, "Book's title is required"] 
    },
    publisher: { type: String },
    price: { 
        type: Number, 
        required: [true, "Book's price is required"]
    },
    number_pages: { type: Number },
    author: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "authors",
        required: [true, "Book's author is required"]
    }
}, { versionKey: false })

export const book = mongoose.model('books', bookSchema)