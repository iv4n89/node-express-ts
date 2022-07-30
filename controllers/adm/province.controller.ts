import { Body, Controller, Delete, Example, Get, Post, Put, Query, Route, Tags } from 'tsoa';
import { DeleteResult } from "typeorm";
import { BaseJsonResponse } from '../../interfaces/response.interface';
import { Province } from "../../models/adm/Province";
import { provinceService } from "../../services";
import { BaseController } from '../BaseController';

@Tags('Provinces')
@Route('api/province')
export class ProvinceController extends Controller implements BaseController<Province> {

  /**
   * Create a new province
   * @param attributes 
   * @returns 
   */
  @Example<BaseJsonResponse<Partial<Province>>>({
    message: 'Ok',
    error: false,
    code: 201,
    result: {
      //todo
    }
  })
  @Post('/store')
  public async create(@Body() attributes: Province): Promise<Province> {
    return provinceService.create(attributes);
  }

  /**
   * Get one province
   * @param id 
   * 
   */
  @Example<BaseJsonResponse<Partial<Province>>>({
    message: 'Ok',
    error: false,
    code: 201,
    result: {
      //todo
    }
  })
  @Get('/:id')
  public async getOne(@Query() id: number): Promise<Province> {
    return provinceService.getOne(id);
  }

  /**
   * Get all provinces
   * 
   */
  @Example<BaseJsonResponse<Partial<Province>>>({
    message: 'Ok',
    error: false,
    code: 201,
    result: {
      //todo
    }
  })
  @Post('/')
  public async getAll(): Promise<Province[]> {
    return provinceService.getAll();
  }

  /**
   * Update a province
   * @param id 
   * @param attributes 
   * 
   */
  @Example<BaseJsonResponse<Partial<Province>>>({
    message: 'Ok',
    error: false,
    code: 201,
    result: {
      //todo
    }
  })
  @Put('/:id')
  public async update(@Query() id: number, @Body() attributes: Province): Promise<Province> {
    return provinceService.update(id, attributes);
  }

  /**
   * Delete a province
   * @param id 
   * 
   */
  @Example<BaseJsonResponse<Partial<Province>>>({
    message: 'Ok',
    error: false,
    code: 201,
    result: {
      //todo
    }
  })
  @Delete('/:id')
  public async delete(@Query() id: number): Promise<DeleteResult> {
    return provinceService.delete(id);
  }
}
