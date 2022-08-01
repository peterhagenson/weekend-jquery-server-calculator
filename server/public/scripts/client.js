//const express = require("express");

console.log("js");

//--------STRETCH_CALCULATOR------------------------------------

$(document).ready(onReady);

//set up click events
function onReady() {
  console.log("test");
  $("#altInterfaceContainer").on("click", "#addBtn", stringNums);
  $("#altInterfaceContainer").on("click", "#subtractBtn", stringNums);
  $("#altInterfaceContainer").on("click", "#multiplyBtn", stringNums);
  $("#altInterfaceContainer").on("click", "#divideBtn", stringNums);
  $("#altInterfaceContainer").on("click", "#oneBtn", stringNums);
  $("#altInterfaceContainer").on("click", "#twoBtn", stringNums);
  $("#altInterfaceContainer").on("click", "#threeBtn", stringNums);
  $("#altInterfaceContainer").on("click", "#fourBtn", stringNums);
  $("#altInterfaceContainer").on("click", "#fiveBtn", stringNums);
  $("#altInterfaceContainer").on("click", "#sixBtn", stringNums);
  $("#altInterfaceContainer").on("click", "#sevenBtn", stringNums);
  $("#altInterfaceContainer").on("click", "#eightBtn", stringNums);
  $("#altInterfaceContainer").on("click", "#nineBtn", stringNums);
  $("#altInterfaceContainer").on("click", "#zeroBtn", stringNums);
  $("#altInterfaceContainer").on("click", "#dotBtn", stringNums);
  $("#altInterfaceContainer").on("click", "#equalsBtn", stringToObject);
  $("#displayContainer").on("click", "#clearBtn", clearDisplay);
  getCalcResponse();
}

function clearDisplay() {
  $("#display").val("");
  stringNumber = "";
  sympol = "";
}

// this variable holds the equation the user inputs with the input pad in the form of a string e.g. "54*2".
let stringNumber = "";
// this variable holds the operator symbol that the user selects
let sympol = "";

// this function puts the value of the button a user clicks on in the variable number and then concatonates that number onto the stringNumber variable
function stringNums() {
  let number = $(this).closest("button").text();
  console.log(number);
  stringNumber = stringNumber + number;
  console.log(stringNumber);
  if (number == "+" || number == "-" || number == "*" || number == "/") {
    symbol = number;
  }
  renderInput();
}

// this function takes a string of two numbers and an operator (e.g. "num1+num2") and breaks it into three separate parts and packages it as an object to send to the server. It sends the object to the server and calls the getCalcResponse() function when it receives the server's response.
function stringToObject() {
  //___FIX_THIS_LINE_______SUBTRACTION_DOES_NOT_WORK_________
  // LOOP THROUGH THE STRING TO FIND THE SYMBOLS AND BREAK IT UP. THIS ALSO ENABLES MULTI-OPERATOR CALCULATIONS
  let components = stringNumber.split(/[+,"-",*,/]/);
  let objectToSend = {
    firstNumber: components[0],
    secondNumber: components[1],
    operator: symbol,
  };
  $.ajax({
    method: "POST",
    url: "/values",
    data: objectToSend,
  }).then(function (response) {
    console.log(response);
  });
  $("#display").empty();
  stringNumber = "";
  sympol = "";
  getCalcResponse();
}

//this function displays the numbers that the user clicks on on the keypad in the input field
function renderInput() {
  $("#display").val(`${stringNumber}`);
}

// this function makes a GET request to get results of the calculation from the server, when it receives the response, it calls the renderToDom() function to display the result of the calculation and the updated calculation history.
function getCalcResponse() {
  $.ajax({
    method: "GET",
    url: "/values",
  }).then(function (response) {
    renderToDom(response);
  });
}

// this function clears the previous result and equation history and appends the updated version of each to the DOM.
function renderToDom(response) {
  $("#result").empty();
  $("#historyContainer").empty();
  $("#result").append(response[0].result);

  for (let equationObject of response) {
    $("#historyContainer").append(`
    <li>${equationObject.equation}`);
  }
}

// ------------BASE_MODE------------BASE_MODE--------------------------------

// console.log("js");

// $(document).ready(onReady);

//set up click events
// function onReady() {
//   console.log("test");
//--------BASE_MODE_CALCULATOR------------------------------------
// $("#operatorContainer").on("click", "#addBtn", operatorSelector);
// $("#operatorContainer").on("click", "#subtractBtn", operatorSelector);
// $("#operatorContainer").on("click", "#multiplyBtn", operatorSelector);
// $("#operatorContainer").on("click", "#divideBtn", operatorSelector);
// $("#equalsBtn").on("click", addNumbers);
// $("#clearBtn").on("click", clearFields);
//}

// }
// clears input fields for base mode
// function clearFields() {
//   $("#numberOneIn").val("");
//   $("#numberTwoIn").val("");
// }
// initialize operator array that will contain the user selected operator
// let operator;

//assign the user selected operator to the operator variable
// function operatorSelector() {
//   let operatorBtn = $(this).closest("button").text();
//   operator = operatorBtn;
// }

//let operator = $(this).closest("button").text();
// when user clicks =, addNumbers runs to assign the input values and the user-selected operator, to the object equationElements
// function addNumbers() {
//   let equationElements = {
//     firstNumber: $("#numberOneIn").val(),
//     secondNumber: $("#numberTwoIn").val(),
//     operator: operator,
//   };
//   // a POST request is made to post the equationElements object to the server
//   $.ajax({
//     method: "POST",
//     url: "/values",
//     data: equationElements,
//   }).then(function (response) {
//     console.log(response);
//     // operator.pop();
//     operator = [];
//     $("#numberOneIn").val("");
//     $("#numberTwoIn").val("");

//     //when the 200 response comes back, the getCalcResponse function is called to make a GET request for the result of the equation
//     getCalcResponse();
//   });
// }

// function getCalcResponse() {
//   $.ajax({
//     method: "GET",
//     url: "/values",
//   }).then(function (response) {
//     console.log(response);
//     renderToDom(response);
//   });
// }

// function renderToDom(response) {
//   console.log(response);
//   $("#result").empty();
//   $("#historyContainer").empty();
//   $("#result").append(response[0].result);

//   for (let equationObject of response) {
//     $("#historyContainer").append(`
//     <li>${equationObject.equation}`);
//   }
// }
