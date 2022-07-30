import { router } from '..';
import { LanguageController } from '../../controllers/auth/language.controller';
import { Language } from '../../models';
import { BaseRoute } from '../BaseRoute';

class LanguageRoute extends BaseRoute<Language> {
    constructor() {
        super(new LanguageController(), router, 'language')
    }
}

const languageRoute = new LanguageRoute();

export default languageRoute.init();