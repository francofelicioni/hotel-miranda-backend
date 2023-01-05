"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBooking = exports.updateBooking = exports.addBooking = exports.getBooking = exports.getBookings = void 0;
const connection_1 = require("src/connection");
const bookingSchema_1 = require("src/schemas/bookingSchema");
const getBookings = async (req, res, next) => {
    await (0, connection_1.connection)();
    try {
        const bookings = await bookingSchema_1.bookingModel.find();
        res.json(bookings);
    }
    catch (err) {
        next(err);
    }
    await (0, connection_1.disconnect)();
};
exports.getBookings = getBookings;
const getBooking = async (req, res, next) => {
    await (0, connection_1.connection)();
    const { id } = req.params;
    try {
        const booking = await bookingSchema_1.bookingModel.findById(id);
        res.json(booking);
    }
    catch (err) {
        next(err);
    }
    await (0, connection_1.disconnect)();
};
exports.getBooking = getBooking;
const addBooking = async (req, res, next) => {
    await (0, connection_1.connection)();
    const booking = new bookingSchema_1.bookingModel(req.body);
    try {
        const bookingToPost = await booking.save();
        res.status(201).json({ bookingToPost });
    }
    catch (err) {
        res.status(400).send({
            error: "Error, check the booking information.",
        });
        next(err);
    }
    await (0, connection_1.disconnect)();
};
exports.addBooking = addBooking;
const updateBooking = async (req, res, next) => {
    await (0, connection_1.connection)();
    const { id } = req.params;
    const booking = req.body;
    try {
        const bookingToUpdate = await bookingSchema_1.bookingModel.findByIdAndUpdate({ _id: id }, booking);
        res.status(201).json({
            success: "Booking updated", booking: bookingToUpdate
        });
    }
    catch (err) {
        res.status(400).json({
            error: "Error, check the booking information.",
        });
        next(err);
    }
    await (0, connection_1.disconnect)();
};
exports.updateBooking = updateBooking;
const deleteBooking = async (req, res, next) => {
    await (0, connection_1.connection)();
    const { id } = req.params;
    try {
        const bookingToDelete = await bookingSchema_1.bookingModel.findOneAndDelete({ '_id': id });
        res.status(202).json({
            success: `Booking ${id} was removed.`
        });
    }
    catch (err) {
        res.status(400).json({
            error: 'Error, the booking could not be deleted.'
        });
        next(err);
    }
};
exports.deleteBooking = deleteBooking;
//# sourceMappingURL=bookings.js.map