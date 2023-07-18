const User = require("../models/users");
const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const person = await User.findOne({ email: req.body.email });
    if (person) {
      return res.status(202).json({ msg: "User with email exists exists" });
    }
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    user
      .save()
      .then((created) => {
        res.status(201).json({ msg: "Registeration successfull" });
      })
      .catch((err) => {
        res.status(500).json({ error: err, success: false });
      });
  } catch (e) {
    res.status(500).send("Internal server error");
  }
});
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });

    if (user) {
      if (password == user.password) {
        console.log(user);
        const token = jwt.sign({ userId: user._id }, "hihihi");
        res.status(201).json({ token });
      } else {
        return res.status(200).json({ error: "Wrong credentials" });
      }
    } else {
      return res.status(200).json({ error: "Wrong credentials" });
    }
  } catch (e) {
    console.log(e);
  }
});
module.exports = router;
