import db from '../../database/db';
import { User } from '../../models/User';
import bcrypt from 'bcrypt';

const repository = db.getRepository(User);

const createUser = async (attributes: User) => {

    try {

        const user = repository.create({
            ...attributes,
            password: bcrypt.hashSync(attributes.password, bcrypt.genSaltSync(10))
        });
        
        await repository.save(user);
        
        return user;
    } catch (err) {
        return { _error: err.message };
    }    
}

const getOneUser = async (id: number) => {
    const user = await repository.findOneOrFail({ where: { id, is_active: 1, deleted_at: null } });
    return user;
}

const getAllUsers = async () => {
    const users = await repository.find({ where: { is_active: 1, deleted_at: null } });
    return users;
}

const updateUser = async (id: number, attributes: Partial<User>) => {
    const user = await repository.update({ id }, attributes);
    return await repository.findOneBy({ id });
}

const deleteUser = async (id: number) => {
    const result = await repository.delete({ id });
    return result;
}


export default {
    createUser,
    getOneUser,
    getAllUsers,
    updateUser,
    deleteUser
}