import { check, validationResult } from "express-validator";
import { StatusCodes } from "http-status-codes";

export const validateSignUpRequest = [
  check("username")
    .notEmpty()
    // .withMessage("Please enter a username."),
    .json({ message: "Please enter a username." }),
  check("password")
    .matches(
      /^(?=.*?[A-z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^A-Za-z0-9]).{8,25}$/g
    )
    // .withMessage("Password must be 8 to 25 characters long, have one uppercase, have one lowercase character, one digit, and one special character."),
    .json({
      message:
        "Password must be 8 to 25 characters long, have one uppercase, have one lowercase character, one digit, and one special character.",
    }),
];

export const validateSignInRequest = [
  check("username")
    .notEmpty()
    // .withMessage("Please enter a username."),
    .json({ message: "Please enter a username." }),
  check("password")
    .notEmpty()
    // .withMessage("Please enter a password."),
    .json({ message: "Please enter a password." }),
];

export function isRequestValidated(req, res, next) {
  const errors = validationResult(req);
  if (errors.array().length > 0) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ error: errors.array()[0].msg });
  }
  next();
}
