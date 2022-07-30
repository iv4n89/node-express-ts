import express, { Application } from 'express';
import swagger from 'swagger-ui-express';
import { DataSource } from 'typeorm';
import db from '../database/db';
import { validateJWT } from '../middlewares/jwtVerify';
import { authRouter, router } from '../routes';

//Server class. Instantiate it and call listen method to start express server
export class Server {
    app: Application;
    port: string;
    _routes: { [x: string]: string };
    connection: any;
    db: DataSource;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3000';
        this.db = db;

        //middlewares
        this.middlewares();

        //routes
        this._routes = {
            api: '/api',
            auth: '/auth'
        };
        this.routes();

        //Async error interceptor
        this.app.use(require('../middlewares/errorHandling'));
    }

    middlewares() {
        this.app.use(express.json());
        this.app.use(express.static('public'));
        this.app.use(require('../middlewares/parseResponse'));
        this.app.use('/docs', swagger.serve, swagger.setup(undefined, { swaggerOptions: { url: '/swagger.json' } }))
    }

    routes() {
        //api routes
        this.app.use(this._routes.api, validateJWT, router);

        //auth routes
        this.app.use(this._routes.auth, authRouter);
    }

    listen() {
        this.connection = this.app.listen(this.port, () => {
            console.log(`Server running in port ${this.port}`);
        })
    }

    stopServer() {
        this.connection.close(() => {
            console.log('Server stopping...')
        })
    }
}