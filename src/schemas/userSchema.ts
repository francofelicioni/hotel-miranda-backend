import mongoose from "mongoose";

const user = new mongoose.Schema({
  image: String,
  full_name: String,
  email: String,
  contact: String,
  description: String,
  start_date: Date,
  status: Boolean,
  password: String,
});

export const userModel = mongoose.model("User", user);
