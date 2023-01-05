import { NextFunction, Request, Response } from "express";
import { connection, disconnect } from "src/connection";
import { IBookings } from "src/interfaces/bookings";
import { bookingModel } from "src/schemas/bookingSchema";

export const getBookings = async (req: Request, res: Response, next: NextFunction) => {
  await connection();
  try {
    const bookings: IBookings[] = await bookingModel.find();
    res.json(bookings);
  } catch (err) {
    next (err);
  }
  await disconnect();
};

export const getBooking = async (req: Request, res: Response, next: NextFunction) => {
  await connection();
  const { id } = req.params;
  try {
    const booking: IBookings[] = await bookingModel.findById(id);
    res.json(booking);
  } catch (err) {
    next(err)
  }
  await disconnect();
};

export const addBooking = async (req: Request, res: Response, next: NextFunction) => {
  await connection();
  const booking = new bookingModel(req.body);

  try {
    const bookingToPost = await booking.save();
    res.status(201).json({ bookingToPost });
  } catch (err) {
    res.status(400).send({
      error: "Error, check the booking information.",
    });
    next(err);
  }
  await disconnect();
};

export const updateBooking = async (req: Request, res: Response, next: NextFunction) => {
  await connection();
  const { id } = req.params;
  const booking: IBookings = req.body;

  try {
    const bookingToUpdate = await bookingModel.findByIdAndUpdate({ _id: id }, booking);
    res.status(201).json({
      success: "Booking updated", booking: bookingToUpdate
    });
  } catch (err) {
    res.status(400).json({
      error: "Error, check the booking information.",
    });
    next(err);
  }
  await disconnect();
};

export const deleteBooking = async (req: Request, res: Response, next: NextFunction) => {
  await connection();
  const {id} = req.params;

  try {
    const bookingToDelete : IBookings [] = await bookingModel.findOneAndDelete({'_id': id});
    res.status(202).json({
      success: `Booking ${id} was removed.`
    })
  } catch (err) {
    res.status(400).json({
      error: 'Error, the booking could not be deleted.'
    })
    next(err);
  }
};
