import { router } from '..';
import { GroupController } from '../../controllers/auth/group.controller';
import { Group } from '../../models';
import { BaseRoute } from '../BaseRoute';

class GroupRoute extends BaseRoute<Group> {
    constructor() {
        super(new GroupController(), router, 'group')
    }
}

const groupRoute = new GroupRoute();

export default groupRoute.init();