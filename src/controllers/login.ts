import { Request, Response, NextFunction } from "express";
import passport from "passport";
import jwt from "jsonwebtoken";

export const postLogin = (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate("login", (err, user, info) => {
    try {
      if (!user || err) {
        return next(new Error("Something went wrong"));
      }
      req.login(user, { session: false }, (error) =>
        error
          ? next(error)
          : res.json({
              token: jwt.sign(
                { user: { id: user.id, email: user.email } },
                "6Ez8tHcSkEA0plMsCC4W"
              ),
            })
      );
    } catch (error) {
      return next(error);
    }
  })(req, res, next);
};
