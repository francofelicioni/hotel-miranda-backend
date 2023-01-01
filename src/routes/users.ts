import express from 'express';
import { getUsers, getUser, addUser, updateUser, deleteUser } from '../controllers/users';

const usersRouter = express.Router()

//Users Route

usersRouter.get ('/', getUsers)
usersRouter.get ('/:id', getUser)
usersRouter.get ('/', addUser)
usersRouter.get ('/', updateUser)
usersRouter.get ('/', deleteUser)


export default usersRouter;

