import mongoose from 'mongoose';

const user = new mongoose.Schema ({
    customer: String,
    email: String,
    phone: String,
    Date: Date,
    Subject: String,
    Comment: String,
})

export const userSchema = mongoose.model ('userSchema', user)