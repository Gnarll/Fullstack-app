import express from "express";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import { registerValidation } from "./vadlidations/auth.js";
import { validationResult } from "express-validator";

const app = express();

app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://admin:admin@cluster0.m9ustyg.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("DB OK");
  })
  .catch((err) => {
    console.log(err);
  });

app.post("/auth/register", registerValidation, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(errors.array());
  }

  res.json({ success: true });
});

app.listen("4444", (err) => {
  if (err) return console.log(err);
  console.log("Server OK");
});
