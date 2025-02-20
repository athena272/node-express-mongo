import { author } from "../models/index.js"

export async function processSearch(req) {
    const { title, publisher, maxPages, minPages, authorName } = req.query;
    // const regex = new RegExp(title,  "i")
    // if (title) search.title = regex

    let search = {};
    if (publisher) search.publisher = publisher;
    if (title) search.title = { $regex: title, $options: "i" };

    if (minPages || maxPages) search.number_pages = {};
    if (minPages) search.number_pages.$gte = minPages;
    if (maxPages) search.number_pages.$lte = maxPages;

    if (authorName) {
        const authorFound = await author.findOne({ name: authorName });
        if (authorFound) {
            search.author = authorFound._id;
        } else {
            console.log("🚀 ~ processSearch ~ No author found for:", authorName);
            return {}; // 🚨 Retorna um objeto vazio ao invés de `null` ou `undefined`
        }
    }

    console.log("🚀 ~ processSearch ~ search:", search); // Log para depuração
    return search;
}