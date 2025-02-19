export function procesSearch(req) {
    const { title, publisher, maxPages, minPages, authorName } = req.query
    // const regex = new RegExp(title,  "i")
    // if (title) search.title = regex

    const search = {}
    if (publisher) search.publisher = publisher
    if (title) search.title = { $regex: title, $options: "i" }

    if (minPages || maxPages) search.number_pages = {}
    //get = greater than or equal
    if (minPages) search.number_pages.$gte = minPages
    // let = less than or equal
    if (maxPages) search.number_pages.$lte = maxPages

    if (authorName)  {
        
    }

    return search
}