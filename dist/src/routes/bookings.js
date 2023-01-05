"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bookings_1 = require("../controllers/bookings");
const bookingsRouter = express_1.default.Router();
//Bookings Route
bookingsRouter.get('/', bookings_1.getBookings);
bookingsRouter.get('/:id', bookings_1.getBooking);
bookingsRouter.get('/', bookings_1.addBooking);
bookingsRouter.get('/', bookings_1.updateBooking);
bookingsRouter.get('/', bookings_1.deleteBooking);
exports.default = bookingsRouter;
//# sourceMappingURL=bookings.js.map