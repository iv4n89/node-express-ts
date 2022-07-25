import { Router } from 'express';
import { check } from 'express-validator';
import { testGet, getAllUser, createUser, getOneUserByEmail, getOneUserById, updateUserById, deleteUserById } from '../controllers/user.controller';
import { validateFields } from '../middlewares/validateFields';

const router = Router();

router.get('/test', testGet);
router.get('/all', getAllUser);
router.post('/create', [
    check('email', 'Email is not valid').isEmail(),
    validateFields
], createUser);
router.post('/by-email', getOneUserByEmail);
router.get('/:id', getOneUserById);
router.put('/:id', updateUserById);
router.delete('/:id', deleteUserById);

export default router;