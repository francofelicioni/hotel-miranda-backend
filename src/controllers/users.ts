import { Request, Response, NextFunction } from "express";
import { connection, disconnect } from "src/connection";
import { IUser } from "src/interfaces/users";
import { userModel } from "src/schemas/userSchema";

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

export const updateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  await connection();
  const { id } = req.params;
  try {
    const user: IUser = req.body;
    const userToUpdate: IUser = await userModel.findByIdAndUpdate(
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
