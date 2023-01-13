import passport from "passport";
import passportLocal from "passport-local";
import passportJwt from "passport-jwt";
import { ILogin } from "../interfaces/login";
import * as bcrypt from "bcrypt";
import * as dotenv from "dotenv";
import { connection } from "../connection";
import { userModel } from "../schemas/userSchema";
dotenv.config();

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
    async (email: string, password: string, done) => {
      await connection();
      try {
        const currentUser = await userModel.findOne({ email: email }).exec();

        if (!currentUser) {
          done(new Error("Check your credentials please."));
        }

        const passwordOK = await bcrypt.compare(password, currentUser.password);

        if (!passwordOK) {
          if (
            email === process.env.AUTH_EMAIl &&
            password === process.env.AUTH_PASSWORD
          ) {
            const user: ILogin = {
              id: 1,
              email: email,
            };
            return done(null, user, { message: "Login successful" });
          } else {
            return done(new Error("Incorrect login information"), false, {
              message: "Check your login credentials",
            });
          }
        } else {
          return done(
            null,
            { _id: currentUser._id, email: currentUser.email },
            { message: "User logged successfully" }
          );
        }
      } catch (error) {
        console.log(error);
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
