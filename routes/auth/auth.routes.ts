import { Request, Response, Router } from 'express';
import { AuthController } from '../../controllers/auth/auth.controller';
import { asyncError } from '../../util';

const router = Router();

const controller = new AuthController()

router.post('/login', asyncError(async (req: Request<{}, {}, { email: string, password: string }, {}>, res: Response) => {
    const response = await controller.login(req.body);
    return res.send(response);
}));

router.post('/register', asyncError(async (req, res) => {
    const response = await controller.register(req.body);
    return res.json(response);
}))

export default router;