import express from "express";
import passport from "passport";

const app = express();
const port = 3000;

import("./auth/auth");

import loginRouter from "./routes/login";
import bookingsRouter from "./routes/bookings";
import roomsRouter from "./routes/rooms";
import contactRouter from "./routes/contact";
import usersRouter from "./routes/bookings";

app.use("/", loginRouter);
app.use("/", passport.authenticate("jwt", { session: false }), bookingsRouter);
app.use("/", passport.authenticate("jwt", { session: false }), roomsRouter);
app.use("/", passport.authenticate("jwt", { session: false }), contactRouter);
app.use("/", passport.authenticate("jwt", { session: false }), usersRouter);

app.use(bookingsRouter);

app.listen(port, () => {
  console.log("App is online!");
});
