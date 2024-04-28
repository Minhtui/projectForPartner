$(document).ready(function () {
  $('.container').mouseenter(function () {
      $('.card').stop().animate({
          top: '-90px'
      }, 'slow');
  }).mouseleave(function () {
      $('.card').stop().animate({
          top: 0
      }, 'slow');
  });
});

let back = document.getElementById("back-button");

back.addEventListener("click", function () {
  document.location.href = "endShow.html";
});