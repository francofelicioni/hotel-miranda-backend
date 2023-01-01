"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRoom = exports.putRoom = exports.postRooms = exports.getRoom = exports.getRooms = void 0;
const rooms_json_1 = __importDefault(require("../../data/rooms.json"));
const getRooms = (req, res) => {
    return res.json({ rooms: rooms_json_1.default });
};
exports.getRooms = getRooms;
const getRoom = (req, res) => {
    const { id } = req.params;
    return res.json({
        room: rooms_json_1.default.find((room) => room["id"] == id),
    });
};
exports.getRoom = getRoom;
const postRooms = (req, res) => {
    const { data } = req.body;
    return res.json({ success: true, message: data });
};
exports.postRooms = postRooms;
const putRoom = (req, res) => {
    const { data } = req.body;
    return res.json({ success: true, message: data });
};
exports.putRoom = putRoom;
const deleteRoom = (req, res) => {
    return res.json({ success: true });
};
exports.deleteRoom = deleteRoom;
//# sourceMappingURL=rooms.js.map