const express = require("express");
const router = express.Router();
const db = require("../database/models");
const response = db.response;
const article = db.article;
const { isAnswered } = require("../helpers");

//POST DATA
router.post("/", (req, res) => {
  const submittedData = req.body;
  console.log(submittedData);

  //check if any answer passed
  isAnswered(submittedData) &&
    res.status(400).send({ message: "Please tell us your opinion" });

  //Add answers to database
  response
    .create({
      twitter: req.body.twitter,
      facebook: req.body.facebook,
      email: req.body.email,
      whatsapp: req.body.whatsapp,
      trust: req.body.trust,
      quality: req.body.quality,
      articleId: req.body.article_id,
      userId: req.body.user_id,
    })
    .then((response) => {
      console.log(response);
      res.status(200).send(response.dataValues);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send({
        message:
          "Sorry! We are currently having server difficulties. Try again later",
      });
    });
});

//Get
router.get("/", (req, res) => {
  res.status(200).send("hallo");
});

module.exports = router;
