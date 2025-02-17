import BaseError from "./BaseError.js";

export default class InvalidRequest extends BaseError {
    constructor() {
        super({ 
            message: "Bad Request: Invalid data format. Please check your input.", 
            status: 400,
        })
    }
}