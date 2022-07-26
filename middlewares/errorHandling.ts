import { Request, Response, NextFunction, ErrorRequestHandler } from 'express-serve-static-core';

function errorHandling (err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) {
    
    res.json({
        message: 'error',
        error: true,
        code: res.statusCode,
        result: null
    });
}

module.exports = errorHandling;