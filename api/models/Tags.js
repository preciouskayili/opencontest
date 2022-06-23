const Schema = require("mongoose").Schema;

// Create schema
const TagSchema = new Schema(
  {
    tags: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Tags = mongoose.model("tags", TagSchema);
module.exports = Tags;
