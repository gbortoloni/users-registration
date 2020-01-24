import express from 'express';
import cors from 'cors';

import db from './startup/db';
import routes from './routes';

const app = express();

db();

app.use(cors());
app.use(express.json());
app.use(routes);

export default app;
