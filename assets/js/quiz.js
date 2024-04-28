const questions = [
  {
    question: "Bộ phim chiếu rạp đầu tiên coi cùng nhau ?",
    answers: [
      { text: "Bad Genius", correct: true },
      { text: "The Greatest Showman", correct: false },
      { text: "Avengers: Endgame", correct: false },
      { text: "The New King Of Comedy", correct: false },
    ],
  },
  {
    question: "Món ăn được ăn nhiều nhất ?",
    answers: [
      { text: "Gà rán", correct: false },
      { text: "Mỳ cay", correct: true },
      { text: "Phở", correct: false },
      { text: "Lẩu - Nướng", correct: false },
    ],
  },
  {
    question: "Môn thể thao thường chơi ?",
    answers: [
      { text: "Bóng rổ", correct: false },
      { text: "Bóng đá", correct: false },
      { text: "Quần vợt", correct: false },
      { text: "Cầu lông", correct: true },
    ],
  },
  {
    question: "Bài hát đầu tiên bé Như hát cho bé Trúc nghe ?",
    answers: [
      { text: "Từ ngày em đến", correct: false },
      { text: "Một đêm say", correct: true },
      { text: "Một nhà", correct: false },
      { text: "Đi theo bóng mặt trời", correct: false },
    ],
  },
  {
    question: "Lần đầu tiên đi ăn chung với nhau món gì ?",
    answers: [
      { text: "Bánh tráng trứng", correct: false },
      { text: "Mỳ cay", correct: true },
      { text: "Bánh tráng trộn", correct: false },
      { text: "Phở", correct: false },
    ],
  },
  {
    question: "Ai là người hay thất hẹn nào ?",
    answers: [
      { text: "Bé Trúc", correct: true },
      { text: "Bé Như", correct: false },
      { text: "Cả hai bé", correct: false },
      { text: "Nothing ...", correct: false },
    ],
  },
  {
    question: "Ai là người hướng nội nhất ?",
    answers: [
      { text: "Bé Trúc", correct: false },
      { text: "Bé Như", correct: false },
      { text: "Cả hai bé", correct: true },
      { text: "Nothing ...", correct: false },
    ],
  },
  {
    question: "Ai là người thường trễ nhất ?",
    answers: [
      { text: "Bé Trúc", correct: true },
      { text: "Bé Như", correct: false },
      { text: "Cả hai bé", correct: false },
      { text: "Nothing ...", correct: false },
    ],
  },
  {
    question: "Ai là người dễ thương nhất ?",
    answers: [
      { text: "Bé Trúc", correct: false },
      { text: "Bé Như", correct: false },
      { text: "Cả hai bé", correct: true },
      { text: "Nothing ...", correct: false },
    ],
  },
  {
    question: "Ai là người lãng mạn hơn ?",
    answers: [
      { text: "Bé Trúc", correct: false },
      { text: "Bé Như", correct: false },
      { text: "Cả hai bé", correct: true },
      { text: "Nothing ...", correct: false },
    ],
  },
  {
    question: "Ai là người hay nóng tính nhất ?",
    answers: [
      { text: "Bé Trúc", correct: false },
      { text: "Bé Như", correct: true },
      { text: "Cả hai bé", correct: false },
      { text: "Nothing ...", correct: false },
    ],
  },
  {
    question: "Ai là người có tình cảm trước ?",
    answers: [
      { text: "Bé Trúc", correct: false },
      { text: "Bé Như", correct: true },
      { text: "Cả hai bé", correct: false },
      { text: "Nothing ...", correct: false },
    ],
  },
  {
    question: "01.07.2019 - là ngày gì ?",
    answers: [
      { text: "First Kiss", correct: true },
      { text: "Lần đầu tiên nắm tay", correct: false },
      { text: "Lần đầu tiên xem phim", correct: false },
      { text: "Tỏ tình", correct: false },
    ],
  },
  {
    question: "Ngày nào là ngày tỏ tình ?",
    answers: [
      { text: "01.10.2019", correct: false },
      { text: "01.07.2019", correct: false },
      { text: "01.06.2019", correct: false },
      { text: "01.05.2019", correct: true },
    ],
  },
  {
    question: "Chúng ta đã bên nhau bao lâu ?",
    answers: [
      { text: "6 năm", correct: true },
      { text: "5 năm", correct: false },
      { text: "4 năm", correct: false },
      { text: "3 năm", correct: false },
    ],
  },
];

