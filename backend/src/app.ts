import * as express from 'express';
import * as bodyParser from 'body-parser';
import { createConnection } from 'typeorm';

import { dbOptions } from './config';

createConnection(dbOptions)
    .then(connection => {
        const app = express();
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));

        app.use('/api/comments', require('./routes/api/comments'));
        app.use('/api/posts', require('./routes/api/posts'));
        app.use('/api/users', require('./routes/api/users'));

        // tslint:disable-next-line:no-console
        app.listen(process.env.APP_PORT, () => console.log('Server running'));
    })
    // tslint:disable-next-line:no-console
    .catch(error => console.log('TypeORM connection error: ', error));
