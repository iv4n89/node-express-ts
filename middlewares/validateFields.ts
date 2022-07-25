import { Request, Response, NextFunction } from 'express-serve-static-core';
import { validationResult } from 'express-validator';

export const validateFields = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);

    return !errors.isEmpty() && res.status(400).json(errors) || next();
}