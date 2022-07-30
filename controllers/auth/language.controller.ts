import { Body, Controller, Delete, Example, Get, Post, Put, Query, Route, Tags } from 'tsoa';
import { DeleteResult } from 'typeorm';
import { BaseJsonResponse } from '../../interfaces/response.interface';
import { Language } from '../../models';
import { languageService } from '../../services';
import { BaseController } from '../BaseController';

@Tags('Languages')
@Route('api/language')
export class LanguageController extends Controller implements BaseController<Language> {

    /**
     * Create a new Language
     * @param attributes 
     * 
     */
    @Example<BaseJsonResponse<Partial<Language>>>({
        message: 'Ok',
        error: false,
        code: 201,
        result: {
            //todo
        }
    })
    @Post('/store')
    public async create(@Body() attributes: Language): Promise<Language> {
        return languageService.create(attributes);
    }

    /**
     * Get one Language
     * @param id 
     * 
     */
    @Example<BaseJsonResponse<Partial<Language>>>({
        message: 'Ok',
        error: false,
        code: 201,
        result: {
            //todo
        }
    })
    @Get('/')
    public async getOne(@Query() id: number): Promise<Language> {
        return languageService.getOne(id);
    }

    /**
     * Get all language
     * 
     */
    @Example<BaseJsonResponse<Partial<Language>>>({
        error: false,
        message: 'Ok',
        code: 201,
        result: {
            //todo
        }
    })
    @Post('/')
    public async getAll(): Promise<Language[]> {
        return languageService.getAll();
    }

    /**
     * Update one Language
     * @param id 
     * @param attributes 
     * 
     */
    @Example<BaseJsonResponse<Partial<Language>>>({
        message: 'Ok',
        error: false,
        code: 201,
        result: {
            //todo
        }
    })
    @Put('/:id')
    public async update(@Query() id: number, @Body() attributes: Language): Promise<Language> {
        return languageService.update(id, attributes);
    }

    /**
     * Delete one Language
     * @param id 
     * 
     */
    @Example<BaseJsonResponse<Partial<Language>>>({
        message: 'Ok',
        error: false,
        code: 201,
        result: {
            //todo
        }
    })
    @Delete('/:id')
    public async delete(@Query() id: number): Promise<DeleteResult> {
        return languageService.delete(id);
    }
}