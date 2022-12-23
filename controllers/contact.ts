import { Request, Response } from "express";
import messages from '../db/contact.json'

export const getMessages = (req: Request, res: Response) => {
  return res.json({ messages: messages });
};

export const getMessage = (req: Request, res: Response) => {
  const { id } = req.params;
  return res.json({ message: messages.find((message) => message["id"] == id)});
};

export const addMessage = (req: Request, res: Response) => {
  const { data } = req.body;
  return res.json({ success: true, message: data });
};

export const updateMessage = (req: Request, res: Response) => {
  const { data } = req.body;
  return res.json({ success: true, message: data });
};

export const deleteMessage = (req: Request, res: Response) => {
  return res.json({ success: true });
};
