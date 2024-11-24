import mongoose from 'mongoose';
import express from 'express'
import connectDatabase from './config/dbConnect.js';
import { routes } from './routes/index.js';

const conection = await connectDatabase()
conection.on('error', (error) => console.error("Something went wrong 💀\n", error))
conection.once('open', () => console.log("Connection established 🔥"))

export const app = express()
routes(app)

app.use((error, req, res, next) => {
    if (error instanceof mongoose.Error.CastError) {
        return res.status(400).json({
            message: "Bad Request: Invalid data format. Please check your input."
        });
    }

    return res.status(500).json({
        message: "Internal Server Error: An unexpected error occurred. Please try again later."
    });
});
// app.use((error, req, res, next) => {

// })
