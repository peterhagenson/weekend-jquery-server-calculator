//const express = require("express");

console.log("js");

$(document).ready(onReady);

function onReady() {
  console.log("test");
  $("#operatorContainer").on("click", "#addBtn", operatorSelector);
  $("#operatorContainer").on("click", "#subtractBtn", operatorSelector);
  $("#operatorContainer").on("click", "#multiplyBtn", operatorSelector);
  $("#operatorContainer").on("click", "#divideBtn", operatorSelector);
  //$("#addBtn").on("click", operatorSelector);
  $("#equalsBtn").on("click", addNumbers);
  //$("addBtn").on("click", addNums);
  // getCalcResponse();
}

let operator = [];

function operatorSelector() {
  let operatorBtn = $(this).closest("button").text();
  console.log(operatorBtn);
  operator.push(operatorBtn);
  console.log(operator);
}
console.log(operator);

//let operator = $(this).closest("button").text();

function addNumbers() {
  let equationElements = {
    firstNumber: $("#numberOneIn").val(),
    secondNumber: $("#numberTwoIn").val(),
    operator: operator,
  };

  //   console.log(equationElements);

  $.ajax({
    method: "POST",
    url: "/values",
    data: equationElements,
  }).then(function (response) {
    console.log(response);
    getCalcResponse();
  });
}

function getCalcResponse() {
  $.ajax({
    method: "GET",
    url: "/values",
  }).then(function (response) {
    console.log(response);
  });
}

function renderToDom(response) {}
$("#output").empty();
