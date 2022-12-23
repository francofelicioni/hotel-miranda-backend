import { Request, Response } from "express";
import bookings from '../db/guests.json';

export const getBookings = (req: Request, res: Response) => {
  res.send({ data: "Bookings list" });
  return res.json ({bookings: bookings})
};

export const getBooking = (req: Request, res: Response) => {
  const {id}= req.params;
  res.send(`Booking nº${id}`)
  return res.json({booking: bookings.find(booking => booking["id"] == id)})
}

export const addBooking = (req:Request, res: Response) => {
  const {booking} = req.body;
  res.send(`New booking added`)
  return res.json({success: true})
}

export const updateBooking = (req: Request, res: Response) => {
  const {id} = req.params;
  const {data} = req.body;
  res.send(`Booking ${id} updated`)
  return res.json({success: true})
};

export const deleteBooking = (req:Request, res: Response) => {
  const {id} = req.params;
  res.send(`Booking ${id} deleted`) 
  return res.json({success: true})
}

