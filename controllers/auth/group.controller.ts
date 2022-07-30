import { Body, Controller, Delete, Example, Get, Post, Put, Query, Route, Tags } from 'tsoa';
import { DeleteResult } from 'typeorm';
import { BaseJsonResponse } from '../../interfaces/response.interface';
import { Group } from '../../models';
import { groupService } from '../../services';
import { BaseController } from '../BaseController';

@Tags('Groups')
@Route('api/group')
export class GroupController extends Controller implements BaseController<Group> {

  /**
   * Create a new Group
   * @param attributes 
   * 
   */
  @Example<BaseJsonResponse<Partial<Group>>>({
    message: 'Ok',
    error: false,
    code: 201,
    result: {
      //todo
    }
  })
  @Post('/store')
  public async create(@Body() attributes: Group): Promise<Group> {
    return groupService.create(attributes);
  }

  /**
   * Get one Group
   * @param id 
   * 
   */
  @Example<BaseJsonResponse<Partial<Group>>>({
    message: 'Ok',
    error: false,
    code: 201,
    result: {
      //todo
    }
  })
  @Get('/')
  public async getOne(@Query() id: number): Promise<Group> {
    return groupService.getOne(id);
  }

  /**
   * Get all group
   * 
   */
  @Example<BaseJsonResponse<Partial<Group>>>({
    error: false,
    message: 'Ok',
    code: 201,
    result: {
      //todo
    }
  })
  @Post('/')
  public async getAll(): Promise<Group[]> {
    return groupService.getAll();
  }

  /**
   * Update one Group
   * @param id 
   * @param attributes 
   * 
   */
  @Example<BaseJsonResponse<Partial<Group>>>({
    message: 'Ok',
    error: false,
    code: 201,
    result: {
      //todo
    }
  })
  @Put('/:id')
  public async update(@Query() id: number, @Body() attributes: Group): Promise<Group> {
    return groupService.update(id, attributes);
  }

  /**
   * Delete one Group
   * @param id 
   * 
   */
  @Example<BaseJsonResponse<Partial<Group>>>({
    message: 'Ok',
    error: false,
    code: 201,
    result: {
      //todo
    }
  })
  @Delete('/:id')
  public async delete(@Query() id: number): Promise<DeleteResult> {
    return groupService.delete(id);
  }
}