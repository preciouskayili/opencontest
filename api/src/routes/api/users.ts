import express from "express";
import bcrypt from "bcryptjs";

const router = express.Router();

// User model
import { User } from "../../models/User";

// Response type
interface NewUserInterface {
  id: string;
  name: string;
  email: string;
}

interface ErrorInterface {
  msg: string;
}

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
  User.findOne({ email }).then((user) => {
    if (user) return res.status(400).json({ msg: "User already exists" });

    const newUser = new User({
      name,
      email,
      password,
    });

    // Generate password hash
    bcrypt.genSalt(10, (err: ErrorInterface, salt: string) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser.save().then((user: NewUserInterface) => {
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

export default router;
