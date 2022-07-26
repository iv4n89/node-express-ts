import mung from 'express-mung';
import { Request, Response } from 'express-serve-static-core';

function parseResponse(body, req: Request, res: Response) {
    if (body._error) {
        return {
            message: 'error',
            error: true,
            code: 400,
            result: null
        }
    }
    return {
        message: 'Ok',
        error: false,
        code: res.statusCode,
        result: body
    }
}

module.exports = mung.json(parseResponse);