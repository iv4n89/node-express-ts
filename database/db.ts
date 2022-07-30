import { DataSource } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

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

export default AppDataSource;