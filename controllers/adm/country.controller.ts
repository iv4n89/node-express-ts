import { Body, Controller, Delete, Example, Get, Post, Put, Query, Route, Tags } from 'tsoa';
import { DeleteResult } from 'typeorm';
import { BaseJsonResponse } from '../../interfaces/response.interface';
import { Country } from '../../models';
import { countryService } from '../../services';
import { BaseController } from '../BaseController';

@Tags('Countries')
@Route('api/country')
export class CountryController extends Controller implements BaseController<Country> {

  /**
   * Create a new Country
   * @param attributes 
   * 
   */
  @Example<BaseJsonResponse<Partial<Country>>>({
    message: 'Ok',
    error: false,
    code: 201,
    result: {
      //todo
    }
  })
  @Post('/store')
  public async create(@Body() attributes: Country): Promise<Country> {
    return countryService.create(attributes);
  }

  /**
   * Get one Country
   * @param id 
   * 
   */
  @Example<BaseJsonResponse<Partial<Country>>>({
    message: 'Ok',
    error: false,
    code: 201,
    result: {
      //todo
    }
  })
  @Get('/')
  public async getOne(@Query() id: number): Promise<Country> {
    return countryService.getOne(id);
  }

  /**
   * Get all country
   * 
   */
  @Example<BaseJsonResponse<Partial<Country>>>({
    error: false,
    message: 'Ok',
    code: 201,
    result: {
      //todo
    }
  })
  @Post('/')
  public async getAll(): Promise<Country[]> {
    return countryService.getAll();
  }

  /**
   * Update one Country
   * @param id 
   * @param attributes 
   * 
   */
  @Example<BaseJsonResponse<Partial<Country>>>({
    message: 'Ok',
    error: false,
    code: 201,
    result: {
      //todo
    }
  })
  @Put('/:id')
  public async update(@Query() id: number, @Body() attributes: Country): Promise<Country> {
    return countryService.update(id, attributes);
  }

  /**
   * Delete one Country
   * @param id 
   * 
   */
  @Example<BaseJsonResponse<Partial<Country>>>({
    message: 'Ok',
    error: false,
    code: 201,
    result: {
      //todo
    }
  })
  @Delete('/:id')
  public async delete(@Query() id: number): Promise<DeleteResult> {
    return countryService.delete(id);
  }
}