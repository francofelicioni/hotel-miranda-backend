import express from 'express';
const loginRouter = express.Router();

import { postLogin } from '../controllers/login';

const path: string = 'login';

loginRouter.post(`/${path}`, postLogin)

export default loginRouter;