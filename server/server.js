const express = require("express");

const app = express();
const PORT = 5000;

app.use(express.urlencoded({ extended: true }));

app.use(express.static("server/public"));

// the equationHistory array stores the equationElements objects that are sent to the server via the POST route
let equationHistory = [];

let postCalcHistory = [];

function numberCruncher() {
  console.log("In numberCruncher");
  for (let values of equationHistory) {
    let result = Number(values.firstNumber) + Number(values.secondNumber);
    let equation = `${values.firstNumber} + ${values.secondNumber} = ${result}`;
    console.log(equation);
    let calculatedObject = {
      result: result,
      equation: equation,
    };
    equationHistory = [];

    postCalcHistory.unshift(calculatedObject);

    //return values.firstNumber + values.secondNumber;
  }
}

// if array[0] = + sign, do addition

// this is the GET route that receives the GET request on the server and sends back the equationHistory array (THIS_NEEDS_TO_BE_CHANGED)
app.get("/values", function (req, res) {
  console.log("GET / values");

  res.send(postCalcHistory);
});

// this is the POST route that receives a POST request wherein the client is requesting to post the equationElements object to the server. The object is pushed to the equationHistory array, the numberCruncher function is called, and the 200 status message is returned to the client
app.post("/values", (req, res) => {
  console.log("POST / values");
  console.log(req.body);
  equationHistory.push(req.body);
  numberCruncher();
  res.sendStatus(200);
});

app.listen(PORT, function () {
  console.log("listening on port", PORT);
});
