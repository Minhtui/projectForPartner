// test
// Lấy phần tử chứa animation
var heartMain = document.querySelector(".icon");

// Thêm lắng nghe sự kiện kết thúc animation
heartMain.addEventListener("animationend", function () {
  // Chuyển hướng sang trang khác
  window.location.href = "pages/chocolateBox.html"; // Thay 'trang-khac.html' bằng URL của trang bạn muốn chuyển đến
});
