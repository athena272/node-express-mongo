import mongoose from "mongoose";

export function errorManipulator(error, req, res, next) {
    if (error instanceof mongoose.Error.CastError) {
        return res.status(400).json({ message: "Bad Request: Invalid data format. Please check your input." });
    }

    return res.status(500).json({ message: "Internal Server Error: An unexpected error occurred. Please try again later." });
}