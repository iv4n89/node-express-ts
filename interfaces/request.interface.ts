import { Query, Request } from 'express-serve-static-core';

export interface BaseRequest<T> extends Express.Request {
    body: T;
}

export interface BaseRequestWithQuery<T extends Query, U> extends Request {
    body: U;
    query: T;
}
