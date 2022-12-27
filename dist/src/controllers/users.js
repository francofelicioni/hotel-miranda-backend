"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.addUser = exports.getUser = exports.getUsers = void 0;
const users_json_1 = __importDefault(require("../../data/users.json"));
const getUsers = (req, res) => {
    return res.json({ users: users_json_1.default });
};
exports.getUsers = getUsers;
const getUser = (req, res) => {
    const { id } = req.params;
    return res.json({
        user: users_json_1.default.find((user) => user["id"] == id),
    });
};
exports.getUser = getUser;
const addUser = (req, res) => {
    const { data } = req.body;
    return res.json({ success: true, user: data });
};
exports.addUser = addUser;
const updateUser = (req, res) => {
    const { data } = req.body;
    return res.json({ success: true, message: data });
};
exports.updateUser = updateUser;
const deleteUser = (req, res) => {
    return res.json({ success: true });
};
exports.deleteUser = deleteUser;
//# sourceMappingURL=users.js.map