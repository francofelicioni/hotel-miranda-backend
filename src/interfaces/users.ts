import { Types } from "mongoose";

export interface IUser {
  _id?: typeof Types.ObjectId;
  image: string;
  full_name: string;
  email: string;
  contact: string;
  description: string;
  start_date: Date;
  status: boolean;
  password: string;
}
