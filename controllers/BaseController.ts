import { DeleteResult } from "typeorm";

export interface BaseController<T> {
    create(attributes: T): Promise<T>;
    getOne(id: number): Promise<T>;
    getAll(): Promise<T[]>;
    update(id: number, attributes: T): Promise<T>;
    delete(id: number): Promise<DeleteResult>;
}