import db from '../database/db';
import { Address } from '../models';
import { BaseService } from './BaseService.service';
import { IBaseService } from './IBaseService.service';

const repository = db.getRepository(Address);

class AddressService extends BaseService<Address> implements IBaseService<Address> {
    constructor() {
        super(repository);
    }
}

const service = new AddressService();

export default service;