const express = require("express");

//creating an express app
const app = express();

//home route
app.get("/", (req, res) => {
  res.send("I am home route");
});

//export app
module.exports = app;
