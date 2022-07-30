import { router } from '..';
import { CityController } from '../../controllers/adm/city.controller';
import { City } from '../../models/adm/City';
import { BaseRoute } from '../BaseRoute';

class CityRoute extends BaseRoute<City> {
    constructor() {
        super(new CityController(), router, 'city');
    }
}

const cityRoute = new CityRoute();

export default cityRoute.init();