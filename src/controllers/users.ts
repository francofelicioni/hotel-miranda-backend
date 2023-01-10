import { Request, Response, NextFunction } from "express";
import { connection, disconnect } from "../connection";
import { IUser } from "src/interfaces/users";
import { userModel } from "../schemas/userSchema";
import bcrypt from 'bcrypt';
import bcryptPass from '../utils/bcryptPass';

export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  await connection();

  try {
    const users: IUser[] = await userModel.find();
    res.json(users);
  } catch (err) {
    next(err);
  }

  await disconnect();
};

export const getUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  await connection();

  const { id } = req.params;
  try {
    const user: IUser = await userModel.findById(id);
    res.json({ user });
  } catch (err) {
    next(err);
  }
  await disconnect();
};

export const addUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  await connection();

  try {
    const user = new userModel(req.body);
    const userToAdd = await user.save();
    res.status(201).json({
      success: true,
      user: userToAdd,
    });
  } catch (err) {
    if (err.status === 404) {
      return res.status(404).json({
        error: true,
        message: "Error while trying to add user, check the information",
      });
    } else {
      next(err);
    }
  }
  await disconnect();
};

export const updateUser = async ( req: Request, res: Response, next: NextFunction ) => {
  await connection();
  const { id } = req.params;
  try {
    // const user: IUser = req.body;
    const { image, full_name, email, contact, description, start_date, status, password } = req.body;
    const userInDB = await userModel.findById(id)
    const user: IUser = {
      image: image ? image : userInDB?.image,
      full_name: full_name ? full_name : userInDB?.full_name,
      email: email ? email : userInDB?.email,
      contact: contact ? contact : userInDB?.contact,
      description: description ? description : userInDB?.description,
      start_date: start_date ? start_date : userInDB?.start_date,
      status: status ? status : userInDB?.status,
      password: bcrypt.compare(password, String(userInDB?.password)) ? bcryptPass(password) : userInDB?.password,
    };
    const userToUpdate: IUser = await userModel.findOneAndUpdate(
      { _id: id },
      user
    );
    res.status(202).json({
      success: `User ${id} updated.`,
      user: userToUpdate,
    });
  } catch (err) {
    if (err.status === 400) {
      return res.status(400).json({
        error: true,
        message: "Error while updating user. Check the user information",
      });
    } else {
      next(err);
    }
  }
  await disconnect();
};

export const deleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  await connection();
  const { id } = req.params;
  try {
    const userToDelete: IUser = await userModel.findByIdAndDelete({ _id: id });
    res.status(202).json({
      success: `User ${id} was deleted.`,
    });
  } catch (err) {
    if (err.status === 404) {
      res.status(404).json({
        error: true,
        message: "Error, user was not deleted.",
      });
    }
  }
  await disconnect();
};
