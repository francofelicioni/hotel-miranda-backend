"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
const passport_local_1 = __importDefault(require("passport-local"));
const passport_jwt_1 = __importDefault(require("passport-jwt"));
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const localStrategy = passport_local_1.default.Strategy;
const JWTStrategy = passport_jwt_1.default.Strategy;
const ExtractJwt = passport_jwt_1.default.ExtractJwt;
passport_1.default.use("login", new localStrategy({
    usernameField: "email",
    passwordField: "password",
}, (email, password, done) => {
    try {
        if (email === process.env.AUTH_EMAIl && password === process.env.AUTH_PASSWORD) {
            const user = {
                id: 1,
                email: email,
            };
            return done(null, user, { message: "Login successful" });
        }
        else
            return done(null, false, { message: "Incorrect login information" });
    }
    catch (error) {
        return done(error);
    }
}));
passport_1.default.use(new JWTStrategy({
    secretOrKey: "6Ez8tHcSkEA0plMsCC4W",
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
}, (token, done) => {
    try {
        return done(null, token.user);
    }
    catch (error) {
        done(error);
    }
}));
//# sourceMappingURL=auth.js.map