import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

const MONGODB_URL = process.env.MONGO_URL

mongoose.set("strictQuery", false);

export async function connection(): Promise<void> {
  try {
    await mongoose.connect(MONGODB_URL);
    console.log('connected')
  } catch (err) {

    console.log(err);
  }
}

export async function disconnect(): Promise<void> {
  await mongoose.disconnect();
}
