"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRoom = exports.updateRoom = exports.addRooms = exports.getRoom = exports.getRooms = void 0;
const connection_1 = require("../connection");
const getRooms = async (req, res) => {
    const results = await (0, connection_1.dbQuery)("SELECT *  FROM rooms", null);
    return res.json({ rooms: results });
};
exports.getRooms = getRooms;
const getRoom = async (req, res) => {
    const { id } = req.params;
    const result = await (0, connection_1.dbQuery)(`SELECT * FROM rooms WHERE id = ${id}`, null);
    return res.json({ contact: result });
};
exports.getRoom = getRoom;
const addRooms = (req, res) => {
    const { room } = req.body;
    (0, connection_1.dbQuery)(`INSERT INTO rooms SET ?`, room);
    return res.json({ success: 'Room added', room: room });
};
exports.addRooms = addRooms;
const updateRoom = (req, res) => {
    const { id } = req.params;
    const { room } = req.body;
    (0, connection_1.dbQuery)(`UPDATE rooms SET ? WHERE id =${id}`, room);
    return res.json({ success: "Room updated", room: room });
};
exports.updateRoom = updateRoom;
const deleteRoom = (req, res) => {
    const { id } = req.params;
    (0, connection_1.dbQuery)(`DELETE FROM rooms WHERE id = ${id}`, null);
    return res.json({ success: 'Room deleted' });
};
exports.deleteRoom = deleteRoom;
//# sourceMappingURL=rooms.js.map