const mongoose = require("mongoose");
const walkSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
  },
  distance: {
    type: Number,
    default: 0,
  },
  day: {
    type: String,

    required: true,
  },
  exp: {
    type: Date,
    required: true,
    index: { expires: "7d" },
  },
});

module.exports = mongoose.model("Walk", walkSchema);
