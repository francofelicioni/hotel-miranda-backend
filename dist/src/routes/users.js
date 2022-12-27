"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usersRouter = express_1.default.Router();
const users_1 = require("../controllers/users");
const path = 'users';
usersRouter.get(`/${path}`, users_1.getUsers);
usersRouter.get(`/${path}/:id`, users_1.getUser);
usersRouter.get(`/${path}`, users_1.addUser);
usersRouter.get(`/${path}/:id`, users_1.updateUser);
usersRouter.get(`/${path}/:id`, users_1.deleteUser);
exports.default = usersRouter;
//# sourceMappingURL=users.js.map