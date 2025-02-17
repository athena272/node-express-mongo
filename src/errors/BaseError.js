export default class BaseError extends Error {
    constructor(message = 'Internal Server Error: An unexpected error occurred. Please try again later.', status = 500) {
        super()
        this.message = message
        this.status = status
    }

    sendResponse(res) {
        res.status(this.status).json({
            message: this.message,
            status: this.status
        })
    }
}