"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMessage = exports.updateMessage = exports.addMessage = exports.getMessage = exports.getMessages = void 0;
const contact_json_1 = __importDefault(require("../../data/contact.json"));
const getMessages = (req, res) => {
    return res.json({ messages: contact_json_1.default });
};
exports.getMessages = getMessages;
const getMessage = (req, res) => {
    const { id } = req.params;
    return res.json({ message: contact_json_1.default.find((message) => message["id"] == id) });
};
exports.getMessage = getMessage;
const addMessage = (req, res) => {
    const { data } = req.body;
    return res.json({ success: true, message: data });
};
exports.addMessage = addMessage;
const updateMessage = (req, res) => {
    const { data } = req.body;
    return res.json({ success: true, message: data });
};
exports.updateMessage = updateMessage;
const deleteMessage = (req, res) => {
    return res.json({ success: true });
};
exports.deleteMessage = deleteMessage;
//# sourceMappingURL=contact.js.map