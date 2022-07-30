import { router } from '..';
import { PermissionController } from '../../controllers/auth/permission.controller';
import { Permission } from '../../models';
import { BaseRoute } from '../BaseRoute';

class PermissionRoute extends BaseRoute<Permission> {
    constructor() {
        super(new PermissionController(), router, 'permission')
    }
}

const permissionRoute = new PermissionRoute();

export default permissionRoute.init();