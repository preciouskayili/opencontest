const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

require("dotenv/config");

// Contest model
const Contest = require("../../models/Contest");

// @route 	POST api/contest/create
// @desc		Create new contests
// @access	Private
router.post("/create", auth, (req, res) => {
  const { contestName, contestants, tags, desc, thumbnail } = req.body;
  console.log(req.body);
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

// @route   DELETE api/contest
// @desc    Delete a contest
// @access  Private
router.delete("/:id", auth, (req, res) => {
  Contest.findById(req.params.id)
    .then((contest) => contest.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
