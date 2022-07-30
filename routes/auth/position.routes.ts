import { router } from '..';
import { PositionController } from '../../controllers/auth/position.controller';
import { Position } from '../../models';
import { BaseRoute } from '../BaseRoute';

class PositionRoute extends BaseRoute<Position> {
    constructor() {
        super(new PositionController(), router, 'position')
    }
}

const positionRoute = new PositionRoute();

export default positionRoute.init();