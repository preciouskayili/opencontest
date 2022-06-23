const express = require("express");

const router = express.Router();
require("dotenv/config");

// Tag Model
const Tags = require("../../models/Tags");

// @route		POST api/tags/create
// @desc		Create new tags
// @access	Public
router.post("/create", (req, res) => {
  const { tags } = req.body;

  // Validation
  if (!tags) return res.status(400).json({ msg: "Please enter all fields" });

  // Check if tag exists
  Tags.findOne({ tags }).then((tag) => {
    if (tag) return res.status(400).json({ msg: "Tag already exists" });

    const tagModel = new Tags({ tags });

    tagModel
      .save()
      .then((result) => {
        res.status(200).json({ result });
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json({ msg: "Internal server error" });
      });
  });
});

// @route   GET api/tags/:tag
// @desc    Get all tags with tag name
// @access  Public
router.post("/:tag", (req, res) => {
  const { tag } = req.params;

  // Validation
  if (!tag) return res.status(400).json({ msg: "Invalid request" });

  Tags.find(tag)
    .then((result) => {
      res.status(200).json({ result });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ msg: "Internal server error" });
    });
});

// @route   GET api/tags?limit=limit_number
// @desc    Get tags with limit number
// @access  Public
router.get("/:limit", (req, res) => {
  const { limit } = req.body;

  // Validation
  if (!limit) return res.status(400).json({ msg: "Limit not provided" });

  Tags.find()
    .limit(limit)
    .then((result) => {
      res.status(200).json({ result });
    })
    .catch((err) => {
      res.status(500).json({ msg: "Internal server error" });
      console.error(err);
    });
});
