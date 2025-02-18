import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    title: {
        type: String,
        required: [true, "Book's title is required"]
    },
    publisher: {
        type: String,
        required: [true, "Book's publisher is required"],
    },
    price: {
        type: Number,
        required: [true, "Book's price is required"],
        min: 5,
        max: 500
    },
    number_pages: {
        type: Number,
        min: [10, "The number of pages must be between 10 and 5000. Value provided: {VALUE}"],
        max: [5000, "The number of pages must be between 10 and 5000. Value provided: {VALUE}"]
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "authors",
        required: [true, "Book's author is required"]
    }
}, { versionKey: false })

export const book = mongoose.model('books', bookSchema)