import InvalidRequest from "./InvalidRequest.js";

export default class ValidationInputsError extends InvalidRequest {
    constructor(error) {
        const errorMessages = Object.values(error.errors).map(error => error.message).join("; ")

        super(`The following errors were found: ${errorMessages}`)
    }
}