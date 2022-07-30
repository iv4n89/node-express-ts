import mung from 'express-mung';
import { Request, Response } from 'express-serve-static-core';

/**
 * Parse response if no error occurred
 * @param body Body of the response
 * @param req Request object
 * @param res Response object
 * @returns The parsed response
 */
function parseResponse(body, req: Request, res: Response) {
    if (body.error) return;
    if (req.statusCode >= 400) return;

    return {
        message: 'Ok',
        error: false,
        code: res.statusCode,
        result: body
    }
}

module.exports = mung.json(parseResponse);