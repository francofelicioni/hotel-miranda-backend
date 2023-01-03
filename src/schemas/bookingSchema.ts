import mongoose from 'mongoose';

const booking = new mongoose.Schema ({
    image: String,
    full_name: String,
    order_date: Date,
    check_in: Date,
    check_out: Date,
    special_request: String,
    room_type: Number,
    price: Number,
    facilities: String,
    state: String,
})

export const bookingSchema = mongoose.model('Booking', booking)