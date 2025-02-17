export default class BaseError extends Error {
    constructor({ message, status}) {
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