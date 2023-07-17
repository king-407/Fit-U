const Walk = require("../models/walk");
const express = require("express");
const auth = require("../middleware/auth");
const router = express.Router();

router.get("/", auth, async (req, res) => {
  try {
    const walkInfo = await Walk.find({ user: req.user });
    if (walkInfo.length > 0) {
      res.status(200).send(walkInfo);
    } else if (walkInfo.length == 0) {
      res.json({ msg: "You have not started the challenge" });
    }
  } catch (e) {}
});
router.get("/get/walk", auth, async (req, res) => {
  try {
    const walkInfo = await Walk.find({ user: req.user });
    if (walkInfo.length > 0) {
      const totalWaterIntake = walkInfo.reduce(
        (sum, record) => sum + record.distance,
        0
      );
      const averageWaterIntake = totalWaterIntake / walkInfo.length;
      res.status(200).json({ message: averageWaterIntake });
    } else if (walkInfo.length == 0) {
      res.json({ msg: "You have not started the challenge" });
    }
  } catch (e) {
    console.log(e);
  }
});
router.post("/", auth, async (req, res) => {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const d = new Date();
  const day = daysOfWeek[d.getDay()];

  const user = new Walk({
    user: req.user,
    distance: req.body.distance,
    day,
    exp: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
  });
  user
    .save()
    .then((created) => {
      res.status(201).send(created);
    })
    .catch((err) => {
      res.status(500).json({ error: err, success: false });
    });
});

module.exports = router;
