import express from 'express';
const roomRouter = express.Router()

import { getRooms, getRoom, addRoom, updateRoom, deleteRoom } from '../controllers/rooms';

//Routes
const path: string = 'rooms';

roomRouter.get(`/${path}`, getRooms)
roomRouter.get(`/${path}/:id`, getRoom)
roomRouter.get(`/${path}`, addRoom)
roomRouter.get(`/${path}/:id`, updateRoom)
roomRouter.get(`/${path}/:id`, deleteRoom)

export default roomRouter;
