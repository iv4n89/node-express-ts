import db from '../../database/db';
import { Country } from '../../models';
import { BaseService } from '../BaseService.service';
import { IBaseService } from '../IBaseService.service';

const repository = db.getRepository(Country);

class CountryService extends BaseService<Country> implements IBaseService<Country> {
    constructor() {
        super(repository);
    }
}

const service = new CountryService();

export default service;