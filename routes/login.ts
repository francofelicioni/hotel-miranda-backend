import express from 'express';
const loginRouter = express.Router();

import { postLogin } from '../controllers/login';

loginRouter.post(`/login`, postLogin)

export default loginRouter;