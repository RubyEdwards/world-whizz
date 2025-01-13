import express from 'express';
import cors from 'cors';
const app = express();

import apiRouter from './routes/api-router.js';

app.use(cors());
app.use(express.json());
app.use('/api', apiRouter);

export default app;
