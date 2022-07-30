import { router } from '..';
import { Community } from '../../models';
import { BaseRoute } from '../BaseRoute';
import { CommunityController } from '../../controllers/adm/community.controller';

class CommunityRoute extends BaseRoute<Community> {
    constructor() {
        super(new CommunityController(), router, 'community')
    }
}

const communityRoute = new CommunityRoute();

export default communityRoute.init();