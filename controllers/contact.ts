import { Request, Response } from "express";

export const getMessages = (req: Request, res: Response) => {
  res.send({ data: "Message list" });
};

export const getMessage = (req: Request, res: Response) => {
  const { id } = req.params;
  res.send({ data: `Message nª ${id}` });
};

export const addMessage = (req: Request, res: Response) => {
  const { data } = req.body;
  console.log(data);
  res.send({ data: `New message added` });
};

export const updateMessage = (req: Request, res: Response) => {
  const { id } = req.params;
  const { data } = req.body;
  console.log(data);
  res.send({ data: `Message nº${id} updated` });
};

export const deleteMessage = (req: Request, res: Response) => {
  const { id } = req.params;
  res.send({ data: `Message nº${id} deleted` });
};
