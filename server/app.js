if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const http = require("http");
const createError = require("http-errors");
const express = require("express");
const morgan = require("morgan");
const logger = require("morgan");
const { connector } = require("./database/models");

//Importing the routes
const responseRoute = require("./routes/response.routes");
const usersRoute = require("./routes/users.routes");
const articlesRoute = require("./routes/articles.routes");

//Use express
const app = express();

//Connect database
connector
  // { force: true }
  .sync()
  .then(() => console.log("Tables for database created"))
  .catch((err) => console.error(`Oops, something failed: ${err}`));

//Use middleware
app.use(morgan("dev"));
app.use(express.json());

//Routes
app.use("/.netlify/functions/response", responseRoute);
app.use("/.netlify/functions/users", usersRoute);
app.use("/.netlify/functions/articles", articlesRoute);

app.use(logger("dev"));
app.use(express.json());

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json("error");
});

module.exports = app;
