document.body.style.zoom = "150%";

function scrapbook() {
  localStorage.setItem('scrapbookVisited', 'true');
  document.location.href = "scrapbook.html";
}

function quiz() {
  localStorage.setItem('quizVisited', 'true');
  document.location.href = "quiz.html";
}

function slideLove() {
  localStorage.setItem('slideLoveVisited', 'true');
  document.location.href = "slideLove.html";
}

function sendLove() {
  document.location.href = "submitFormToEmail.html";
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

window.onload = function() {
  if (localStorage.getItem('slideLoveVisited') === 'true') {
    document.getElementById('top-left').style.display = 'none';
  }
  if (localStorage.getItem('scrapbookVisited') === 'true') {
    document.getElementById('bottom-left').style.display = 'none';
  }
  if (localStorage.getItem('quizVisited') === 'true') {
    document.getElementById('top-right').style.display = 'none';
  }
}

window.addEventListener('DOMContentLoaded', (event) => {
  if (!document.referrer || new URL(document.referrer).origin !== window.location.origin) {
      localStorage.removeItem('slideLoveVisited');
      localStorage.removeItem('scrapbookVisited');
      localStorage.removeItem('quizVisited');
  }
});

