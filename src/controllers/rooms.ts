import { Request, Response, NextFunction } from "express";
import { connection, disconnect } from "../connection";
import { IRoom } from "src/interfaces/rooms";
import { roomModel } from "../schemas/roomSchema";

export const getRooms = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  await connection();
  try {
    const rooms: IRoom[] = await roomModel.find();
    res.json(rooms);
  } catch (err) {
    next(err);
  }
  await disconnect();
};

export const getRoom = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  await connection();
  const { id } = req.params;
  try {
    const room: IRoom[] = await roomModel.findById(id);
    res.json(room);
  } catch (err) {
    next(err);
  }
  await disconnect();
};


//POST
export const addRoom = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  await connection();
  try {
    const room = new roomModel(req.body);
    const roomToPost = await room.save();
    res.status(202).json({ roomToPost });
  } catch (err) {
    if (err.status === 404) {
      return res.status(404).json({
        error: true,
        message: "Error while trying to add the room, check the information",
      });
    } else {
      next(err);
    }
  }
  await disconnect();
};


//PUT
export const updateRoom = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  await connection();
  try {
    const { id } = req.params;
    const room: IRoom = req.body;
    console.log('THIS IS ROOM', room);
    const roomToUpdate = await roomModel.findOneAndUpdate({_id: id }, room);
    console.log('THIS IS ROOM to update', roomToUpdate);
    res.status(201).json({
      success: "Room updated successfully",
      room: roomToUpdate,
    });
  } catch (err) {
    if (err.status === 404) {
      return res.status(404).json({
        error: true,
        message: "Error while updating. Room did not saved",
      });
    } else {
      next(err);
    }
  }
  await disconnect();
};

export const deleteRoom = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  await connection();
  const { id } = req.params;
  try {
    const roomToDelete: IRoom = await roomModel.findByIdAndDelete({ _id: id });
    res.status(202).json({
      success: `Room ${id} was deleted.`,
    });
  } catch (err) {
    if (err.status === 404) {
      return res.status(404).json({
        error: true,
        message: "Error. Room was not deleted.",
      });
    } else {
      next(err);
    }
  }
  await disconnect();
};
