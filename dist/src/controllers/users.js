"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.addUser = exports.getUser = exports.getUsers = void 0;
const connection_1 = require("../connection");
const userSchema_1 = require("../schemas/userSchema");
const bcrypt_1 = __importDefault(require("bcrypt"));
const bcryptPass_1 = __importDefault(require("../utils/bcryptPass"));
const getUsers = async (req, res, next) => {
    await (0, connection_1.connection)();
    try {
        const users = await userSchema_1.userModel.find();
        res.json(users);
    }
    catch (err) {
        next(err);
    }
    await (0, connection_1.disconnect)();
};
exports.getUsers = getUsers;
const getUser = async (req, res, next) => {
    await (0, connection_1.connection)();
    const { id } = req.params;
    try {
        const user = await userSchema_1.userModel.findById(id);
        res.json({ user });
    }
    catch (err) {
        next(err);
    }
    await (0, connection_1.disconnect)();
};
exports.getUser = getUser;
const addUser = async (req, res, next) => {
    await (0, connection_1.connection)();
    try {
        const user = new userSchema_1.userModel(req.body);
        const userToAdd = await user.save();
        res.status(201).json({
            success: true,
            user: userToAdd,
        });
    }
    catch (err) {
        if (err.status === 404) {
            return res.status(404).json({
                error: true,
                message: "Error while trying to add user, check the information",
            });
        }
        else {
            next(err);
        }
    }
    await (0, connection_1.disconnect)();
};
exports.addUser = addUser;
const updateUser = async (req, res, next) => {
    await (0, connection_1.connection)();
    const { id } = req.params;
    try {
        // const user: IUser = req.body;
        const { image, full_name, email, contact, description, start_date, status, password } = req.body;
        const userInDB = await userSchema_1.userModel.findById(id);
        const user = {
            image: image ? image : userInDB === null || userInDB === void 0 ? void 0 : userInDB.image,
            full_name: full_name ? full_name : userInDB === null || userInDB === void 0 ? void 0 : userInDB.full_name,
            email: email ? email : userInDB === null || userInDB === void 0 ? void 0 : userInDB.email,
            contact: contact ? contact : userInDB === null || userInDB === void 0 ? void 0 : userInDB.contact,
            description: description ? description : userInDB === null || userInDB === void 0 ? void 0 : userInDB.description,
            start_date: start_date ? start_date : userInDB === null || userInDB === void 0 ? void 0 : userInDB.start_date,
            status: status ? status : userInDB === null || userInDB === void 0 ? void 0 : userInDB.status,
            password: bcrypt_1.default.compare(password, String(userInDB === null || userInDB === void 0 ? void 0 : userInDB.password)) ? (0, bcryptPass_1.default)(password) : userInDB === null || userInDB === void 0 ? void 0 : userInDB.password,
        };
        const userToUpdate = await userSchema_1.userModel.findOneAndUpdate({ _id: id }, user);
        res.status(202).json({
            success: `User ${id} updated.`,
            user: userToUpdate,
        });
    }
    catch (err) {
        if (err.status === 400) {
            return res.status(400).json({
                error: true,
                message: "Error while updating user. Check the user information",
            });
        }
        else {
            next(err);
        }
    }
    await (0, connection_1.disconnect)();
};
exports.updateUser = updateUser;
const deleteUser = async (req, res, next) => {
    await (0, connection_1.connection)();
    const { id } = req.params;
    try {
        const userToDelete = await userSchema_1.userModel.findByIdAndDelete({ _id: id });
        res.status(202).json({
            success: `User ${id} was deleted.`,
        });
    }
    catch (err) {
        if (err.status === 404) {
            res.status(404).json({
                error: true,
                message: "Error, user was not deleted.",
            });
        }
    }
    await (0, connection_1.disconnect)();
};
exports.deleteUser = deleteUser;
//# sourceMappingURL=users.js.map