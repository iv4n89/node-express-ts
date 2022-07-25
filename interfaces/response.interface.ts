import { Response } from "express";
import { Send } from 'express-serve-static-core';


export interface BaseResponse<T> extends Response{
    json: Send<BaseJsonResponse<T>, this>;
}

interface BaseJsonResponse<T> {
    ok: boolean;
    message: string;
    result: T | null;
}