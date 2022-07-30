import db from '../../database/db';
import { Group } from '../../models/auth/Group';
import { BaseService } from '../BaseService.service';
import { IBaseService } from '../IBaseService.service';

const repository = db.getRepository(Group);

class GroupService extends BaseService<Group> implements IBaseService<Group> {
    protected manyToMany: string[] = ['users', 'permissions'];
    constructor() {
        super(repository)
    }
}

const groupService = new GroupService();

export default groupService;