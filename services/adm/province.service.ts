import db from '../../database/db';
import { Province } from '../../models';
import { BaseService } from '../BaseService.service';
import { IBaseService } from '../IBaseService.service';

const repository = db.getRepository(Province);

class ProvinceService extends BaseService<Province> implements IBaseService<Province> {
    constructor() {
        super(repository);
    }
}

const service = new ProvinceService();

export default service;