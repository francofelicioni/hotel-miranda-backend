"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const user = new mongoose_1.default.Schema({
    customer: String,
    email: String,
    phone: String,
    Date: Date,
    Subject: String,
    Comment: String,
});
exports.userModel = mongoose_1.default.model('userSchema', user);
//# sourceMappingURL=userSchema.js.map