import { config } from 'dotenv';
import { Server } from './Server/server';
import db from './database/db';

//load configuration from .env file
config();

//Instantiate a new Server object to initialize the server
const server = new Server();

//Initialize the database after pre-configured our server
db.initialize()
    .then(() => console.log('conectado'));

//Start our server
server.listen();


/**
 * The above export will be used for convenience in tests
 */
export default { app: server.app, server: server, db: server.db };