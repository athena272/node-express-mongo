import mongoose from "mongoose";
import BaseError from "../errors/BaseError.js";
import InvalidRequest from "../errors/InvalidRequest.js";
import ValidationInputsError from "../errors/ValidationInputsError.js";
import NotFound from "../errors/NotFound.js";

export default function errorHandler(error, req, res, next) {
    console.log("🚀 ~ errorManipulator ~ error:", error)// imprime o erro para a pessoa desenvolvedora

    if (error instanceof mongoose.Error.CastError) {
        new InvalidRequest().sendResponse(res)
    } else if (error instanceof mongoose.Error.ValidationError) {
       new ValidationInputsError(error).sendResponse(res)
    } else if (error instanceof NotFound) {
        error.sendResponse(res)
    }

    new BaseError().sendResponse(res)
}