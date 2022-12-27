import express from 'express';
const usersRouter = express.Router()

import { getUsers, getUser, addUser, updateUser, deleteUser } from '../controllers/users';

const path:string = 'users';

usersRouter.get(`/${path}`, getUsers)
usersRouter.get(`/${path}/:id`, getUser)
usersRouter.get(`/${path}`, addUser)
usersRouter.get(`/${path}/:id`, updateUser)
usersRouter.get(`/${path}/:id`, deleteUser)

export default usersRouter;

