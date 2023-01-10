"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const user = new mongoose_1.default.Schema({
    image: String,
    full_name: String,
    email: String,
    contact: String,
    description: String,
    start_date: Date,
    status: Boolean,
    password: String,
});
exports.userModel = mongoose_1.default.model("User", user);
//# sourceMappingURL=userSchema.js.map