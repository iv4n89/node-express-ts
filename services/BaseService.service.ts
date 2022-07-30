import { DeleteResult, Repository } from 'typeorm';
import { Base } from '../models/Base';
import { IBaseService } from './IBaseService.service';

/**
 * Generic service implements from generic service interface
 */
export abstract class BaseService<T extends Base> implements IBaseService<T> {

    /**
     * @var manyToMany Used to easily update many to many relations
     */
    protected manyToMany: string[] = [];

    constructor(protected repository: Repository<T>) { }

    /**
     * Creates a new entity in database
     * @param attributes 
     * @returns the created model
     */
    public async create(attributes: T): Promise<T> {
        const entity = this.repository.create(attributes);
        const result = await this.repository.save(entity);
        return await this.getOne(entity.id);
    }

    /**
     * Get a model from database by id
     * @param id 
     * @returns the found model
     */
    public async getOne(id: number): Promise<T> {
        return await this.repository.findOne({ where: { id: id as any }, loadEagerRelations: true });
    }

    /**
     * Get all models from database
     * @returns the found models
     */
    public async getAll(): Promise<T[]> {
        return await this.repository.find({ loadEagerRelations: true });
    }

    /**
     * Update the model with the provided id
     * @param id 
     * @param attributes 
     * @returns the updated model
     */
    public async update(id: number, attributes: Partial<T>): Promise<T> {
        const model = await this.getOne(id);

        //Check if the relation name is in our many to many name array and check if a similar 
        //method exists in the model class. If so, update the current many to many relationships
        //by calling these methods
        for (let relation of this.manyToMany) {
            if (attributes[relation] && typeof model[`set${relation}`] === 'function') {
                model[`set${relation}`](attributes[relation])
                delete attributes[relation];
            }
        }
        const entity = await this.getOne(id);
        Object.keys(attributes).forEach(key => {
            entity[key] = attributes[key];
        });
        await this.repository.save(entity);
        return this.getOne(id);
    }

    /**
     * Deletes a model from database
     * @param id 
     * @returns DeleteResult
     */
    public async delete(id: number): Promise<DeleteResult> {
        return await this.repository.softDelete({ id: id as any });
    }
}