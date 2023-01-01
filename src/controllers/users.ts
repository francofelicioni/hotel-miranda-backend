import { Request, Response } from "express";
import { dbQuery } from "src/db/connection";

export const getUsers = async (req: Request, res: Response) => {
  const result = await dbQuery("SELECT * FROM users", null);
  return res.json({ users: result });
};

export const getUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await dbQuery(`SELECT * FROM users WHERE id = ${id}`, null);
  return res.json({ user: result });
};

export const addUser = (req: Request, res: Response) => {
  const { user } = req.body;
  dbQuery(`INSERT INTO users SET ?`, user);
  return res.json({ success: "User added", user: user });
};

export const updateUser = (req: Request, res: Response) => {
  const { id } = req.params;
  const { user } = req.body;
  dbQuery(`UPDATE users SET WHERE id = ${id}`, user);
  return res.json({ success: "User updated", user: user });
};

export const deleteUser = (req: Request, res: Response) => {
  const { id } = req.params;
  dbQuery(`DELETE FROM users WHERE id = ${id}`, null);
  return res.json({ success: "User deleted" });
};
