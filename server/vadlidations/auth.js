import { body } from "express-validator";

export const registerValidation = [
  body("email", "Invalid mail format").isEmail(),
  body("password", "Password must contain at least 5 symbols").isLength({
    min: 5,
  }),
  body("fullName", "Enter your name (more than 3 symbols)").isLength({
    min: 3,
  }),
  body("avatarURL", "Invalid avatar ref").optional().isURL(),
];
