import express from "express";

import {
  getRooms,
  getRoom,
  addRoom,
  updateRoom,
  deleteRoom,
} from "../controllers/rooms";

const roomsRouter = express.Router();

//Room routes//
roomsRouter.get("/", getRooms);
roomsRouter.get("/:id", getRoom);
roomsRouter.post("/", addRoom);
roomsRouter.put("/:id", updateRoom);
roomsRouter.delete("/:id", deleteRoom);

export default roomsRouter;
