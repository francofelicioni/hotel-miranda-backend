"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const password = async (pass) => {
    return await bcrypt_1.default.hash(pass, 10).then((result) => result);
};
exports.default = password;
//# sourceMappingURL=bcryptPass.js.map