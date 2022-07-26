import { Request, Response } from 'express';
import { BaseResponse } from '../interfaces/response.interface';
import { User } from '../models/User';
import userRepository from '../services/auth/user.service';

/**
 * 
 * @param req 
 * @param res 
 */
export const createUser = async (req: Request<{}, {}, User, {}>, res: Response) => {
    const attributes = req.body;
    const user = await userRepository.createUser(attributes);
    res.status(201).json(user);
}

/**
 * 
 * @param req 
 * @param res 
 */
export const getOneUser = async (req: Request<{ id: number }>, res: Response) => {
    const { id } = req.params;
    const user = await userRepository.getOneUser(id);
    res.status(200).json(user);
}

/**
 * 
 * @param req 
 * @param res 
 */
export const getAllUsers = async (req: Request, res: Response) => {
    const users = await userRepository.getAllUsers();
    res.status(200).json(users);
}

/**
 * 
 * @param req 
 * @param res 
 */
export const updateOneUser = async (req: Request<{ id: number }, {}, Partial<User>, {}>, res: Response) => {
    const { id } = req.params;
    const attributes = req.body;
    const user = await userRepository.updateUser(id, attributes);
    res.status(200).json(user);
}