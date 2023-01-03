"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBooking = exports.updateBooking = exports.addBooking = exports.getBooking = exports.getBookings = void 0;
const connection_1 = require("../connection");
const getBookings = async (req, res) => {
    const results = await (0, connection_1.dbQuery)("SELECT * FROM bookings", null);
    return res.json({ bookings: results });
};
exports.getBookings = getBookings;
const getBooking = async (req, res) => {
    const { id } = req.params;
    const result = await (0, connection_1.dbQuery)(`SELECT * FROM bookings where id = ${id}`, null);
    return res.json({ booking: result });
};
exports.getBooking = getBooking;
const addBooking = (req, res) => {
    const { booking } = req.body;
    (0, connection_1.dbQuery)(`INSERT INTO bookings SET ?`, booking);
    return res.json({ success: "Booking added", booking: booking });
};
exports.addBooking = addBooking;
const updateBooking = (req, res) => {
    const { id } = req.params;
    const { booking } = req.body;
    (0, connection_1.dbQuery)(`UPDATE bookings SET ? where id = ${id}`, booking);
    return res.json({ success: "Booking updated", booking: booking });
};
exports.updateBooking = updateBooking;
const deleteBooking = (req, res) => {
    const { id } = req.params;
    (0, connection_1.dbQuery)(`DELETE FROM bookings WHERE id = ${id}`, null);
    return res.json({ success: "Booking deleted" });
};
exports.deleteBooking = deleteBooking;
//# sourceMappingURL=bookings.js.map