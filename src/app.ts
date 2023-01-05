import createError from "http-errors";
import express, { Response, Request, NextFunction } from "express";
import bookingsRouter from "./routes/bookings";
import roomsRouter from "./routes/rooms";
import usersRouter from "./routes/users";
import contactsRouter from "./routes/contact";
import loginRouter from "./routes/login";
import passport from "passport";
import("./auth/auth");

import ('./connection')

const app = express();

app.use(express.json());
const PORT = 3000;


app.listen(app.get('port'), () => {
  console.log('Server online and running on port', app.get('port'))
})

app.use("/login", loginRouter);

app.use(
  "/bookings",
  passport.authenticate("jwt", { session: false }),
  bookingsRouter
);
app.use(
  "/rooms",
  passport.authenticate("jwt", { session: false }),
  roomsRouter
);
app.use(
  "/users",
  passport.authenticate("jwt", { session: false }),
  usersRouter
);
app.use(
  "/contacts",
  passport.authenticate("jwt", { session: false }),
  contactsRouter
);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json("Error when trying to make the authorization");
});
