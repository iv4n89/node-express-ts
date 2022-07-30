import db from '../../database/db';
import { Community } from '../../models';
import { BaseService } from '../BaseService.service';
import { IBaseService } from '../IBaseService.service';

const repository = db.getRepository(Community);

class CommunityService extends BaseService<Community> implements IBaseService<Community> {
    constructor() {
        super(repository);
    }
}

const service = new CommunityService();

export default service;