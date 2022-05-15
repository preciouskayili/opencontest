const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create schema
const ContestSchema = new Schema(
  {
    contestName: {
      type: String,
      required: true,
    },
    contestants: {
      type: String,
      required: true,
    },
    tags: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Contest = mongoose.model("contest", ContestSchema);
module.exports = Contest;
