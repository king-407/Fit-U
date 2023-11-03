const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cronj = require("./cron");
const userRouter = require("./routers/users");
const detailsRouter = require("./routers/Detail");

const app = express();

require("./mongoose");

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(`/user`, userRouter);
app.use("/details", detailsRouter);
const currentTime = new Date();
console.log(`Current time: ${currentTime.toLocaleTimeString()}`);

app.listen(3000, () => {
  console.log("running");
});
