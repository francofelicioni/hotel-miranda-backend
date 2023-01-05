"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const contact_1 = require("../controllers/contact");
const contactRouter = express_1.default.Router();
//Contacts Route
contactRouter.get('/', contact_1.getMessages);
contactRouter.get('/:id', contact_1.getMessage);
contactRouter.get('/', contact_1.addMessage);
contactRouter.get('/', contact_1.updateMessage);
contactRouter.get('/', contact_1.deleteMessage);
exports.default = contactRouter;
//# sourceMappingURL=contact.js.map