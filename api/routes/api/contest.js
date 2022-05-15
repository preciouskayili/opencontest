const express = require("express");

const router = express.Router();

require("dotenv/config");

// User model
const Contest = require("../../models/Contest");

// @route 	POST api/contest/create
// @desc		Create new contests
// @access	Public
router.post("/create", (req, res) => {
  const { contestName, contestants, tags, desc, thumbnail } = req.body;

  // Validation
  if (!contestName || !contestants || !tags || !desc || !thumbnail)
    return res.status(400).json({ msg: "Please enter all fields" });

  const contest = new Contest(req.body);

  contest
    .save()
    .then((result) => {
      res.status(200).json({ result });
    })
    .catch((err) => {
      res.status(500).json({ msg: "Internal server error" });
    });
});

// @route 	GET api/contest
// @desc		Fetch all contests
// @access	Public
router.get("/", (req, res) => {
  Contest.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.status(200).json({ result });
    })
    .catch((err) => {
      res.status(500).json({ msg: "Internal server error" });
    });
});

module.exports = router;
