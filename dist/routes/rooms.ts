import express from 'express';
const roomsRouter = express.Router()

import { getRooms, getRoom, addRoom, updateRoom, deleteRoom } from '../controllers/rooms';

//Routes
const path: string = 'rooms';

roomsRouter.get(`/${path}`, getRooms)
roomsRouter.get(`/${path}/:id`, getRoom)
roomsRouter.get(`/${path}`, addRoom)
roomsRouter.get(`/${path}/:id`, updateRoom)
roomsRouter.get(`/${path}/:id`, deleteRoom)

export default roomsRouter;