const questionElements = document.getElementById("question");
const answersButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const imgLoser = document.getElementById("imgLoser");
const imgWin = document.getElementById("imgWin");

// Khởi tạo biến lưu trữ chỉ số câu hỏi hiện tại và điểm số
let currentQuestionIndex = 0;
let score = 0;

// Hàm bắt đầu trò chơi
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

// Hàm hiển thị câu hỏi
function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElements.innerText = questionNo + ". " + currentQuestion.question;

  // Tạo nút trả lời cho mỗi câu trả lời
  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answersButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

// Hàm đặt lại trạng thái giao diện
function resetState() {
  nextButton.style.display = "none";
  while (answersButtons.firstChild) {
    answersButtons.removeChild(answersButtons.firstChild);
  }
}

function resetStateImgLoser() {
  imgLoser.style.display = "none";
  while (answersButtons.firstChild) {
    answersButtons.removeChild(answersButtons.firstChild);
  }
}

function resetStateImgWin() {
  imgWin.style.display = "none";
  while (answersButtons.firstChild) {
    answersButtons.removeChild(answersButtons.firstChild);
  }
}

// Hàm xử lý khi chọn một câu trả lời
function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }

  // Vô hiệu hóa tất cả nút sau khi chọn một câu trả lời
  Array.from(answersButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

// Hàm hiển thị điểm số cuối cùng
function showScore() {
  resetState();
  questionElements.innerHTML = `Bạn đạt được ${score}/${questions.length} số câu hỏi về độ hiểu nhau! `;
  nextButton.style.display = "block";
}

// Hàm hiển thị hình ảnh khi thất bại
function showImgLoser() {
  resetStateImgLoser();
  imgLoser.style.display = "block";
}

// Hàm hiển thị hình ảnh khi chiến thắng
function showImgWin() {
  resetStateImgWin();
  imgWin.style.display = "block";
}

// Hàm tạo đối tượng âm thanh
function createSound(src) {
  return new Howl({
    src: [src],
  });
}

// Tạo các đối tượng âm thanh
var correctSound = createSound("/assets/sound/correct.mp3");
var applauseSound = createSound("/assets/sound/confetti.mp3");
var incorrectSound = createSound("/assets/sound/incorrect.mp3");

// Hàm hiệu ứng pháo hoa khi chiến thắng
function celebrate() {
  var count = 600;
  var defaults = {
    origin: { y: 0.7 },
  };

  function confettiAnimation() {
    function fire(particleRatio, opts) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    // Hàm bắn pháo giấy với âm thanh
    function fireWithSound(particleRatio, opts) {
      // Bắn pháo giấy
      fire(particleRatio, opts);

      // play âm thanh
      correctSound.play();
      applauseSound.play();
    }

    fireWithSound(0.25, {
      spread: 26,
      startVelocity: 55,
    });
    fireWithSound(0.2, {
      spread: 60,
    });
    fireWithSound(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });
    fireWithSound(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });
    fireWithSound(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  }

  confettiAnimation();
}

// Hàm xử lý khi nhấn nút Next
function handleNextButton() {
  currentQuestionIndex++;
  if (score === questions.length) {
    celebrate();
    showScore();
    nextButton.innerHTML = "Quá là tuyệt vời luôn 💖";
    showImgWin();
  } else {
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showImgLoser();
      showScore();
      nextButton.innerHTML = "Quá là thất vọng luôn 😢";
      incorrectSound.play();
    }
  }
}

// Bắt sự kiện khi nhấn nút Next
nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    window.location.href = "chocolateBox.html";
  }
});

// Bắt đầu trò chơi khi tải trang
startQuiz();
