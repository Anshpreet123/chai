// require('dotenv').config({path : './env'});
import dotenv from "dotenv";
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";
import { app } from "../src/app.js";

// while importing it is very much required
dotenv.config({
  path: "./env",
});

connectDB()
  // when  we use async then we get promises too
  // so we  hav eto handle them also

  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at Port :${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("MongoDB connection failed !! ;", error);
  });

// import express from "express";

// const app = express();

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("error", () => {
//       console.log("App not able to talk to db");
//       throw error;
//     });

//     app.listen(process.env.PORT, () => {
//       console.log(`App is listening on ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.log("ERROR :", error);
//     throw error;
//   }
// })();
