import { Request, Response } from "express";
import { dbQuery } from "../connection";

export const getMessages = async (req: Request, res: Response) => {
  const results = await dbQuery("SELECT * FROM contacts", null);
  return res.json({ contacts: results });
};

export const getMessage = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await dbQuery(`SELECT * FROM contacts WHERE id = ${id}`, null);
  return res.json({ contact: result });
};

export const addMessage = (req: Request, res: Response) => {
  const { contact } = req.body;
  dbQuery(`INSERT INTO contacts SET ?`, contact);
  return res.json({ success: "Contact added", contact: contact });
};

export const updateMessage = (req: Request, res: Response) => {
  const { id } = req.params;
  const { contact } = req.body;
  dbQuery(`UPDATE contacts SET ? WHERE id = ${id}`, contact);
  return res.json({ success: "Contact updated", contact: contact });
};

export const deleteMessage = (req: Request, res: Response) => {
  const { id } = req.params;
  dbQuery(`DELETE FROM contacts WHERE id = ${id}`, null);
  return res.json({ success: "Contact deleted" });
};
