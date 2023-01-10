"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRoom = exports.updateRoom = exports.addRoom = exports.getRoom = exports.getRooms = void 0;
const connection_1 = require("../connection");
const roomSchema_1 = require("../schemas/roomSchema");
const getRooms = async (req, res, next) => {
    await (0, connection_1.connection)();
    try {
        const rooms = await roomSchema_1.roomModel.find();
        res.json(rooms);
    }
    catch (err) {
        next(err);
    }
    await (0, connection_1.disconnect)();
};
exports.getRooms = getRooms;
const getRoom = async (req, res, next) => {
    await (0, connection_1.connection)();
    const { id } = req.params;
    try {
        const room = await roomSchema_1.roomModel.findById(id);
        res.json(room);
    }
    catch (err) {
        next(err);
    }
    await (0, connection_1.disconnect)();
};
exports.getRoom = getRoom;
//POST
const addRoom = async (req, res, next) => {
    await (0, connection_1.connection)();
    try {
        const room = new roomSchema_1.roomModel(req.body);
        const roomToPost = await room.save();
        res.status(202).json({ roomToPost });
    }
    catch (err) {
        if (err.status === 404) {
            return res.status(404).json({
                error: true,
                message: "Error while trying to add the room, check the information",
            });
        }
        else {
            next(err);
        }
    }
    await (0, connection_1.disconnect)();
};
exports.addRoom = addRoom;
//PUT
const updateRoom = async (req, res, next) => {
    await (0, connection_1.connection)();
    try {
        const { id } = req.params;
        const room = req.body;
        console.log('THIS IS ROOM', room);
        const roomToUpdate = await roomSchema_1.roomModel.findOneAndUpdate({ _id: id }, room);
        console.log('THIS IS ROOM to update', roomToUpdate);
        res.status(201).json({
            success: "Room updated successfully",
            room: roomToUpdate,
        });
    }
    catch (err) {
        if (err.status === 404) {
            return res.status(404).json({
                error: true,
                message: "Error while updating. Room did not saved",
            });
        }
        else {
            next(err);
        }
    }
    await (0, connection_1.disconnect)();
};
exports.updateRoom = updateRoom;
const deleteRoom = async (req, res, next) => {
    await (0, connection_1.connection)();
    const { id } = req.params;
    try {
        const roomToDelete = await roomSchema_1.roomModel.findByIdAndDelete({ _id: id });
        res.status(202).json({
            success: `Room ${id} was deleted.`,
        });
    }
    catch (err) {
        if (err.status === 404) {
            return res.status(404).json({
                error: true,
                message: "Error. Room was not deleted.",
            });
        }
        else {
            next(err);
        }
    }
    await (0, connection_1.disconnect)();
};
exports.deleteRoom = deleteRoom;
//# sourceMappingURL=rooms.js.map