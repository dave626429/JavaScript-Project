const express = require("express");
const router = express.Router();
const Customer = require("../models/Customer");

// GET REQUESTs
router.get("/", async (req, res) => {
  try {
    const customers = await Customer.findAll();
    res.send(customers);
  } catch (error) {
    res.send(error.errors);
  }
});

router.get("/adhaar", async (req, res) => {
  try {
    const { adhaar } = req.query;
    const customers = await Customer.findAll({
      where: {
        adhaarnumber: adhaar,
      },
    });
    res.send(customers);
  } catch (error) {
    res.send(error.errors);
  }
});

router.get("/email", async (req, res) => {
  try {
    const { email } = req.query;
    const customers = await Customer.findAll({
      where: {
        email,
      },
    });
    res.send(customers);
  } catch (error) {
    res.send(error.errors);
  }
});
router.get("/name", async (req, res) => {
  try {
    const { name } = req.query;
    const customers = await Customer.findAll({
      where: {
        name,
      },
    });
    res.send(customers);
  } catch (error) {
    res.send(error.errors);
  }
});
router.get("/phone", async (req, res) => {
  try {
    const { phone } = req.query;
    const customers = await Customer.findAll({
      where: {
        phone,
      },
    });
    res.send(customers);
  } catch (error) {
    res.send(error.errors);
  }
});
router.get("/name&phone", async (req, res) => {
  try {
    const { name, phone } = req.query;
    const customers = await Customer.findAll({
      where: {
        name,
        phone: phone ? phone : null,
      },
    });
    res.send(customers);
  } catch (error) {
    res.send(error.errors);
  }
});

// POST REQUESTs
router.post("/", async (req, res) => {
  try {
    const customer = await Customer.create(req.body);
    res.send(customer);
  } catch (error) {
    res.send(error.errors);
  }
});

// PUT REQUESTs

// DELETE REQUESTs
router.delete("/", async (req, res) => {
  try {
    let { id } = req.body;
    const customerID = await Customer.destroy({
      where: {
        id,
      },
    });
    res.send(`Customer with id : ${customerID} is removed.`);
  } catch (error) {
    res.send(error.errors);
  }
});

module.exports = router;
