import { router } from '..';
import { JobAreaController } from '../../controllers/auth/jobArea.controller';
import { JobArea } from '../../models';
import { BaseRoute } from '../BaseRoute';

class JobAreaRoute extends BaseRoute<JobArea> {
    constructor() {
        super(new JobAreaController(), router, 'jobarea')
    }
}

const jobareaRoute = new JobAreaRoute();

export default jobareaRoute.init();