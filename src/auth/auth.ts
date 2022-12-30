import passport from "passport";
import passportLocal from "passport-local";
import passportJwt from "passport-jwt";
import { ILogin } from "../interfaces/ILogin";

import bcrypt from 'bcrypt';

const localStrategy = passportLocal.Strategy;
const JWTStrategy = passportJwt.Strategy;
const ExtractJwt = passportJwt.ExtractJwt;

passport.use(
  "login",
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async (email, password, done) => {
      try {
        const hash = await bcrypt.hash(password, 10);
        if (email === "fran@test.com" && hash === "1234") {
          const user: ILogin = {
            id: 1,
            email: email,
          };
          return done(null, user, { message: "Login successful" });
        } else
          return done(null, false, { message: "Incorrect login information" });
      } catch (error) {
        return done(error);
      }
    }
  )
);

passport.use(
  new JWTStrategy(
    {
      secretOrKey: "6Ez8tHcSkEA0plMsCC4W",
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    },
    (token, done) => {
      try {
        return done(null, token.user);
      } catch (error) {
        done(error);
      }
    }
  )
);
