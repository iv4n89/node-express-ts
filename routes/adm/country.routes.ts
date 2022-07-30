import { router } from '..';
import { CountryController } from '../../controllers/adm/country.controller';
import { Country } from '../../models/adm/Country';
import { BaseRoute } from '../BaseRoute';

class CountryRoute extends BaseRoute<Country> {
    constructor() {
        super(new CountryController(), router, 'country');
    }
}

const countryRoute = new CountryRoute();

export default countryRoute.init();