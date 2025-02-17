import BaseError from "./BaseError.js";

export default class NotFound extends BaseError {
    constructor(message = 'Not found') {
        super(message, 404)
    }
}