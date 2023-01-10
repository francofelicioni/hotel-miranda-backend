"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const contact = new mongoose_1.default.Schema({
    customer: String,
    phone: String,
    date: Date,
    email: String,
    subject: String,
    comment: String,
    archived: Boolean,
});
exports.contactModel = mongoose_1.default.model("Contact", contact);
//# sourceMappingURL=contactSchema.js.map