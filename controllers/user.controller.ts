import {
  Body, Controller, Delete,
  Example, Get,
  Post,
  Put, Query, Route, Tags
} from "tsoa";
import { DeleteResult } from "typeorm";
import { BaseJsonResponse } from "../interfaces/response.interface";
import { User } from "../models";
import userService from "../services/auth/user.service";
import { BaseController } from "./BaseController";

@Tags('Users')
@Route("api/user")
export class UserController extends Controller implements BaseController<User> {
  /**
   * Create a new use into the database
   * @param attributes All needed attributes to create the user
   *
   */
  @Example<BaseJsonResponse<Partial<User>>>({
    message: "Ok",
    error: false,
    code: 201,
    result: {
      id: 1,
      name: "exampleName",
      last_name: "exampleLasName",
      username: "example",
      email: "email@example.com",
      birth_date: new Date("1989-01-01"),
      bio: null,
      gender: null,
      home_phone: null,
      mobile_phone: null,
      user_image: null,
      is_active: 1,
    },
  })
  @Post("/store")
  public async create(@Body() attributes: User): Promise<User> {
    return userService.create(attributes);
  }

  /**
   * Find and get an user by id
   * @param id User id to find
   *
   */
  @Example<BaseJsonResponse<Partial<User>>>({
    message: "Ok",
    error: false,
    code: 200,
    result: {
      id: 1,
      name: "exampleName",
      last_name: "exampleLasName",
      username: "example",
      email: "email@example.com",
      birth_date: new Date("1989-01-01"),
      bio: null,
      gender: null,
      home_phone: null,
      mobile_phone: null,
      user_image: null,
      is_active: 1,
    },
  })
  /**
   * @example id 1
   * @example id 3
   */
  @Get("{id}")
  public async getOne(@Query() id: number): Promise<User> {
    return userService.getOne(id);
  }

  /**
   * Get all users form database
   *
   */
  @Example<BaseJsonResponse<Partial<User>[]>>({
    message: "Ok",
    error: false,
    code: 200,
    result: [
      {
        id: 1,
        name: "exampleName",
        last_name: "exampleLasName",
        username: "example",
        email: "email@example.com",
        birth_date: new Date("1989-01-01"),
        bio: null,
        gender: null,
        home_phone: null,
        mobile_phone: null,
        user_image: null,
        is_active: 1,
      },
      {
        id: 2,
        name: "exampleName2",
        last_name: "exampleLasName2",
        username: "example2",
        email: "email2@example.com",
        birth_date: new Date("1989-01-01"),
        bio: null,
        gender: null,
        home_phone: null,
        mobile_phone: null,
        user_image: null,
        is_active: 1,
      },
    ],
  })
  @Get("/")
  public async getAll(): Promise<User[]> {
    return userService.getAll();
  }

  /**
   * 
   * @param id 
   * @param attributes 
   * 
   */
  @Example<BaseJsonResponse<Partial<User>>>({
    message: "Ok",
    error: false,
    code: 200,
    result: {
      id: 1,
      name: "exampleName",
      last_name: "exampleLasName",
      username: "example",
      email: "email@example.com",
      birth_date: new Date("1989-01-01"),
      bio: null,
      gender: null,
      home_phone: null,
      mobile_phone: null,
      user_image: null,
      is_active: 1,
    },
  })
  @Put("/:id")
  public async update(
    @Query() id: number,
    @Body() attributes: User
  ): Promise<User> {
    return userService.update(id, attributes);
  }

  /**
   * 
   * @param id 
   * 
   */
  @Example<BaseJsonResponse<Partial<User>>>({
    message: 'Ok',
    error: false,
    code: 200,
    result: null
  })
  @Delete('/:id')
  public async delete(@Query() id: number): Promise<DeleteResult> {
    return userService.delete(id);
  }
}
