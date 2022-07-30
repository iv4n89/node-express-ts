import db from '../../database/db';
import { Position } from '../../models';
import { BaseService } from '../BaseService.service';
import { IBaseService } from '../IBaseService.service';

const repository = db.getRepository(Position);

class PositionService extends BaseService<Position> implements IBaseService<Position> {
    constructor() {
        super(repository);
    }
}

const service = new PositionService();

export default service;