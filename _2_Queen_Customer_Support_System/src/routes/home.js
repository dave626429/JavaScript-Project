const express = require("express");
const router = express.Router();
const Customer = require("../models/Customer");

router.get("/", async (req, res) => {
  try {
    const customers = await Customer.findAll();
    res.render("index", { customers });
  } catch (error) {
    res.render("index", { errors: error.errors });
  }
});

module.exports = router;
