import { Body, Controller, Delete, Example, Get, Post, Put, Query, Route, Tags } from 'tsoa';
import { DeleteResult } from 'typeorm';
import { BaseJsonResponse } from '../../interfaces/response.interface';
import { JobArea } from '../../models';
import { jobAreaService } from '../../services';
import { BaseController } from '../BaseController';

@Tags('JobArea')
@Route('api/jobarea')
export class JobAreaController extends Controller implements BaseController<JobArea> {

    /**
     * Create a new JobArea
     * @param attributes 
     * 
     */
    @Example<BaseJsonResponse<Partial<JobArea>>>({
        message: 'Ok',
        error: false,
        code: 201,
        result: {
            //todo
        }
    })
    @Post('/store')
    public async create(@Body() attributes: JobArea): Promise<JobArea> {
        return jobAreaService.create(attributes);
    }

    /**
     * Get one JobArea
     * @param id 
     * 
     */
    @Example<BaseJsonResponse<Partial<JobArea>>>({
        message: 'Ok',
        error: false,
        code: 201,
        result: {
            //todo
        }
    })
    @Get('/')
    public async getOne(@Query() id: number): Promise<JobArea> {
        return jobAreaService.getOne(id);
    }

    /**
     * Get all JobArea
     * 
     */
    @Example<BaseJsonResponse<Partial<JobArea>>>({
        error: false,
        message: 'Ok',
        code: 201,
        result: {
            //todo
        }
    })
    @Post('/')
    public async getAll(): Promise<JobArea[]> {
        return jobAreaService.getAll();
    }

    /**
     * Update one JobArea
     * @param id 
     * @param attributes 
     * 
     */
    @Example<BaseJsonResponse<Partial<JobArea>>>({
        message: 'Ok',
        error: false,
        code: 201,
        result: {
            //todo
        }
    })
    @Put('/:id')
    public async update(@Query() id: number, @Body() attributes: JobArea): Promise<JobArea> {
        return jobAreaService.update(id, attributes);
    }

    /**
     * Delete one JobArea
     * @param id 
     * 
     */
    @Example<BaseJsonResponse<Partial<JobArea>>>({
        message: 'Ok',
        error: false,
        code: 201,
        result: {
            //todo
        }
    })
    @Delete('/:id')
    public async delete(@Query() id: number): Promise<DeleteResult> {
        return jobAreaService.delete(id);
    }
}