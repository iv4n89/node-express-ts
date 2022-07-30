import db from '../../database/db';
import { City } from '../../models';
import { BaseService } from '../BaseService.service';
import { IBaseService } from '../IBaseService.service';

const repository = db.getRepository(City);

class CityService extends BaseService<City> implements IBaseService<City> {
    constructor() {
        super(repository);
    }
}

const service = new CityService();

export default service;