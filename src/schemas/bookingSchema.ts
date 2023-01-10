import mongoose from "mongoose";

const booking = new mongoose.Schema({
  full_name: String,
  order_date: Date,
  check_in: Date,
  check_out: Date,
  room_type: String,
  price: Number,
  image: String,
  special_request: String,
  description: String,
  state: String,
});

export const bookingModel = mongoose.model("Booking", booking);
