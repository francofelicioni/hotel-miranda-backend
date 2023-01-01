import { Request, Response } from "express";
import { dbQuery } from "src/db/connection";

export const getRooms = async (req: Request, res: Response) => {
  const results = await dbQuery("SELECT *  FROM rooms", null);
  return res.json({ rooms: results });
};

export const getRoom = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await dbQuery(`SELECT * FROM rooms WHERE id = ${id}`, null);
  return res.json({ contact: result });
};

export const addRooms = (req: Request, res: Response) => {
  const { room } = req.body;
  dbQuery(`INSERT INTO rooms SET ?`, room)
  return res.json({ success: 'Room added', room: room });
};

export const updateRoom = (req: Request, res: Response) => {
  const { id } = req.params;
  const { room } = req.body;
  dbQuery(`UPDATE rooms SET ? WHERE id =${id}`, room)
  return res.json({ success: "Room updated", room: room });
};

export const deleteRoom = (req: Request, res: Response) => {
  const { id } = req.params;
  dbQuery(`DELETE FROM rooms WHERE id = ${id}`, null);
  return res.json({ success: 'Room deleted' });
};
