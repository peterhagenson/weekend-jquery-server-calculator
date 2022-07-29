console.log("js");

$(document).ready(onReady);

function onReady() {
  console.log("test");
  //   $("#operatorContainer").on("click", ".operatorBtn", operatorSelector);
  $("#addBtn").on("click", operatorSelector);
  $("#equalsBtn").on("click", addNums);
  //$("addBtn").on("click", addNums);
}

// let operator = "";

function operatorSelector() {
  //operator = "+";
  console.log(operator);
}
//console.log(operator);

//   let operator = $(this).closest("button").text();

function addNums() {
  let equationElements = {
    firstNumber: $("#numberOneIn").val(),
    secondNumber: $("#numberTwoIn").val(),
    //operator: "",
  };
  console.log(equation);
  $.ajax({
    method: "POST",
    url: "/values",
    data: equationElements,
  }).then(function (response) {
    console.log(response);
    getCalcResponse();
  });
}
