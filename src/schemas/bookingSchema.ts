import mongoose, { Types } from "mongoose";

const booking = new mongoose.Schema({
  user_id: { type: Types.ObjectId, required: true },
  room_id: { type: Types.ObjectId, required: true },
  full_name: { type: String, required: true },
  order_date: { type: String, required: true },
  check_in: { type: Date, required: true },
  check_out: { type: Date, required: true },
  room_type: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  special_request: String,
  description: String,
  state:  { type: String, required: true },
});

export const bookingModel = mongoose.model("Booking", booking);
