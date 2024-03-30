const questions = [
  // 1
  {
    question: "Bộ phim chiếu rạp chúng ta đã coi cùng nhau ?",
    answers: [
      { text: "Bad Genius", correct: true },
      { text: "The Greatest Showman", correct: false },
      { text: "Avengers: Endgame", correct: false },
      { text: "The New King Of Comedy", correct: false }
    ]
  },
  // 2
  {
    question: "Món ăn chúng ta ăn cùng với nhau nhiều nhất ?",
    answers: [
      { text: "Chicken", correct: false },
      { text: "Noodle Spicy", correct: true },
      { text: "Pho", correct: false },
      { text: "HotPot", correct: false }
    ]
  },
  // 3
  {
    question: "Môn thể thao chúng ta hay chơi với nhau ?",
    answers: [
      { text: "Basketball", correct: false },
      { text: "Football", correct: false },
      { text: "Tennis", correct: false },
      { text: "Badminton", correct: true }
    ]
  },
  // 4
  {
    question: "Vật nuôi mà chúng ta (me or you) yêu thích ?",
    answers: [
      { text: "Dog", correct: false },
      { text: "Cat", correct: true },
      { text: "Hamster", correct: false },
      { text: "Rabbit", correct: false }
    ]
  },
  // 5
  {
    question: "Ngày nào là ngày tỏ tình ?",
    answers: [
      { text: "01.10.2019", correct: false },
      { text: "01.07.2019", correct: false },
      { text: "01.06.2019", correct: false },
      { text: "01.05.2019", correct: true }
    ]
  },
  // 6
  {
    question: "01.07.2019 - là ngày gì ?",
    answers: [
      { text: "First Kiss", correct: true },
      { text: "Holding Hands For The First", correct: false },
      { text: "Watch A Movie", correct: false },
      { text: "Confess Your Love - Tỏ tình", correct: false }
    ]
  },
  // 7
  {
    question: "Ai là người nấu ăn ngon hơn ?",
    answers: [
      { text: "Bé Trúc", correct: false },
      { text: "Bé Như", correct: false },
      { text: "Lúc này, lúc kia", correct: true },
      { text: "Nấu dở đều như nhau", correct: false }
    ]
  },
  // 8
  {
    question: "Ai là người có tình cảm trước ?",
    answers: [
      { text: "Bé Trúc", correct: false },
      { text: "Bé Như", correct: true },
      { text: "Người này người kia đều có", correct: false },
      { text: "Không một ai hết", correct: false }
    ]
  },
  // 9
  {
    question: "Ai là người lãng mạn hơn ?",
    answers: [
      { text: "Bé Trúc", correct: false },
      { text: "Bé Như", correct: false },
      { text: "Lúc người này, lúc người kia", correct: true },
      { text: "Không một ai, ai cũng lãng xẹt", correct: false }
    ]
  },
  // 10
  {
    question: "Ai là người hay nóng tính nhất ?",
    answers: [
      { text: "Bé Trúc", correct: false },
      { text: "Bé Như", correct: true },
      { text: "Lúc bé này, lúc bé kia", correct: false },
      { text: "Không!!! Đứa nào cũng hiền từ, nết na, đoan trang", correct: false }
    ]
  },
  // 11
  {
    question: "Ai là người sẽ mất tích vì ngủ quên ?",
    answers: [
      { text: "Bé Trúc", correct: false },
      { text: "Bé Như", correct: false },
      { text: "Chắc chắn là cả hai", correct: true },
      { text: "Không có đáp án nào", correct: false }
    ]
  },
  // 12
  {
    question: "Ai là người hay muộn nhất ?",
    answers: [
      { text: "Bé Trúc", correct: true },
      { text: "Bé Như", correct: false },
      { text: "Cả 2", correct: false },
      { text: "Không có đáp án nào", correct: false }
    ]
  }, 
  // 13
  {
    question: "Ai là người hài hước ?",
    answers: [
      { text: "Bé Trúc", correct: false },
      { text: "Bé Như", correct: false },
      { text: "Lúc đứa này, lúc đứa kia", correct: true },
      { text: "Không!!! Đứa nào cũng nhạt như nước lã", correct: false }
    ]
  },
  // 14
  {
    question: "Ai là người có gu thời trang hơn ?",
    answers: [
      { text: "Bé Trúc", correct: false },
      { text: "Bé Như", correct: false },
      { text: "Cả 2 nha, đứa nào cũng fashion", correct: false },
      { text: "Chuyện buồn, vì cả hai đều mặc xấu", correct: true }
    ]
  },
  // 15
  {
    question: "Chúng ta đã bên nhau bao lâu ?",
    answers: [
      { text: "6 năm", correct: true },
      { text: "5 năm", correct: false },
      { text: "4 năm", correct: false },
      { text: "3 năm", correct: false }
    ]
  }
];

// Lấy các phần tử DOM cần thiết
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
  // nextButton.innerHTML = "Thất vọng";
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
    src: [src] // Thay 'path/to/sound.mp3' bằng đường dẫn đến tệp âm thanh của bạn
  });
}

// Tạo các đối tượng âm thanh
var correctSound = createSound("/assets/sound/correct_2.mp3");
var applauseSound = createSound("/assets/sound/confetti_2.mp3");
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

