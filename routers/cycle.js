const Cycle = require("../models/cycle");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
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

  const user = new Cycle({
    distance: req.body.distance,
    day,
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
