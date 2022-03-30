const express = require("express");
const verify = require("./utils");
const router = express.Router();
const User = require("../models/User");

router.get("/", async (req, res) => {
  res.render("protectedroute");
});

module.exports = router;
