import InvalidRequest from '../errors/InvalidRequest.js'

export default async function pagination(req, res, next) {
    try {
        let { limit = 5, page = 1, sorting = "_id:-1" } = req.query;
        let [fieldSorting, sort] = sorting.split(":");

        limit = parseInt(limit);
        page = parseInt(page);
        sort = parseInt(sort);

        // 🚨 Se `req.result` não existir, retorna erro
        if (!req.result || typeof req.result.find !== "function") {
            return next(new InvalidRequest("Invalid request: No valid query found."));
        }

        console.log("🚀 ~ pagination ~ Executing query with pagination...");

        const paginationResult = await req.result
            .sort({ [fieldSorting]: sort })
            .skip((page - 1) * limit)
            .limit(limit)
            .populate("author")
            .exec();

        console.log("🚀 ~ pagination ~ paginationResult:", paginationResult);

        if (paginationResult.length > 0) {
            return res.status(200).json(paginationResult);
        }

        next(new NotFound("Books not found"));
    } catch (error) {
        next(error);
    }
}