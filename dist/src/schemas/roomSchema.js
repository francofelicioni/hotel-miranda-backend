"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.roomModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const room = new mongoose_1.default.Schema({
    images: String,
    bed_type: String,
    room_number: Number,
    description: String,
    price: Number,
    offer: Boolean,
    offer_price: Number,
    cancellation: String,
    facilities: String,
    status: Boolean,
});
exports.roomModel = mongoose_1.default.model("Room", room);
//# sourceMappingURL=roomSchema.js.map