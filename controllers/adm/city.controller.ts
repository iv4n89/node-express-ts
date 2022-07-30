import { Body, Controller, Delete, Example, Get, Post, Put, Query, Route, Tags } from 'tsoa';
import { DeleteResult } from 'typeorm';
import { BaseJsonResponse } from '../../interfaces/response.interface';
import { City } from '../../models';
import { cityService } from '../../services';
import { BaseController } from '../BaseController';

@Tags('Cities')
@Route('api/city')
export class CityController extends Controller implements BaseController<City> {

  /**
   * Create a new City
   * @param attributes 
   * 
   */
  @Example<BaseJsonResponse<Partial<City>>>({
    message: 'Ok',
    error: false,
    code: 201,
    result: {
      //todo
    }
  })
  @Post('/store')
  public async create(@Body() attributes: City): Promise<City> {
    return cityService.create(attributes);
  }

  /**
   * Get one City
   * @param id 
   * 
   */
  @Example<BaseJsonResponse<Partial<City>>>({
    message: 'Ok',
    error: false,
    code: 201,
    result: {
      //todo
    }
  })
  @Get('/')
  public async getOne(@Query() id: number): Promise<City> {
    return cityService.getOne(id);
  }

  /**
   * Get all city
   * 
   */
  @Example<BaseJsonResponse<Partial<City>>>({
    error: false,
    message: 'Ok',
    code: 201,
    result: {
      //todo
    }
  })
  @Post('/')
  public async getAll(): Promise<City[]> {
    return cityService.getAll();
  }

  /**
   * Update one City
   * @param id 
   * @param attributes 
   * 
   */
  @Example<BaseJsonResponse<Partial<City>>>({
    message: 'Ok',
    error: false,
    code: 201,
    result: {
      //todo
    }
  })
  @Put('/:id')
  public async update(@Query() id: number, @Body() attributes: City): Promise<City> {
    return cityService.update(id, attributes);
  }

  /**
   * Delete one City
   * @param id 
   * 
   */
  @Example<BaseJsonResponse<Partial<City>>>({
    message: 'Ok',
    error: false,
    code: 201,
    result: {
      //todo
    }
  })
  @Delete('/:id')
  public async delete(@Query() id: number): Promise<DeleteResult> {
    return cityService.delete(id);
  }
}