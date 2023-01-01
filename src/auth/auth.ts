import passport from "passport";
import passportLocal from "passport-local";
import passportJwt from "passport-jwt";
import { ILogin } from "../interfaces/ILogin";

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
    (email, password, done) => {
      try {
        if (email === "fran@test.com" && password === "1234") {
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
