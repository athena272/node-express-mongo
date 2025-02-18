import express from 'express'
import connectDatabase from './config/dbConnect.js';
import { routes } from './routes/index.js';
import errorHandler from './middlewares/errorHandler.js';
import error404Handler from './middlewares/error404Handler.js';

const conection = await connectDatabase()
conection.on('error', (error) => console.error("Something went wrong 💀\n", error))
conection.once('open', () => console.log("Connection established 🔥"))

export const app = express()
routes(app)

app.use(error404Handler)
app.use(errorHandler);
// app.use((error, req, res, next) => {

// })
