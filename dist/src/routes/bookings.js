"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bookingRouter = express_1.default.Router();
const bookings_1 = require("../controllers/bookings");
//Routes
const path = 'bookings';
bookingRouter.get(`/${path}`, bookings_1.getBookings);
bookingRouter.get(`/${path}/:id`, bookings_1.getBooking);
bookingRouter.get(`/${path}`, bookings_1.addBooking);
bookingRouter.get(`/${path}/:id`, bookings_1.updateBooking);
bookingRouter.get(`/${path}/:id`, bookings_1.deleteBooking);
exports.default = bookingRouter;
//# sourceMappingURL=bookings.js.map