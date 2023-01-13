import { NextFunction, Request, Response } from "express";
import { connection, disconnect } from "../connection";
import { IBooking } from "src/interfaces/bookings";
import { bookingModel } from "../schemas/bookingSchema";

export const getBookings = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  await connection();
  try {
    const bookings: IBooking[] = await bookingModel.find();
    res.json(bookings);
  } catch (err) {
    next(err);
  }
  await disconnect();
};

export const getBooking = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  await connection();
  const { id } = req.params;
  try {
    const booking: IBooking[] = await bookingModel.findById(id);
    res.json(booking);
  } catch (err) {
    next(err);
  }
  await disconnect();
};

//POST
export const addBooking = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  await connection();
  try {
    const booking = new bookingModel(req.body);
    const bookingToAdd = await booking.save();
    res.status(201).json({ bookingToAdd });
  } catch (err) {
    if (err.status === 400) {
      return res.status(400).json({
        error: true,
        message:
          "Error while trying to add the room, check the booking information.",
      });
    } else {
      next(err);
    }
  }
  await disconnect();
};

//PUT
export const updateBooking = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  await connection();
  const { id } = req.params;
  try {
    const booking: IBooking = req.body;
    const bookingToUpdate = await bookingModel.findOneAndUpdate(
      { _id: id },
      booking
    );
    res.status(201).json({
      success: "Booking updated",
      booking: bookingToUpdate,
    });
  } catch (err) {
    if (err.status === 404) {
      return res.status(404).json({
        error: true,
        message: "Error, check the booking information.",
      });
    } else {
      next(err);
    }
  }
  await disconnect();
};

export const deleteBooking = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  await connection();
  const { id } = req.params;
  try {
    const bookingToDelete: IBooking = await bookingModel.findOneAndDelete({
      _id: id,
    });
    res.status(202).json({
      success: `Booking ${id} was deleted.`,
    });
  } catch (err) {
    if (err.status === 404) {
      return res.status(404).json({
        error: true,
        message: "Error, the booking was not deleted.",
      });
    } else {
      next(err);
    }
  }
  await disconnect();
};
