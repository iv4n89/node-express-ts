import { Repository } from 'typeorm';
import db from '../../database/db';
import { Language } from '../../models';
import { BaseService } from '../BaseService.service';

const repository: Repository<Language> = db.getRepository(Language);

class LanguageService extends BaseService<Language> {
    constructor() {
        super(repository)
    }
}

const service = new LanguageService();

export default service;