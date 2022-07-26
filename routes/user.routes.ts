import { Router } from 'express';
import { createUser, getAllUsers, getOneUser, updateOneUser } from '../controllers/user.controller';

const use = fn => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next);

const router = Router();
router.post('/create', use(createUser));
router.get('/:id', use(getOneUser));
router.post('/', use(getAllUsers));
router.put('/:id', use(updateOneUser));


export default router;