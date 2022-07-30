import { Body, Controller, Delete, Example, Get, Post, Put, Query, Route, Tags } from 'tsoa';
import { DeleteResult } from "typeorm";
import { BaseJsonResponse } from "../interfaces/response.interface";
import { Address } from "../models";
import { addressService } from "../services";
import { BaseController } from "./BaseController";

@Tags('Addresses')
@Route('api/address')
export class AddressController extends Controller implements BaseController<Address>{

  /**
   * Create a new address into the database
   * @param attributes Address attributes
   *  
   */
  @Example<BaseJsonResponse<Partial<Address>>>({
    message: 'Ok',
    error: false,
    code: 201,
    result: {
      //todo
    }
  })
  @Post('/store')
  public async create(@Body() attributes: Address): Promise<Address> {
    return addressService.create(attributes);
  }

  /**
   * Get an existing address
   * @param id Address id to get
   * 
   */
  @Example<BaseJsonResponse<Partial<Address>>>({
    message: 'Ok',
    error: false,
    code: 201,
    result: {
      //todo
    }
  })
  @Get('/:id')
  public async getOne(@Query() id: number): Promise<Address> {
    return addressService.getOne(id);
  }

  /**
   * Get all addresses in database
   * 
   */
  @Example<BaseJsonResponse<Partial<Address>>>({
    message: 'Ok',
    error: false,
    code: 201,
    result: {
      //todo
    }
  })
  @Post('/')
  public async getAll(): Promise<Address[]> {
    return addressService.getAll();
  }

  /**
   * Update an existing address
   * @param id Address id to update
   * @param attributes New Address attributes
   * 
   */
  @Example<BaseJsonResponse<Partial<Address>>>({
    message: 'Ok',
    error: false,
    code: 201,
    result: {
      //todo
    }
  })
  @Put('/:id')
  public async update(@Query() id: number, @Body() attributes: Address): Promise<Address> {
    return addressService.update(id, attributes);
  }

  /**
   * Delete an existing address
   * @param id Address id to delete
   * 
   */
  @Example<BaseJsonResponse<Partial<Address>>>({
    message: 'Ok',
    error: false,
    code: 201,
    result: {
      //todo
    }
  })
  @Delete('/:id')
  public async delete(@Query() id: number): Promise<DeleteResult> {
    return addressService.delete(id);
  }
}
