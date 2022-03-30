const express = require("express");
const verify = require("./utils");
const router = express.Router();
const User = require("../models/User");

router.get("/", async (req, res) => {
  res.clearCookie("session_token");
  res.status(200).send("session-end");
});

module.exports = router;
