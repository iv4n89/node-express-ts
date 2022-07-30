import { router } from '.';
import { UserController } from '../controllers/user.controller';
import { User } from '../models';
import { BaseRoute } from './BaseRoute';

class UserRoute extends BaseRoute<User> {
   constructor() {
      super(new UserController(), router, 'user')
   }
}

const userRoute = new UserRoute();

export default userRoute.init();