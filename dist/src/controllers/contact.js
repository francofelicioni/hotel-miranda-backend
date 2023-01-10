"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMessage = exports.updateMessage = exports.addMessage = exports.getMessage = exports.getMessages = void 0;
const connection_1 = require("../connection");
const contactSchema_1 = require("../schemas/contactSchema");
const getMessages = async (req, res, next) => {
    await (0, connection_1.connection)();
    try {
        const contacts = await contactSchema_1.contactModel.find();
        res.json({ contacts });
    }
    catch (err) {
        next(err);
    }
    await (0, connection_1.disconnect)();
};
exports.getMessages = getMessages;
const getMessage = async (req, res, next) => {
    await (0, connection_1.connection)();
    const { id } = req.params;
    try {
        const contact = await contactSchema_1.contactModel.findById(id);
        res.json(contact);
    }
    catch (err) {
        next(err);
    }
    await (0, connection_1.disconnect)();
};
exports.getMessage = getMessage;
//POST
const addMessage = async (req, res, next) => {
    await (0, connection_1.connection)();
    try {
        const contact = new contactSchema_1.contactModel(req.body);
        const contactToAdd = await contact.save();
        res.status(201).json({ contactToAdd });
    }
    catch (err) {
        if (err.status === 404) {
            return res.status(404).json({
                error: true,
                message: "Error while trying to add contact message",
            });
        }
        else {
            next(err);
        }
    }
    await (0, connection_1.disconnect)();
};
exports.addMessage = addMessage;
//PUT
const updateMessage = async (req, res, next) => {
    await (0, connection_1.connection)();
    const { id } = req.params;
    try {
        const contact = req.body;
        const contactToUpdate = await contactSchema_1.contactModel.findOneAndUpdate({ _id: id }, contact);
        res.status(201).json({
            success: "Contact message updated",
            contact: contactToUpdate,
        });
    }
    catch (err) {
        if (err.status === 404) {
            return res.status(404).json({
                error: true,
                message: "Error while trying to update. Message was not updated",
            });
        }
        else {
            next(err);
        }
    }
    await (0, connection_1.disconnect)();
};
exports.updateMessage = updateMessage;
const deleteMessage = async (req, res, next) => {
    await (0, connection_1.connection)();
    const { id } = req.params;
    try {
        const contactToDelete = await contactSchema_1.contactModel.findByIdAndDelete({
            _id: id,
        });
        res.status(202).json({
            message: `Contact ${id} was deleted.`,
        });
    }
    catch (err) {
        if (err.status === 404) {
            return res.status(404).json({
                error: true,
                message: "Error while trying to delete. Contact message was not deleted",
            });
        }
        else {
            next(err);
        }
        await (0, connection_1.disconnect)();
    }
};
exports.deleteMessage = deleteMessage;
//# sourceMappingURL=contact.js.map