import { Request, Response, Router } from "express";
import { BaseController } from "../controllers/BaseController";
import { Base } from "../models/Base";
import { asyncError } from "../util";


//Generic crud routes. Extend it and call init method to generate all needed routes for each method
export class BaseRoute<T extends Base> {
    constructor(private controller: BaseController<T>, private router: Router, private baseRoute: string) { }

    init() {
        this.router.post(`/${this.baseRoute}/store`, asyncError(async ({ body }: Request<{}, {}, T, {}>, res: Response) => {
            const city = await this.controller.create(body);
            res.status(200).json(city);
        }));
        this.router.get(`/${this.baseRoute}/:id`, asyncError(async ({ params: { id } }: Request<{ id: number }>, res: Response) => {
            const address = await this.controller.getOne(id);
            res.status(200).json(address);
        }));

        this.router.post(`/${this.baseRoute}`, asyncError(async (_, res: Response) => {
            const addresses = await this.controller.getAll();
            res.status(200).json(addresses);
        }));

        this.router.put(`/${this.baseRoute}/:id`, asyncError(async ({ params: { id }, body }: Request<{ id: number }, {}, T, {}>, res: Response) => {
            const address = await this.controller.update(id, body);
            res.status(200).json(address);
        }));

        this.router.delete(`/${this.baseRoute}/:id`, asyncError(async ({ params: { id } }: Request<{ id: number }>, res: Response) => {
            const result = await this.controller.delete(id);
            res.status(200).json(!!result);
        }));

        return this.router;
    }
}