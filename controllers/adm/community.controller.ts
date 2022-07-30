import { Body, Controller, Delete, Example, Get, Post, Put, Query, Route, Tags } from 'tsoa';
import { DeleteResult } from 'typeorm';
import { BaseJsonResponse } from '../../interfaces/response.interface';
import { Community } from '../../models';
import { communityService } from '../../services';
import { BaseController } from '../BaseController';

@Tags('Communities')
@Route('api/community')
export class CommunityController extends Controller implements BaseController<Community> {

  /**
   * Create a new Community
   * @param attributes 
   * 
   */
  @Example<BaseJsonResponse<Partial<Community>>>({
    message: 'Ok',
    error: false,
    code: 201,
    result: {
      //todo
    }
  })
  @Post('/store')
  public async create(@Body() attributes: Community): Promise<Community> {
    return communityService.create(attributes);
  }

  /**
   * Get one Community
   * @param id 
   * 
   */
  @Example<BaseJsonResponse<Partial<Community>>>({
    message: 'Ok',
    error: false,
    code: 201,
    result: {
      //todo
    }
  })
  @Get('/')
  public async getOne(@Query() id: number): Promise<Community> {
    return communityService.getOne(id);
  }

  /**
   * Get all community
   * 
   */
  @Example<BaseJsonResponse<Partial<Community>>>({
    error: false,
    message: 'Ok',
    code: 201,
    result: {
      //todo
    }
  })
  @Post('/')
  public async getAll(): Promise<Community[]> {
    return communityService.getAll();
  }

  /**
   * Update one Community
   * @param id 
   * @param attributes 
   * 
   */
  @Example<BaseJsonResponse<Partial<Community>>>({
    message: 'Ok',
    error: false,
    code: 201,
    result: {
      //todo
    }
  })
  @Put('/:id')
  public async update(@Query() id: number, @Body() attributes: Community): Promise<Community> {
    return communityService.update(id, attributes);
  }

  /**
   * Delete one Community
   * @param id 
   * 
   */
  @Example<BaseJsonResponse<Partial<Community>>>({
    message: 'Ok',
    error: false,
    code: 201,
    result: {
      //todo
    }
  })
  @Delete('/:id')
  public async delete(@Query() id: number): Promise<DeleteResult> {
    return communityService.delete(id);
  }
}