const mongoose = require("mongoose");
const cycleSchema = mongoose.Schema({
  //   user: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     require: true,
  //   },
  distance: {
    type: Number,
    default: 0,
  },
  day: {
    type: String,

    required: true,
  },
});
cycleSchema.pre("save", function (next) {
  console.log("hi");
  const currentDate = new Date();
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  this.day = daysOfWeek[currentDate.getDay()];
  next();
});
module.exports = mongoose.model("Cycle", cycleSchema);
