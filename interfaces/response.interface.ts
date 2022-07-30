import { Response } from "express";
import { Send } from 'express-serve-static-core';


export interface BaseResponse<T> extends Response{
    json: Send<BaseJsonResponse<T>, this>;
}

export interface BaseJsonResponse<T> {
    message: string;
    error: boolean;
    code: number;
    result: T | null;
}