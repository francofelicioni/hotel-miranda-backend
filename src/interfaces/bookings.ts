import { Types } from "mongoose";

export interface IBooking {
  id?: typeof Types.ObjectId;
  user_id: number | undefined | typeof Types.ObjectId,
  room_id: string | undefined | typeof Types.ObjectId,
  full_name: string;
  order_date: String;
  check_in: Date;
  check_out: Date;
  room_type: string;
  price: number;
  image: string;
  special_request: string;
  description: string;
  state: string;
}
