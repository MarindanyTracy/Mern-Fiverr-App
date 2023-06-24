import express from "express";
import mongoose, { mongo } from "mongoose";
import dotenv from "dotenv";

const app = express();
dotenv.config();
mongoose.set("strictQuery", true);

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to mongoDB!");
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
};

app.listen(process.env.PORT, () => {
  console.log(`Server listening at ${process.env.PORT}`);
  connect();
});
