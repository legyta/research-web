const express = require("express");
const router = express.Router();
const db = require("../database/models");
const article = db.article;

//Get
router.get("http://localhost:9000/.netlify/functions/api/users", (req, res) => {
  res.status(200).send("hallo from articles");
});

module.exports = router;
