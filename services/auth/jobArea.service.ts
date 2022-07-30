import db from '../../database/db';
import { JobArea } from '../../models';
import { BaseService } from '../BaseService.service';
import { IBaseService } from '../IBaseService.service';

const repository = db.getRepository(JobArea);

class JobareaService extends BaseService<JobArea> implements IBaseService<JobArea> {
    constructor() {
        super(repository);
    }
}

const service = new JobareaService();

export default service;