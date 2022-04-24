"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const router = express_1.default.Router();
// User model
const User_1 = require("../../models/User");
// @route 	POST api/users
// @desc		Register new users
// @access	Public
router.get("/", (req, res) => {
    const { name, email, password } = req.body;
    // Validation
    if (!name || !email || !password) {
        return res.status(400).json({ msg: "Please enter all fields" });
    }
    // Check if user exists
    User_1.User.findOne({ email }).then((user) => {
        if (user)
            return res.status(400).json({ msg: "User already exists" });
        const newUser = new User_1.User({
            name,
            email,
            password,
        });
        // Generate password hash
        bcryptjs_1.default.genSalt(10, (err, salt) => {
            bcryptjs_1.default.hash(newUser.password, salt, (err, hash) => {
                if (err)
                    throw err;
                newUser.password = hash;
                newUser.save().then((user) => {
                    res.json({
                        user: {
                            id: user.id,
                            name: user.name,
                            email: user.email,
                        },
                    });
                });
            });
        });
    });
});
exports.default = router;
//# sourceMappingURL=users.js.map