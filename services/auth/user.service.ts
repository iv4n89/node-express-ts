import db from '../../database/db';
import { User } from '../../models/';
import { BaseService } from '../BaseService.service';
import { IBaseService } from '../IBaseService.service';

const repository = db.getRepository(User);

class UserService extends BaseService<User> implements IBaseService<User> {
    protected manyToMany: string[] = ['groups', 'permissions'];
    constructor() {
        super(repository)
    }
}

const service = new UserService();

export default service;