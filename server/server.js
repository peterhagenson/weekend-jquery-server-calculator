const express = require("express");

const app = express();
const PORT = 5000;

app.use(express.urlencoded({ extended: true }));

app.use(express.static("server/pubic"));

let equationHistory = [];

app.get("/values", function (req, res) {
  console.log("GET / quote");

  res.send(equationHistory);
});

app.post("/values", (req, res) => {
  console.log("POST / quotes");
  res.sendStatus(200);
});

app.listen(PORT, function () {
  console.log("listening on port", PORT);
});
