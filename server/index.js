import express from "express";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

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

app.post("/auth/register", (req, res) => {});

app.listen("4444", (err) => {
  if (err) return console.log(err);
  console.log("Server OK");
});
