import mongoose from "mongoose";

const room = new mongoose.Schema({
  images: String,
  bed_type: String,
  room_number: Number,
  description: String,
  price: Number,
  offer: Boolean,
  offer_price: Number,
  cancellation: String,
  facilities: String,
  status: Boolean,
});

export const roomModel = mongoose.model("Room", room);
