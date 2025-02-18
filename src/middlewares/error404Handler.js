import PageNotFound from "../errors/NotFound.js"

export default function error404Handler(req, res, next) {
    const error404 = new PageNotFound()
    next(error404)
}