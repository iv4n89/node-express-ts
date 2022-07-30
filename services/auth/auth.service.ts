import db from '../../database/db';
import { User } from '../../models/';
import bcrypt from 'bcrypt';
import { generateJwt } from '../../util';

const repository = db.getRepository(User);

const verifyPassword = async (email: string, password: string) => {
    const user = await repository.findOneBy({email});
    const { password: user_password } = await db.createQueryBuilder().select().addSelect('user.password').from(User, 'user').where('email = :email', {email}).getOne();
    const validatePassword = bcrypt.compareSync(password, user_password);
    if (!validatePassword) throw new Error('Invalid credentials');
    const token = await generateJwt(user.id);
    return {token, user};
}

export default {
    verifyPassword
}