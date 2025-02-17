import BaseError from "./BaseError.js";

export default class InvalidRequest extends BaseError {
    constructor(message = 'Bad Request: Invalid data format. Please check your input.') {
        super(message, 400)
    }
}