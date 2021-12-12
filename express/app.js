// hello world in expresjs

var express = require("express");
var app = express();

app.get("/", function (req, res) {
  const html = require("../target/C2");

  // fetching some data from database.
  const cars = [
    { id: 1, name: "Ford" },
    { id: 2, name: "Audi" },
    { id: 3, name: "BMW" },
    { id: 4, name: "Mercedes" },
  ];

  const compiledHtml = html(cars);

  console.log("SENDING DATA TO FRONTEND: ", compiledHtml);

  res.send(compiledHtml);
});

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
