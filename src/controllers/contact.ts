import { Request, Response, NextFunction } from "express";
import { connection, disconnect } from "src/connection";
import { IBooking } from "src/interfaces/bookings";
import { IContact } from "src/interfaces/contact";
import { contactModel } from "src/schemas/contactSchema";

export const getMessages = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  await connection();
  try {
    const contacts: IContact[] = await contactModel.find();
    res.json({ contacts });
  } catch (err) {
    next(err);
  }
  await disconnect();
};

export const getMessage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  await connection();
  const { id } = req.params;
  try {
    const contact: IContact = await contactModel.findById(id);
    res.json(contact);
  } catch (err) {
    next(err);
  }
  await disconnect();
};

export const addMessage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  await connection();
  try {
    const contact = new contactModel(req.body);
    const contactToAdd = await contact.save();
    res.status(201).json({ contactToAdd });
  } catch (err) {
    if (err.status === 404) {
      return res.status(404).json({
        error: true,
        message: "Error while trying to add contact message",
      });
    } else {
      next(err);
    }
  }
  await disconnect();
};

export const updateMessage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  await connection();
  const { id } = req.params;

  try {
    const contact: IContact = req.body;
    const contactToUpdate = await contactModel.findByIdAndUpdate(
      { _id: id },
      contact
    );
    res.status(201).json({
      success: "Contact message updated",
      contact: contactToUpdate,
    });
  } catch (err) {
    if (err.status === 404) {
      return res.status(404).json({
        error: true,
        message: "Error while trying to update. Message was not updated",
      });
    } else {
      next(err);
    }
  }
  await disconnect();
};

export const deleteMessage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  await connection();
  const { id } = req.params;

  try {
    const contactToDelete: IBooking = await contactModel.findByIdAndDelete({
      _id: id,
    });
    res.status(202).json({
      message: `Contact ${id} was deleted.`,
    });
  } catch (err) {
    if (err.status === 404) {
      return res.status(404).json({
        error: true,
        message:
          "Error while trying to delete. Contact message was not deleted",
      });
    } else {
      next(err);
    }

    await disconnect();
  }
};
