import mongoose from "mongoose";
import BaseError from "../errors/BaseError.js";
import InvalidRequest from "../errors/InvalidRequest.js";
import ValidationInputsError from "../errors/ValidationInputsError.js";

export function errorManipulator(error, req, res, next) {
    console.log("🚀 ~ errorManipulator ~ error:", error)// imprime o erro para a pessoa desenvolvedora

    if (error instanceof mongoose.Error.CastError) {
        new InvalidRequest().sendResponse(res)
    } else if (error instanceof mongoose.Error.ValidationError) {
       new ValidationInputsError(error).sendResponse(res)
    }

    new BaseError({
        message: 'Internal Server Error: An unexpected error occurred. Please try again later.',
        status: 500,
    }).sendResponse(res)
}