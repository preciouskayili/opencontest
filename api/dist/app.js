"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const users_1 = __importDefault(require("./routes/api/users"));
require("dotenv/config");
const app = (0, express_1.default)();
const port = 9000;
// Middleware and static files
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use((0, morgan_1.default)("dev"));
app.use((req, res, next) => {
    res.locals.path = req.path;
    next();
});
// Routes
app.use("/api/user", users_1.default);
app.get("/", (req, res) => {
    res.send("Hello World!");
});
// Connect to DB
mongoose_1.default
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
//# sourceMappingURL=app.js.map