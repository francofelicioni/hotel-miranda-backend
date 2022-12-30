"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
const passport_local_1 = __importDefault(require("passport-local"));
const passport_jwt_1 = __importDefault(require("passport-jwt"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const localStrategy = passport_local_1.default.Strategy;
const JWTStrategy = passport_jwt_1.default.Strategy;
const ExtractJwt = passport_jwt_1.default.ExtractJwt;
passport_1.default.use("login", new localStrategy({
    usernameField: "email",
    passwordField: "password",
}, async (email, password, done) => {
    try {
        const hash = await bcrypt_1.default.hash(password, 10);
        if (email === "fran@test.com" && hash === "1234") {
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