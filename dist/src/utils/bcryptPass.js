"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const bcryptPass = (pass) => {
    return bcrypt_1.default.hashSync(pass, 10);
};
exports.default = bcryptPass;
//# sourceMappingURL=bcryptPass.js.map