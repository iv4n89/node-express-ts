import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

/**
 * Jwt token verification middleware. It will intercept the request and check if the provided
 * jwt token in 'Authorization' header is correct
 * @param req Request object
 * @param res Response object
 * @param next Next middleware
 * @returns 
 */
export const validateJWT = async (req: Request, res: Response, next: NextFunction) => {
    const authorization = req.header('Authorization');

    if (!authorization) {
        return res.sendStatus(401);
    }

    //The jwt token will come as 'Bearer token', we only need the last part to verify
    const token = authorization.split(' ')[1];

    jwt.verify(token, process.env.SECRETKEY as string, (err, user) => {
        if (err) {
            console.log(err);
            return res.sendStatus(403);
        }
        (req as any).user = user;

        next();
    });
};