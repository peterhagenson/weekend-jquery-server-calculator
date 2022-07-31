//const express = require("express");

console.log("js");

$(document).ready(onReady);

//set up click events
function onReady() {
  console.log("test");
  // $("#operatorContainer").on("click", "#addBtn", operatorSelector);
  // $("#operatorContainer").on("click", "#subtractBtn", operatorSelector);
  // $("#operatorContainer").on("click", "#multiplyBtn", operatorSelector);
  // $("#operatorContainer").on("click", "#divideBtn", operatorSelector);
  // $("#equalsBtn").on("click", addNumbers);
  // $("#clearBtn").on("click", clearFields);
  //--------STRETCH_CALCULATOR------------------------------------
  $("#altInterfaceContainer").on("click", "#addBtn", operatorSelector);
  $("#altInterfaceContainer").on("click", "#subtractBtn", operatorSelector);
  $("#altInterfaceContainer").on("click", "#multiplyBtn", operatorSelector);
  $("#altInterfaceContainer").on("click", "#divideBtn", operatorSelector);
}

function clearFields() {
  $("#numberOneIn").val("");
  $("#numberTwoIn").val("");
}
// initialize operator array that will contain the user selected operator
let operator;

//push the user selected operator into the operator array
function operatorSelector() {
  let operatorBtn = $(this).closest("button").text();
  operator = operatorBtn;
}

//let operator = $(this).closest("button").text();
// when user clicks =, addNumbers runs to assign the input values and the user-selected operator, to the object equationElements
function addNumbers() {
  let equationElements = {
    firstNumber: $("#numberOneIn").val(),
    secondNumber: $("#numberTwoIn").val(),
    operator: operator,
  };
  // a POST request is made to post the equationElements object to the server
  $.ajax({
    method: "POST",
    url: "/values",
    data: equationElements,
  }).then(function (response) {
    console.log(response);
    // operator.pop();
    operator = [];
    $("#numberOneIn").val("");
    $("#numberTwoIn").val("");

    //when the 200 response comes back, the getCalcResponse function is called to make a GET request for the result of the equation
    getCalcResponse();
  });
}

function getCalcResponse() {
  $.ajax({
    method: "GET",
    url: "/values",
  }).then(function (response) {
    console.log(response);
    renderToDom(response);
  });
}

function renderToDom(response) {
  console.log(response);
  $("#result").empty();
  $("#historyContainer").empty();
  $("#result").append(response[0].result);

  for (let equationObject of response) {
    $("#historyContainer").append(`
    <li>${equationObject.equation}`);
  }
}
