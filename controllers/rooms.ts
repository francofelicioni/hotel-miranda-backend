import { Request, Response } from "express";

export const getRooms = (req: Request, res: Response) => {
  res.send({ data: "Rooms list" });
};

export const getRoom = (req: Request, res: Response) => {
  const { id } = req.params;
  res.send({ data: `Room nº ${id}` });
};

export const addRoom = (req: Request, res: Response) => {
  const { data } = req.body;
  console.log(data);
  res.send({ data: `New room added` });
};

export const updateRoom = (req: Request, res: Response) => {
  const { id } = req.params;
  const { data } = req.body;
  console.log(data);
  res.send({ data: `Room ${id} updated` });
};

export const deleteRoom = (req: Request, res: Response) => {
  const { id } = req.params;
  res.send({ data: `Room ${id} deleted` });
};
