"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const contactRouter = express_1.default.Router();
const contact_1 = require("../controllers/contact");
const path = 'contact';
contactRouter.get(`/${path}`, contact_1.getMessages);
contactRouter.get(`/${path}/:id`, contact_1.getMessage);
contactRouter.get(`/${path}`, contact_1.addMessage);
contactRouter.get(`/${path}/:id`, contact_1.updateMessage);
contactRouter.get(`/${path}/:id`, contact_1.deleteMessage);
exports.default = contactRouter;
//# sourceMappingURL=contact.js.map