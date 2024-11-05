import express from 'express';
import { bookRouter } from './bookRoutes.js'

// export const app = express()
// app.use(express.json())
export const routes = (app) => {
    app.route("/").get((req, res) => res.status.send("Curso de Node.js"))

    app.use(express.json(), bookRouter)
}