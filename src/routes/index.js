import express from 'express';
import { bookRouter } from './bookRoutes.js'
import { authorRouter } from './authorRoutes.js';

// export const app = express()
// app.use(express.json())
export const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Curso de Node.js"))

    app.use(express.json(), bookRouter, authorRouter)
}