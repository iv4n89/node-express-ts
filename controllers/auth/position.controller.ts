import { Body, Controller, Delete, Example, Get, Post, Put, Query, Route, Tags } from 'tsoa';
import { DeleteResult } from 'typeorm';
import { BaseJsonResponse } from '../../interfaces/response.interface';
import { Position } from '../../models';
import { positionService } from '../../services';
import { BaseController } from '../BaseController';

@Tags('JobArea')
@Route('api/position')
export class PositionController extends Controller implements BaseController<Position> {

    /**
     * Create a new Position
     * @param attributes 
     * 
     */
    @Example<BaseJsonResponse<Partial<Position>>>({
        message: 'Ok',
        error: false,
        code: 201,
        result: {
            //todo
        }
    })
    @Post('/store')
    public async create(@Body() attributes: Position): Promise<Position> {
        return positionService.create(attributes);
    }

    /**
     * Get one Position
     * @param id 
     * 
     */
    @Example<BaseJsonResponse<Partial<Position>>>({
        message: 'Ok',
        error: false,
        code: 201,
        result: {
            //todo
        }
    })
    @Get('/')
    public async getOne(@Query() id: number): Promise<Position> {
        return positionService.getOne(id);
    }

    /**
     * Get all position
     * 
     */
    @Example<BaseJsonResponse<Partial<Position>>>({
        error: false,
        message: 'Ok',
        code: 201,
        result: {
            //todo
        }
    })
    @Post('/')
    public async getAll(): Promise<Position[]> {
        return positionService.getAll();
    }

    /**
     * Update one Position
     * @param id 
     * @param attributes 
     * 
     */
    @Example<BaseJsonResponse<Partial<Position>>>({
        message: 'Ok',
        error: false,
        code: 201,
        result: {
            //todo
        }
    })
    @Put('/:id')
    public async update(@Query() id: number, @Body() attributes: Position): Promise<Position> {
        return positionService.update(id, attributes);
    }

    /**
     * Delete one Position
     * @param id 
     * 
     */
    @Example<BaseJsonResponse<Partial<Position>>>({
        message: 'Ok',
        error: false,
        code: 201,
        result: {
            //todo
        }
    })
    @Delete('/:id')
    public async delete(@Query() id: number): Promise<DeleteResult> {
        return positionService.delete(id);
    }
}