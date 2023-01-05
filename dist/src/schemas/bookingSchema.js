"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookingModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const booking = new mongoose_1.default.Schema({
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
});
exports.bookingModel = mongoose_1.default.model('Booking', booking);
//# sourceMappingURL=bookingSchema.js.map