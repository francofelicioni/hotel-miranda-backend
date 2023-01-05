import mongoose from 'mongoose';

const contact = new mongoose.Schema ({
    customer: String,
    email: String,
    phone: Number,
    date: Date,
    subject: String,
    comment: String
})

export const contactModel = mongoose.model ('Contact', contact)