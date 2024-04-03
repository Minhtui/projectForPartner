document.body.style.zoom = "150%";

// test 1
function scrapbook() {
  document.location.href = "scrapbook.html";
}

function quiz() {
  document.location.href = "quiz.html";
}

function slideLove() {
  document.location.href = "slideLove.html";
}

$(document).ready(function () {
  $("#top-right").on("mouseenter", function () {
    $("#white").show();
  });
  $("#top-right").on("mouseout", function () {
    $("#white").hide();
  });
});

$(document).ready(function () {
  $("#bottom-left").on("mouseenter", function () {
    $("#milk").show();
  });
  $("#bottom-left").on("mouseout", function () {
    $("#milk").hide();
  });
});

$(document).ready(function () {
  $("#bottom-right").on("mouseenter", function () {
    $("#truffle").show();
  });
  $("#bottom-right").on("mouseout", function () {
    $("#truffle").hide();
  });
});

$(document).ready(function () {
  $("#top-left").on("mouseenter", function () {
    $("#truffle_2").show();
  });
  $("#top-left").on("mouseout", function () {
    $("#truffle_2").hide();
  });
});
