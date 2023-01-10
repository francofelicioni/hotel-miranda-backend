import express from 'express';
import { getUsers, getUser, addUser, updateUser, deleteUser } from '../controllers/users';

const usersRouter = express.Router()

//Users Route

usersRouter.get ('/', getUsers)
usersRouter.get ('/:id', getUser)
usersRouter.post ('/', addUser)
usersRouter.put ('/:id', updateUser)
usersRouter.delete ('/:id', deleteUser)


export default usersRouter;

