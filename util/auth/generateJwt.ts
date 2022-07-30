import jwt from 'jsonwebtoken';

/**
 * Generate a new jwt from id
 * @param id model id
 * @returns The token if all gone through, error if we encountered any problem
 */
export const generateJwt = (id: number) => {
    return new Promise((resolve, reject) => {
        const payload = { id };
        jwt.sign(payload, process.env.SECRETKEY, {
            expiresIn: '72h',
        }, (err, token) => {
            if (err) {
                console.log(err);
                reject('Not possible to generate token');
            } else {
                resolve(token);
            }
        });
    });
};