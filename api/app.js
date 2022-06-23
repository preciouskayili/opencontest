const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");

// Routes
const auth = require("./routes/api/auth");
const users = require("./routes/api/users");
const contest = require("./routes/api/contest");

require("dotenv/config");

const app = express();
const port = 9000;

// Middleware and static files
app.use(express.urlencoded({ limit: "100mb", extended: true }));
app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(morgan("dev"));

// Routes
app.use("/api/contest", contest);
app.use("/api/user", users);
app.use("/api/auth", auth);

app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

// Index Route
app.get("/", (req, res) => {
  res.status(200).json({ msg: "Welcome to the index" });
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
  res.status(404).json({ msg: "Route not found" });
});
