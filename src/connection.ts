import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

const MONGODB_URL = "mongodb://127.0.0.1:27017/hotel_miranda_backend";

mongoose.set("strictQuery", false);

export async function connection(): Promise<void> {
  try {
    await mongoose.connect(MONGODB_URL);
  } catch (err) {
    console.log(err);
  }
}

export async function disconnect(): Promise<void> {
  await mongoose.disconnect();
}
