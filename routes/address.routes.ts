import { router } from '.';
import { AddressController } from '../controllers/address.controller';
import { Address } from '../models';
import { BaseRoute } from './BaseRoute';

class AddressRoute extends BaseRoute<Address> {
    constructor() {
        super(new AddressController(), router, 'address')
    }
}

const addressRoute = new AddressRoute();

export default addressRoute.init();