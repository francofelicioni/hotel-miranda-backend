import { Request, Response } from "express";
import bookings from "../db/guests.json";

export const getBookings = (req: Request, res: Response) => {
  return res.json({ bookings: bookings });
};

export const getBooking = (req: Request, res: Response) => {
  const { id } = req.params;
  return res.json({ booking: bookings.find((booking) => booking["id"] == id) });
};

export const addBooking = (req: Request, res: Response) => {
  const { data } = req.body;
  return res.json({ success: true, message: data });
};

export const updateBooking = (req: Request, res: Response) => {
  const { data } = req.body;
  return res.json({ success: true, message: data });
};

export const deleteBooking = (req: Request, res: Response) => {
  return res.json({ success: true });
};
