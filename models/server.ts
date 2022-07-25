import express, { Application } from 'express';
import router from '../routes/user.routes';

export class Server {
    app: Application;
    port: string;
    _routes: { [x: string]: string };

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3000';

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
    }

    routes() {
        this.app.use( this._routes.user, router );
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running in port ${this.port}`);
        })
    }
}