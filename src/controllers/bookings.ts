import { Request, Response } from "express";
import { dbQuery } from "../connection";

export const getBookings = async (req: Request, res: Response) => {
  const results = await dbQuery("SELECT * FROM bookings", null);
  return res.json({ bookings: results });
};

export const getBooking = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await dbQuery(`SELECT * FROM bookings where id = ${id}`, null);
  return res.json({ booking: result });
};

export const addBooking = (req: Request, res: Response) => {
  const { booking } = req.body;
  dbQuery(`INSERT INTO bookings SET ?`, booking);
  return res.json({ success: "Booking added", booking: booking });
};

export const updateBooking = (req: Request, res: Response) => {
  const { id } = req.params;
  const { booking } = req.body;
  dbQuery(`UPDATE bookings SET ? where id = ${id}`, booking);
  return res.json({ success: "Booking updated", booking: booking });
};

export const deleteBooking = (req: Request, res: Response) => {
  const { id } = req.params;
  dbQuery(`DELETE FROM bookings WHERE id = ${id}`, null);
  return res.json({ success: "Booking deleted" });
};
