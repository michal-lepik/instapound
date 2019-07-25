import { ConnectionOptions } from 'typeorm';

const { DB_HOST, MYSQL_USER, MYSQL_PASSWORD } = process.env;

export const dbOptions: ConnectionOptions = {
    type: 'mysql',
    host: DB_HOST,
    username: MYSQL_USER,
    password: MYSQL_PASSWORD,
    synchronize: true,
};
