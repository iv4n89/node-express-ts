import { response, request, Response, Request } from 'express';
import { User, UserModel } from '../models/User.model';
import { BaseResponse } from '../interfaces/response.interface';
import * as db from '../database/db';
import { BaseRequest } from '../interfaces/request.interface';

export const testGet = (req: Request, res: BaseResponse<string> ) => {
    
    return res.json({
        ok: true,
        message: 'get API - test endpoint',
        result: 'test'
    });
}

export const getAllUser = async (req: Request, res: BaseResponse<User[]>) => {
    await db.connect();
    const users = await UserModel.find();
    await db.disconnect();

    res.status(200).json({
        ok: true,
        message: 'users',
        result: users
    });
}

export const createUser = async (req: Request<{}, {}, User, {}>, res: BaseResponse<User>) => {
    await db.connect();
    const { body: { email, name, last_name, password } } = req;
    const user = await UserModel.create({
        email,
        name,
        last_name,
        password,
        createdAt: Date.now(),
        is_active: true
    });
    await db.disconnect();

    res.status(201).json({
        ok: true,
        message: 'user created',
        result: user
    });
}

export const getOneUserByEmail = async (req: Request<{}, {}, Partial<User>, {}>, res: BaseResponse<User>) => {
    const { email } = req.body;

    await db.connect();
    const user = await UserModel.findOne({email});
    await db.disconnect();

    res.status(200).json({
        ok: true,
        message: 'user found',
        result: user
    });
}

export const getOneUserById = async (req: Request<{id: number}>, res: BaseResponse<User>) => {
    const { id } = req.params;

    await db.connect();
    const user = await UserModel.findById(id);
    await db.disconnect();

    res.status(200).json({
        ok: true,
        message: 'user found',
        result: user
    })
}

export const updateUserById = async (req: Request<{id: number}, {}, Partial<User>, {}>, res: BaseResponse<boolean>) => {
    const { id } = req.params;

    await db.connect();
    const result = await UserModel.updateOne({id}, req.body);
    await db.disconnect();

    res.status(200).json({
        ok: true,
        message: 'user updated',
        result: !!result
    });
}

export const deleteUserById = async (req: Request<{id: number}>, res: BaseResponse<boolean>) => {
    const { id } = req.params;

    await db.connect();
    const result = await UserModel.deleteOne({id});
    await db.disconnect();

    res.status(200).json({
        ok: true,
        message: 'user deleted',
        result: !!result
    });
}