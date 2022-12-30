"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBooking = exports.updateBooking = exports.addBooking = exports.getBooking = exports.getBookings = void 0;
const bookings_json_1 = __importDefault(require("../../data/bookings.json"));
const getBookings = (req, res) => {
    return res.json({ bookings: bookings_json_1.default });
};
exports.getBookings = getBookings;
const getBooking = (req, res) => {
    const { id } = req.params;
    return res.json({ booking: bookings_json_1.default.find((booking) => booking["id"] == id) });
};
exports.getBooking = getBooking;
const addBooking = (req, res) => {
    const { data } = req.body;
    return res.json({ success: true, message: data });
};
exports.addBooking = addBooking;
const updateBooking = (req, res) => {
    const { data } = req.body;
    return res.json({ success: true, message: data });
};
exports.updateBooking = updateBooking;
const deleteBooking = (req, res) => {
    return res.json({ success: true });
};
exports.deleteBooking = deleteBooking;
//# sourceMappingURL=bookings.js.map