import { DataSource } from 'typeorm';
import { User } from '../models/User';

const AppDataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'user',
    password: 'secr3t!',
    database: 'test-database',
    entities: [
        User
    ],
    synchronize: true
});

export default AppDataSource;