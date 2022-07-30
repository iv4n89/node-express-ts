import { Body, Controller, Delete, Example, Get, Post, Put, Query, Route, Tags } from 'tsoa';
import { DeleteResult } from 'typeorm';
import { BaseJsonResponse } from '../../interfaces/response.interface';
import { Permission } from '../../models';
import { permissionService } from '../../services';
import { BaseController } from '../BaseController';

@Tags('Permissions')
@Route('api/permission')
export class PermissionController extends Controller implements BaseController<Permission> {

  /**
   * Create a new Permission
   * @param attributes 
   * 
   */
  @Example<BaseJsonResponse<Partial<Permission>>>({
    message: 'Ok',
    error: false,
    code: 201,
    result: {
      //todo
    }
  })
  @Post('/store')
  public async create(@Body() attributes: Permission): Promise<Permission> {
    return permissionService.create(attributes);
  }

  /**
   * Get one Permission
   * @param id 
   * 
   */
  @Example<BaseJsonResponse<Partial<Permission>>>({
    message: 'Ok',
    error: false,
    code: 201,
    result: {
      //todo
    }
  })
  @Get('/')
  public async getOne(@Query() id: number): Promise<Permission> {
    return permissionService.getOne(id);
  }

  /**
   * Get all permission
   * 
   */
  @Example<BaseJsonResponse<Partial<Permission>>>({
    error: false,
    message: 'Ok',
    code: 201,
    result: {
      //todo
    }
  })
  @Post('/')
  public async getAll(): Promise<Permission[]> {
    return permissionService.getAll();
  }

  /**
   * Update one Permission
   * @param id 
   * @param attributes 
   * 
   */
  @Example<BaseJsonResponse<Partial<Permission>>>({
    message: 'Ok',
    error: false,
    code: 201,
    result: {
      //todo
    }
  })
  @Put('/:id')
  public async update(@Query() id: number, @Body() attributes: Permission): Promise<Permission> {
    return permissionService.update(id, attributes);
  }

  /**
   * Delete one Permission
   * @param id 
   * 
   */
  @Example<BaseJsonResponse<Partial<Permission>>>({
    message: 'Ok',
    error: false,
    code: 201,
    result: {
      //todo
    }
  })
  @Delete('/:id')
  public async delete(@Query() id: number): Promise<DeleteResult> {
    return permissionService.delete(id);
  }
}