import { check, validationResult } from "express-validator";
import { StatusCodes } from "http-status-codes";

export const validateSignUpRequest = [
  check("username").notEmpty().withMessage("Please enter a username."),
  check("password")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long."),
];

export const validateSignInRequest = [
  check("username").notEmpty().withMessage("Please enter a username."),
  check("password")
    .isLength({ min: 8 })
    .withMessage("Please enter a valid password (min. 8 characters)."),
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
