import { healthCheck } from '../controllers/app.controllers.js';
const apiRouter = require('express').Router();

apiRouter.use('/', healthCheck);

export default apiRouter;
