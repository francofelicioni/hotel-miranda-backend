"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const roomRouter = express_1.default.Router();
const rooms_1 = require("../controllers/rooms");
//Routes
const path = 'rooms';
roomRouter.get(`/${path}`, rooms_1.getRooms);
roomRouter.get(`/${path}/:id`, rooms_1.getRoom);
roomRouter.get(`/${path}`, rooms_1.addRoom);
roomRouter.get(`/${path}/:id`, rooms_1.updateRoom);
roomRouter.get(`/${path}/:id`, rooms_1.deleteRoom);
exports.default = roomRouter;
//# sourceMappingURL=rooms.js.map