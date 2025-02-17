import mongoose from "mongoose";

export function errorManipulator(error, req, res, next) {
    console.log(error);  // imprime o erro para a pessoa desenvolvedoraF
    
    if (error instanceof mongoose.Error.CastError) {
        return res.status(400).json({ message: "Bad Request: Invalid data format. Please check your input." });
    } else if (error instanceof mongoose.Error.ValidationError) {
        const errorMessages = Object.values(error.errors).map(error => error.message).join("; ") 

        return res.status(400).json({ message: `The following errors were found: ${errorMessages}`})
    }

    return res.status(500).json({ message: "Internal Server Error: An unexpected error occurred. Please try again later." });
}