import { NextFunction, Request, Response } from 'express-serve-static-core';

/**
 * Unhandled error interceptor. It will parse the response to give it the default schema
 * @param err The unhandled error
 * @param req Request object
 * @param res Response object
 * @param next Next middleware
 */
function errorHandling(err, req: Request, res: Response, next: NextFunction) {
    res.status(Math.max(res.statusCode, 400)).send({
        message: err.message,
        error: true,
        code: Math.max(res.statusCode, 400),
        result: null
    });
}

module.exports = errorHandling;