import { Request, Response } from "express";
import rooms from "../db/rooms.json";

export const getRooms = (req: Request, res: Response) => {
  return res.json({ rooms: rooms });
};

export const getRoom = (req: Request, res: Response) => {
  const { id } = req.params;
  return res.json({
    room: rooms.find((room) => room["id"] == id),
  });
};

export const addRoom = (req: Request, res: Response) => {
  const { data } = req.body;
  return res.json({ success: true, message: data });
};

export const updateRoom = (req: Request, res: Response) => {
  const { data } = req.body;
  return res.json({ success: true, message: data });
};

export const deleteRoom = (req: Request, res: Response) => {
  return res.json({ success: true });
};
