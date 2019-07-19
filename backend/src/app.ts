import * as express from 'express';
import * as mongoose from 'mongoose';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';

const app = express();
app.use(bodyParser.json());
app.use(cors());

mongoose.connect(`process.env.DB_CONNECTION`, {
    useNewUrlParser: true,
    useCreateIndex: true,
});

app.listen(process.env.PORT);
