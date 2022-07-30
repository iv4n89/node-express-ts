import { NextFunction, Request, Response } from 'express-serve-static-core';
import { validationResult } from 'express-validator';

/**
 * Field body request validations
 * @param req Request object
 * @param res Response object
 * @param next Next middleware
 * @returns boolean - The field is ok or not
 */
export const validateFields = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);

    return !errors.isEmpty() && res.status(400).json(errors) || next();
}