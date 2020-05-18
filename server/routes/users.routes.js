const express = require("express");
const router = express.Router();
const db = require("../database/models");
const user = db.user;

const { isAnswered } = require("../helpers");

//POST DATA
router.post("/", (req, res) => {
  const submittedData = req.body;

  //check if any answer passed
  isAnswered(submittedData) &&
    res.status(400).send({ message: "Please fill these in" });

  //Add answers to database
  user
    .create({
      age: req.body.age,
      gender: req.body.gender,
      education: req.body.education,
    })
    .then((user) => {
      console.log(user.dataValues);
      res.status(200).send(user.dataValues);
    })
    // .then((user) => res.status(200).send(user.dataValues))
    .catch((error) =>
      res.status(500).send({
        message:
          "Sorry! We are currently having server difficulties. Try again later",
      })
    );
});

router.get("/", (req, res) => {
  res.status(200).send("hallo from users");
});

module.exports = router;
