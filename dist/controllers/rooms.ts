import { Request, Response } from "express";
import rooms from "../db/rooms.json";

export const getRooms = (req: Request, res: Response) => {
  res.send({ data: "Rooms list" });
  return res.json({ rooms: rooms });
};

export const getRoom = (req: Request, res: Response) => {
  const { id } = req.params;
  res.send({ data: `Room nº ${id}` });
  return res.json({
    room: rooms.find((room) => room["id"] == req.params.id),
  });
};

export const addRoom = (req: Request, res: Response) => {
  const { data } = req.body;
  res.send({ data: `New room added` });
  return res.json({ success: true, room: data });
};

export const updateRoom = (req: Request, res: Response) => {
  const { id } = req.params;
  const { data } = req.body;
  res.send({ data: `Room ${id} updated` });
  return res.json({ success: true });
};

export const deleteRoom = (req: Request, res: Response) => {
  const { id } = req.params;
  res.send({ data: `Room ${id} deleted` });
  return res.json({ success: true });
};
