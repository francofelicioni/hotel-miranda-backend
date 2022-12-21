import { Request, Response } from "express";

export const getBookings = (req: Request, res: Response) => {
  res.send({ data: "Bookings list" });
};

export const getBooking = (req: Request, res: Response) => {
  const {id}= req.params;
  res.send(`Booking nº${id}`)
}

export const addBooking = (req:Request, res: Response) => {
  const {data} = req.body;
  console.log(data)
  res.send(`New booking added`)
}

export const updateBooking = (req: Request, res: Response) => {
  const {id} = req.params;
  const {data} = req.body;
  console.log(data);
  res.send(`Booking ${id} updated`)
};

export const deleteBooking = (req:Request, res: Response) => {
  const {id} = req.params;
  res.send(`Booking ${id} deleted`) 
}

