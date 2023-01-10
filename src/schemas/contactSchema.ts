import mongoose from "mongoose";

const contact = new mongoose.Schema({
  customer: String,
  phone: String,
  date: Date,
  email: String,
  subject: String,
  comment: String,
  archived: Boolean,
});

export const contactModel = mongoose.model("Contact", contact);
