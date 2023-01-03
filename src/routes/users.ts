import express from 'express';
import { getUsers, getUser, addUsers, updateUser, deleteUser } from '../controllers/users';

const usersRouter = express.Router()

//Users Route

usersRouter.get ('/', getUsers)
usersRouter.get ('/:id', getUser)
usersRouter.get ('/', addUsers)
usersRouter.get ('/', updateUser)
usersRouter.get ('/', deleteUser)


export default usersRouter;

