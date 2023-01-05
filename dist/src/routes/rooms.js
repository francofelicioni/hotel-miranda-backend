"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const roomRouter = express_1.default.Router();
const rooms_1 = require("../controllers/rooms");
const roomsRouter = express_1.default.Router();
//Room routes//
roomsRouter.get("/", rooms_1.getRooms);
roomsRouter.get("/:id", rooms_1.getRoom);
roomsRouter.post("/", rooms_1.addRoom);
roomsRouter.put("/:id", rooms_1.updateRoom);
roomsRouter.delete("/:id", rooms_1.deleteRoom);
exports.default = roomsRouter;
//# sourceMappingURL=rooms.js.map