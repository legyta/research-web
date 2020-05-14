const express = require("express");
const router = express.Router();
const db = require("../database/models");
const article = db.article;

const { isAnswered } = require("../helpers");

//POST DATA
// router.post("/articles", (req, res) => {
//   const submittedData = req.body;

//   //check if any answer passed
//   isAnswered(submittedData) &&
//     res.status(400).send({ message: "Please tell us your opinion" });

//   //Add answers to database
//   article
//     .create({
//       article_Id: req.body.articleId

//     })
//     .then((article) => res.status(200).send(article.dataValues))
//     .catch((error) =>
//       res.status(500).send({
//         message:
//           "Sorry! We are currently having server difficulties. Try again later",
//       })
//     );
// });

//Get
router.get("/", (req, res) => {
  res.status(200).send("hallo from articles");
});

module.exports = router;
