import * as express from 'express';
import * as bodyParser from 'body-parser';
import { createConnection } from 'typeorm';

import { dbOptions } from './config';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(process.env.APP_PORT);

createConnection(dbOptions)
    .then(connection => {
        console.log('Connected to DB');
    })
    .catch(error => console.log('TypeORM connection error: ', error));
