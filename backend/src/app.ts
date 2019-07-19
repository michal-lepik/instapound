import * as express from 'express';
import * as mongoose from 'mongoose';

const app = express();

mongoose.connect(
    `mongodb://mongo:27017/instapound_db`,
    {
        useNewUrlParser: true,
        useCreateIndex: true,
    },
    // tslint:disable-next-line: no-console
    () => console.log('mongo works'),
);
// tslint:disable-next-line: no-console
app.listen(3000, () => console.log('server works'));
