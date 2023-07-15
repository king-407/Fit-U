const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const userRouter = require("./routers/users");
const cycleRouter = require("./routers/cycle");
const app = express();

require("./mongoose");
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(`/user`, userRouter);
app.use("/cycle", cycleRouter);

app.listen(3000, () => {
  console.log("running");
});
