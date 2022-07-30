//const express = require("express");

console.log("js");

$(document).ready(onReady);

function onReady() {
  console.log("test");
  $("#operatorContainer").on("click", "#addBtn", operatorSelector);
  //$("#addBtn").on("click", operatorSelector);
  $("#equalsBtn").on("click", addNumbers);
  //$("addBtn").on("click", addNums);
  getCalcResponse();
}

let operator = [];

function operatorSelector() {
  let plusSign = $(this).closest("button").text();
  console.log(plusSign);
  operator.push(plusSign);
}
console.log(operator);

//   let operator = $(this).closest("button").text();

function addNumbers() {
  let equationElements = {
    firstNumber: $("#numberOneIn").val(),
    secondNumber: $("#numberTwoIn").val(),
    operator: operator,
  };
  console.log(equationElements);
}
$.ajax({
  method: "POST",
  url: "/values",
  data: equationElements,
}).then(function (response) {
  console.log(response);
  getCalcResponse();
});

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
