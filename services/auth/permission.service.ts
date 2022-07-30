import { In, IsNull } from 'typeorm';
import db from '../../database/db';
import { Group, Permission } from '../../models';
import { parsePermission } from '../../util/auth/permission.util';
import { BaseService } from '../BaseService.service';


const repository = db.getRepository(Permission);

class PermissionService extends BaseService<Permission> {

    protected manyToMany = ['groups', 'users'];

    constructor() {
        super(repository);
    }

    public async getAll(): Promise<Permission[]> {
        return await (await this.repository.createQueryBuilder('p').where('p.parent_id IS NULL').getMany()).map(p => p.name) as any[];
    }
}

const service = new PermissionService();

export default service;