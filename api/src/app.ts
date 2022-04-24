import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import cors from "cors";
import users from "./routes/api/users";

require("dotenv/config");

const app = express();
const port = 9000;

// Middleware and static files
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

// Routes
app.use("/api/user", users);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Connect to DB
mongoose
  .connect(process.env.MONGODB_URI)
  .then((result) => {
    app.listen(port, () => {
      return console.log(`Express is listening at http://localhost:${port}`);
    });
    console.log("Database connected");
  })
  .catch((err) => {
    console.log(err, "Connection failed");
  });

// 404
app.use((req, res) => {
  res.status(404).send("404");
});
