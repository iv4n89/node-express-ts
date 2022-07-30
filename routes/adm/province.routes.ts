import { router } from '../';
import { ProvinceController } from '../../controllers/adm/province.controller';
import { Province } from '../../models';
import { BaseRoute } from '../BaseRoute';

class ProvinceRoute extends BaseRoute<Province> {
    constructor() {
        super( new ProvinceController(), router, 'province' );
    }
}

const provinceRoute = new ProvinceRoute();

export default provinceRoute.init();