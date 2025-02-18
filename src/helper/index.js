export function procesSearch(req) {
    const { title, publisher } = req.query
    // const regex = new RegExp(title,  "i")
    // if (title) search.title = regex

    const search = {}
    if (publisher) search.publisher = publisher
    if (title) search.title = { $regex: title, $options: "i" }

    return search
}