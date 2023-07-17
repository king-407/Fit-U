const mongoose = require("mongoose");
const waterSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
  },
  litres: {
    type: Number,
    default: 0,
  },
  day: {
    type: "String",
    required: true,
  },
  exp: {
    type: Date,
    required: true,
    index: { expires: "7d" },
  },
});

module.exports = mongoose.model("Water", waterSchema);
