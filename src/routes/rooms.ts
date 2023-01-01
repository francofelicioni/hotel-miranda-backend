import express from "express";
const roomRouter = express.Router();

// import { getRooms, getRoom, addRoom, updateRoom, deleteRoom } from '../controllers/rooms';
import {
  getRooms,
  getRoom,
  addRooms,
  updateRoom,
  deleteRoom,
} from "../controllers/rooms";

const roomsRouter = express.Router();

//Room routes//
roomsRouter.get("/", getRooms);
roomsRouter.get("/:id", getRoom);
roomsRouter.post("/", addRooms);
roomsRouter.put("/:id", updateRoom);
roomsRouter.delete("/:id", deleteRoom);

export default roomsRouter;
