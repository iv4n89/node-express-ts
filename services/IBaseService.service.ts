import { DeleteResult } from 'typeorm';
import { Base } from '../models/Base';

/**
 * Generic service interface
 */
export interface IBaseService<T extends Base> {
    create(attributes: T): Promise<T>;
    getOne(id: number): Promise<T>;
    getAll(): Promise<T[]>;
    update(id: number, attributes: T): Promise<T>;
    delete(id: number): Promise<DeleteResult>;
}