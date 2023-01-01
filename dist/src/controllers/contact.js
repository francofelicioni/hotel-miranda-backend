"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMessage = exports.updateMessage = exports.addMessage = exports.getMessage = exports.getMessages = void 0;
const connection_1 = require("src/db/connection");
const getMessages = async (req, res) => {
    const results = await (0, connection_1.dbQuery)("SELECT * FROM contacts", null);
    return res.json({ contacts: results });
};
exports.getMessages = getMessages;
const getMessage = async (req, res) => {
    const { id } = req.params;
    const result = await (0, connection_1.dbQuery)(`SELECT * FROM contacts WHERE id = ${id}`, null);
    return res.json({ contact: result });
};
exports.getMessage = getMessage;
const addMessage = (req, res) => {
    const { contact } = req.body;
    (0, connection_1.dbQuery)(`INSERT INTO contacts SET ?`, contact);
    return res.json({ success: "Contact added", contact: contact });
};
exports.addMessage = addMessage;
const updateMessage = (req, res) => {
    const { id } = req.params;
    const { contact } = req.body;
    (0, connection_1.dbQuery)(`UPDATE contacts SET ? WHERE id = ${id}`, contact);
    return res.json({ success: "Contact updated", contact: contact });
};
exports.updateMessage = updateMessage;
const deleteMessage = (req, res) => {
    const { id } = req.params;
    (0, connection_1.dbQuery)(`DELETE FROM contacts WHERE id = ${id}`, null);
    return res.json({ success: "Contact deleted" });
};
exports.deleteMessage = deleteMessage;
//# sourceMappingURL=contact.js.map