import { Request, Response } from "express";
import users from "../db/users.json";

export const getUsers = (req: Request, res: Response) => {
  return res.json({ users: users });
};

export const getUser = (req: Request, res: Response) => {
  const { id } = req.params;
  return res.json({
    user: users.find((user) => user["id"] == id),
  });
};

export const addUser = (req: Request, res: Response) => {
  const { data } = req.body;
  return res.json({ success: true, user: data });
};

export const updateUser = (req: Request, res: Response) => {
  const { data } = req.body;
  return res.json({success: true, message: data})
};

export const deleteUser = (req: Request, res: Response) => {
  return res.json({success: true})
};
