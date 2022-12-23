import passport from "passport";
import passportLocal from "passport-local";
import passportJwt from "passport-jwt";

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
          const user = {
            id: 1,
            email: email,
          };

          return done(null, user, { message: "Login successful" });
        } else
          return done(null, false, {
            message: "Incorrect Email and/or password ",
          });
      } catch (e) {
        return done(e);
      }
    }
  )
);

passport.use(
  new JWTStrategy(
    {
      secretOrKey: "TOP_SECRET",
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    },
    (token, done) => {
      try {
        return done(null, token.user);
      } catch (e) {
        done(e);
      }
    }
  )
);
