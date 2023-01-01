"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.addUser = exports.getUser = exports.getUsers = void 0;
const connection_1 = require("src/db/connection");
const getUsers = async (req, res) => {
    const result = await (0, connection_1.dbQuery)("SELECT * FROM users", null);
    return res.json({ users: result });
};
exports.getUsers = getUsers;
const getUser = async (req, res) => {
    const { id } = req.params;
    const result = await (0, connection_1.dbQuery)(`SELECT * FROM users WHERE id = ${id}`, null);
    return res.json({ user: result });
};
exports.getUser = getUser;
const addUser = (req, res) => {
    const { user } = req.body;
    (0, connection_1.dbQuery)(`INSERT INTO users SET ?`, user);
    return res.json({ success: "User added", user: user });
};
exports.addUser = addUser;
const updateUser = (req, res) => {
    const { id } = req.params;
    const { user } = req.body;
    (0, connection_1.dbQuery)(`UPDATE users SET WHERE id = ${id}`, user);
    return res.json({ success: "User updated", user: user });
};
exports.updateUser = updateUser;
const deleteUser = (req, res) => {
    const { id } = req.params;
    (0, connection_1.dbQuery)(`DELETE FROM users WHERE id = ${id}`, null);
    return res.json({ success: "User deleted" });
};
exports.deleteUser = deleteUser;
//# sourceMappingURL=users.js.map