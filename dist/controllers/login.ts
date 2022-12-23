import { Request, Response, NextFunction } from "express";
import passport from "passport";
import jwt from "jsonwebtoken";

export const postLogin = (req: Request, res: Response, next: NextFunction) => {
  //   passport.authenticate("login", (err, user) => {
  //     try {
  //       if (!user || err) {
  //         return next(new Error("Error in authentication"));
  //       }
  //       req.login(user, { sesion: false }, (error) =>
  //         error
  //           ? next(error)
  //           : res.json(
  //               jwt.sign(
  //                 { user: { id: user.id, email: user.email } },
  //                 "TOP_SECRET"
  //               )
  //             )
  //       );
  //     } catch (e) {
  //       return next(e);
  //     }
  //   })(req, res, next);
  passport.authenticate("login", (err, user) => {
    try {
      if (!user || err) {
        return next(new Error("Something went wrong"));
      }
      req.login(user, { session: false }, (error) =>
        error
          ? next(error)
          : res.json(
              jwt.sign(
                { user: { id: user.id, email: user.email } },
                "TOP_SECRET"
              )
            )
      );
    } catch (error) {
      return next(error);
    }
  })(req, res, next);
};
