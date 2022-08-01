//
const express = require("express");

// calling the express function (app) that makes the express server
const app = express();
const PORT = 5000;

// makes it so req.body is a thing; this is the body parser
app.use(express.urlencoded({ extended: true }));

// allowing us to share anything in the server>public folder as static assets (assets that don't change from user to user)
app.use(express.static("server/public"));

// the equationHistory array stores the equationElements objects that are sent to the server via the POST route
let equationHistory = [];

let postCalcHistory = [];

// this function checks the operator value of the object being posted to the server via the post route, and calls the corresponding function to do the calculation
function equationSelector() {
  console.log("In equationSelector");
  for (let values of equationHistory) {
    console.log(values);
    if (values.operator == "+") {
      addVals(values);
    } else if (values.operator == "-") {
      subtractVals(values);
    } else if (values.operator == "*") {
      multiplyVals(values);
    } else if (values.operator == "/") {
      divideVals(values);
    }
  }
}

// this function adds the first and second number entered into the input fields in client.js, packages the result of the calculation and string with the equation into the calculatedObject object, clears the equationHistory array, and then pushes the calculatedObject object into the postCalcHistory array.
function addVals(values) {
  let result = Number(values.firstNumber) + Number(values.secondNumber);
  let equation = `${values.firstNumber} + ${values.secondNumber} = ${result}`;
  let calculatedObject = {
    result: result,
    equation: equation,
  };
  console.log(calculatedObject);
  equationHistory = [];
  postCalcHistory.unshift(calculatedObject);
}

// this function subtracts the second number from the first number entered into the input fields in client.js, packages the result of the calculation and string with the equation into the calculatedObject object, clears the equationHistory array, and then pushes the calculatedObject object into the postCalcHistory array.
function subtractVals(values) {
  console.log("in subtractVals");
  let result = Number(values.firstNumber) - Number(values.secondNumber);
  let equation = `${values.firstNumber} - ${values.secondNumber} = ${result}`;
  let calculatedObject = {
    result: result,
    equation: equation,
  };
  equationHistory = [];
  postCalcHistory.unshift(calculatedObject);
}

// this function multiples the first and second numbers entered into the input fields in client.js, packages the result of the calculation and string with the equation into the calculatedObject object, clears the equationHistory array, and then pushes the calculatedObject object into the postCalcHistory array.
function multiplyVals(values) {
  let result = Number(values.firstNumber) * Number(values.secondNumber);
  let equation = `${values.firstNumber} * ${values.secondNumber} = ${result}`;
  let calculatedObject = {
    result: result,
    equation: equation,
  };
  equationHistory = [];
  postCalcHistory.unshift(calculatedObject);
}

// this function divides the first number entered into the input fields in client.js by the second number, packages the result of the calculation and string with the equation into the calculatedObject object, clears the equationHistory array, and then pushes the calculatedObject object into the postCalcHistory array.
function divideVals(values) {
  let result = Number(values.firstNumber) / Number(values.secondNumber);
  let equation = `${values.firstNumber} / ${values.secondNumber} = ${result}`;
  let calculatedObject = {
    result: result,
    equation: equation,
  };
  equationHistory = [];
  postCalcHistory.unshift(calculatedObject);
}

// this is the GET route that receives the GET request on the server and sends back the postCalcHistory array
app.get("/values", function (req, res) {
  console.log("GET / values");

  res.send(postCalcHistory);
});

// this is the POST route that receives a POST request wherein the client is requesting to post the objectToSend object to the server. The object is pushed to the equationHistory array, the equationSelector function is called, and the 200 status message is returned to the client
// req and res are parameters that express gives: req is info coming in to server, res is being sent back
app.post("/values", (req, res) => {
  console.log("POST / values");
  console.log(req.body);
  equationHistory.push(req.body);
  equationSelector();
  //numberCruncher();
  res.sendStatus(200);
});

//
app.listen(PORT, function () {
  // app.use(PORT, () => {
  console.log("listening on port", PORT);
});
