"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBooking = exports.updateBooking = exports.addBooking = exports.getBooking = exports.getBookings = void 0;
const connection_1 = require("../connection");
const bookingSchema_1 = require("../schemas/bookingSchema");
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
//POST
const addBooking = async (req, res, next) => {
    await (0, connection_1.connection)();
    try {
        const booking = new bookingSchema_1.bookingModel(req.body);
        console.log('THIS IS BOOKING', booking);
        const bookingToAdd = await booking.save();
        console.log('THIS IS BOOKING TO ADD', bookingToAdd);
        res.status(201).json({ bookingToAdd });
    }
    catch (err) {
        if (err.status === 400) {
            return res.status(400).json({
                error: true,
                message: "Error while trying to add the room, check the booking information.",
            });
        }
        else {
            next(err);
        }
    }
    await (0, connection_1.disconnect)();
};
exports.addBooking = addBooking;
//PUT
const updateBooking = async (req, res, next) => {
    await (0, connection_1.connection)();
    const { id } = req.params;
    try {
        const booking = req.body;
        console.log("THIS IS BOOKING", booking);
        const bookingToUpdate = await bookingSchema_1.bookingModel.findOneAndUpdate({ _id: id }, booking);
        console.log("THIS IS BOOKING TO UPDATE", bookingToUpdate);
        res.status(201).json({
            success: "Booking updated",
            booking: bookingToUpdate,
        });
    }
    catch (err) {
        if (err.status === 404) {
            return res.status(404).json({
                error: true,
                message: "Error, check the booking information.",
            });
        }
        else {
            next(err);
        }
    }
    await (0, connection_1.disconnect)();
};
exports.updateBooking = updateBooking;
const deleteBooking = async (req, res, next) => {
    await (0, connection_1.connection)();
    const { id } = req.params;
    try {
        const bookingToDelete = await bookingSchema_1.bookingModel.findOneAndDelete({
            _id: id,
        });
        res.status(202).json({
            success: `Booking ${id} was deleted.`,
        });
    }
    catch (err) {
        if (err.status === 404) {
            return res.status(404).json({
                error: true,
                message: "Error, the booking was not deleted.",
            });
        }
        else {
            next(err);
        }
    }
    await (0, connection_1.disconnect)();
};
exports.deleteBooking = deleteBooking;
//# sourceMappingURL=bookings.js.map