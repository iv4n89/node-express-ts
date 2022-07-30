import { DataSource } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

/**
 * MySQL is set as default database type. To switch to mongo change the default export to mongoDataSource
 */

/**
 * Main app datasource. MySQL type
 */
const AppDataSource = new DataSource({
    type: process.env.MYSQL_TYPE as 'mysql' || 'mysql',
    host: process.env.MYSQL_HOST || 'localhost',
    port: Number(process.env.MYSQL_PORT) || 3306,
    username: process.env.MYSQL_USERNAME || 'user',
    password: process.env.MYSQL_PASSWORD || 'secr3t!',
    database: process.env.MYSQL_DATABASE || 'test-database',
    entities: ['models/**/*{.js,.ts}'],
    synchronize: true,
    namingStrategy: new SnakeNamingStrategy()
});

/**
 * MongoDB/DocumentDB datasource
 */
const mongoDataSource = new DataSource({
    type: process.env.MONGO_TYPE as 'mongodb' || 'mongodb',
    host: process.env.MONGO_HOST,
    port: Number(process.env.MONGO_PORT) || 27017,
    entities: ['models/**/*{.js,.ts}'],
    synchronize: true,
});

export default AppDataSource;