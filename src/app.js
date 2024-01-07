import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

// cookies parser for using server cookies and use crud
const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// some settings to get data
// app.use for configurations

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
// for any public static files
app.use(cookieParser());

// Routes

import userRoutes from "../src/routes/user.routes.js";

// app.use("/users" , userRoutes)
app.use("/api/v1/users", userRoutes);
app.get("/", (req, res) => {
  res.send("not h=goodd");
});

export { app };
