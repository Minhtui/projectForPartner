const selectBtn = document.getElementById('select-btn');
const text = document.getElementById('text');
const options = document.querySelectorAll('.option');
let notifications = document.querySelector(".notifications");
let info = document.getElementById("info");
let selectedValue = '';

selectBtn.addEventListener('click', () => {
  selectBtn.classList.toggle('active');
});

options.forEach(option => {
  option.addEventListener('click', function () {
    selectedValue = this.querySelector('.option-text').textContent;
    text.textContent = selectedValue;
    selectBtn.classList.remove('active');
  });
});

// Hàm kiểm tra xem một tùy chọn có được chọn hay không
function isOptionSelected() {
  return selectedValue !== '';
}

function validateForm() {
  const requiredFields = {
    'last_name': 'Quên điền họ kìa!!!',
    'first_name': 'Quên điền tên kìa!!!',
    'email_id': 'Quên điền email kìa!!!',
    'phone_id': 'Quên điền số điện thoại kìa!!!',
    'day_id': 'Quên chọn ngày sinh kìa!!!',
    'month_id': 'Quên chọn tháng sinh kìa!!!',
    'year_id': 'Quên chọn năm sinh kìa!!!',
    'des_yourself': 'Quên mô tả về bản thân kìa!!!',
    'face_id': 'Quên điền link Facebook kìa !!!',
    'insta_id': 'Quên điền link Instagram kìa!!!',
    'des_fav': 'Quên điền giới thiệu tính cách kìa!!!',
    'lover_name': 'Quên điền tên người yêu của bạn rồi kìa!!!',
    'mess_id': 'Quên điền lời nhắn của bạn với người yêu rồi kìa!!!'
  };

  const createToast = (type, icon, title, text) => {
    let newToast = document.createElement("div");
    newToast.innerHTML = `
      <div class="toast ${type}">
        <i class="${icon}"></i>
        <div class="content">
          <div class="title">${title}</div>
          <span>${text}</span>
        </div>
        <i class="fa-solid fa-xmark"
        onclick="(this.parentElement).remove()"></i>
      </div>
    `;
    notifications.appendChild(newToast);
    newToast.timeOut = setTimeout(() => newToast.remove(), 5000);
  };

  for (let field in requiredFields) {
    const element = document.getElementById(field);
    if (!element || !element.value.trim()) {
      // alert(requiredFields[field]);
      createToast("warning", "fa-solid fa-circle-info", "Warning!", requiredFields[field]);
      return false;
    }
  }

  if (!isOptionSelected()) {
    // alert('Quên chọn tên riêng kìa!!!');
    createToast("warning", "fa-solid fa-circle-info", "Warning!", 'Quên chọn tên riêng kìa!!!');
    return false;
  }

  return true;
}


function sendMail() {
  // Kiểm tra nếu form không hợp lệ thì không gửi email
  if (!validateForm()) {
    return;
  }

  var params = {
    last_name: document.getElementById('last_name').value,
    first_name: document.getElementById('first_name').value,
    email_id: document.getElementById('email_id').value,
    phone_id: document.getElementById('phone_id').value,
    day_id: document.getElementById('day_id').value,
    month_id: document.getElementById('month_id').value,
    year_id: document.getElementById('year_id').value,
    gender_id: document.querySelector('input[type="radio"]:checked').value,
    des_yourself: document.getElementById('des_yourself').value,
    face_id: document.getElementById('face_id').value,
    insta_id: document.getElementById('insta_id').value,
    fav_name: selectedValue,
    des_fav: document.getElementById('des_fav').value,
    lover_name: document.getElementById('lover_name').value,
    mess_id: document.getElementById('mess_id').value
  }
  emailjs.send("service_rx7dhyj", "template_j489mqu", params).then(function (res) {
    // alert("Your message has been sent!" + res.status);
    Swal.fire({
      title: "Bạn có chắc là muốn gửi không?",
      text: "Hãy kiểm tra lại khi chưa chắc chắn nhé!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Xác nhận gửi!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Thành Công!",
          text: "Bạn đã gửi thành công, hãy chờ phản hồi từ người ấy 😘.",
          icon: "success"
        }).then(() => {
          // Chuyển hướng đến trang web khác
          window.location.href = "endShow.html";
        });
      }
    });
  })
}

$(function () {
  //jQuery time
  var current_fs, next_fs, previous_fs; //fieldset
  var left, opacity, scale; //fieldset properties which we will animate
  var animating; //flag to prevent quick multi-click glitches

  $(".next").click(function () {
    if (animating) return false;
    animating = true;

    current_fs = $(this).parent();
    next_fs = $(this)
      .parent()
      .next();

    //activate next step on progressbar using the index of next_fs
    $("#progressbar li")
      .eq($("fieldset").index(next_fs))
      .addClass("active");

    //show the next fieldset
    next_fs.show();
    //hide the current fieldset with style
    current_fs.animate(
      { opacity: 0 },
      {
        step: function (now, mx) {
          //as the opacity of current_fs reduces to 0 - stored in "now"
          //1. scale current_fs down to 80%
          scale = 1 - (1 - now) * 0.2;
          //2. bring next_fs from the right(50%)
          left = now * 50 + "%";
          //3. increase opacity of next_fs to 1 as it moves in
          opacity = 1 - now;
          current_fs.css({ transform: "scale(" + scale + ")" });
          next_fs.css({ left: left, opacity: opacity });
        },
        duration: 800,
        complete: function () {
          current_fs.hide();
          animating = false;
        },
        //this comes from the custom easing plugin
        easing: "easeInOutBack"
      }
    );
  });

  $(".previous").click(function () {
    if (animating) return false;
    animating = true;

    current_fs = $(this).parent();
    previous_fs = $(this)
      .parent()
      .prev();

    //de-activate current step on progressbar
    $("#progressbar li")
      .eq($("fieldset").index(current_fs))
      .removeClass("active");

    //show the previous fieldset
    previous_fs.show();
    //hide the current fieldset with style
    current_fs.animate(
      { opacity: 0 },
      {
        step: function (now, mx) {
          //as the opacity of current_fs reduces to 0 - stored in "now"
          //1. scale previous_fs from 80% to 100%
          scale = 0.8 + (1 - now) * 0.2;
          //2. take current_fs to the right(50%) - from 0%
          left = (1 - now) * 50 + "%";
          //3. increase opacity of previous_fs to 1 as it moves in
          opacity = 1 - now;
          current_fs.css({ left: left });
          previous_fs.css({
            transform: "scale(" + scale + ")",
            opacity: opacity
          });
        },
        duration: 800,
        complete: function () {
          current_fs.hide();
          animating = false;
        },
        //this comes from the custom easing plugin
        easing: "easeInOutBack"
      }
    );
  });

  $(".submit").click(function () {
    return false;
  });
});
