import { Request, Response } from "express";
import users from "../db/users.json";

export const getUsers = (req: Request, res: Response) => {
  res.send({ data: "Users list" });
  return res.json({ users: users });
};

export const getUser = (req: Request, res: Response) => {
  const { id } = req.params;
  res.send({ data: `User nª ${id}` });
  return res.json({
    user: users.find((user) => user["id"] == req.params.id),
  });
};

export const addUser = (req: Request, res: Response) => {
  const { data } = req.body;
  res.send({ data: `New user added` });
  return res.json({ success: true, user: data });
};

export const updateUser = (req: Request, res: Response) => {
  const { id } = req.params;
  const { data } = req.body;
  res.send({ data: `User nº${id} updated` });
  return res.json({success: true})
};

export const deleteUser = (req: Request, res: Response) => {
  const { id } = req.params;
  res.send({ data: `User nº${id} deleted` });
  return res.json({success: true})
};
