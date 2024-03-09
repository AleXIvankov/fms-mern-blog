import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import User from "../models/user.model.js";

export const test = (req, res) => {
  res.json({ message: "API is working!!!" });
};

export const updateUser = async (req, res, next) => {
  if (req.user.id !== req.params.userId) {
    return next(
      errorHandler(403, `Vous n'êtes pas autorisé à modifier cet utilisateur`)
    );
  }
  if (req.body.password) {
    if (req.body.password.leng < 6) {
      return next(
        errorHandler(
          400,
          `Votre mot de passe doit être au moins de 6 caractères`
        )
      );
    }
    req.body.password = bcryptjs.hashSync(req.body.password, 10);
  }
  if (req.body.username) {
    if (req.body.username.length < 5 || req.body.username.length > 20) {
      return next(
        errorHandler(
          400,
          `Votre nom doit contenir au moins cinq mais pas plus de 20 caractères`
        )
      );
    }
    if (req.body.username.includes(" ")) {
      return next(
        errorHandler(400, `Votre nom ne doit pas contenir d'espaces`)
      );
    }
    if (!req.body.username.match(/^[a-zA-Z0-9]+$/)) {
      return next(
        errorHandler(
          400,
          `Votre nom ne doit pas contenir de caractères spéciaux`
        )
      );
    }
  }
  try {
    const updateUser = await User.findByIdAndUpdate(
      req.params.userId,
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          profilePicture: req.body.profilePicture,
          password: req.body.password,
        },
      },
      { new: true }
    );
    const { password, ...rest } = updateUser._doc;
    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};
