import express, { Application } from 'express';
import { userRouter } from '../routes';
import db from '../database/db';

export class Server {
    app: Application;
    port: string;
    _routes: { [x: string]: string };

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3000';

        // database
        db.initialize()
            .then(() => console.log('conectado'))
            .catch((err) => console.log(err));

        //routes
        this._routes = {
            user: '/api/user'
        };

        this.middlewares();

        this.routes();

    }

    middlewares() {
        this.app.use(express.json());
        this.app.use(express.static('public'));
        this.app.use(require('../middlewares/parseResponse'));
        this.app.use(function (err, req, res, next) {
            console.log('error', err);
            res.status(400).send({ message: 'algo no anda bien' });

        });
    }

    routes() {
        this.app.use(this._routes.user, userRouter);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running in port ${this.port}`);
        })
    }
}