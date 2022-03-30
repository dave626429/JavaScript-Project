const express = require("express");
const { verify } = require("./utils");
const router = express.Router();
const User = require("../models/User");

router.get("/", async (req, res) => {
  res.render("index");
});

router.post("/", async (req, res) => {
  const { user_token_id } = req.body;

  verify(user_token_id)
    .then(async (payload) => {
      res.cookie("session_token", user_token_id);

      /* 
        Just checking the user Credentials in the database,
        if present no insertion, if not then insert.
        No conditional check applied on the main functionality,
        just for record purpose. 
      */
      let result = await User.findAll({
        where: {
          token_id: payload["sub"],
        },
      });

      if (result.length === 0 && payload["email_verified"]) {
        await User.create({
          name: payload["name"],
          email: payload["email"],
          token_id: payload["sub"],
          image_url: payload["picture"],
        });
      }

      res.send({ varification_status: "success" });
    })
    .catch((error) => {
      console.log(error);
      res.send({ varification_status: "failed", error });
    });
});

module.exports = router;
