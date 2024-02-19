// 문제 객체(생성자 함수)
function Question(text, img, choice, answer) {
  this.text = text; // 질문 텍스트
  this.img = img; //이미지
  this.choice = choice; // 선택할 답들(배열)
  this.answer = answer; // 정답 정보
}

// 퀴즈 정보 객체
function Quiz(questions) {
  this.score = 0; // 점수
  this.questions = questions; // 문제
  this.questionIndex = 0; // 문제 번호
}

// 정답 확인 메서드
Quiz.prototype.correctAnswer = function (answer) {
  return answer.trim() === this.questions[this.questionIndex].answer.trim();
};

let questions = [
  new Question(
    "1년 중 30일이 있는 달은 몇개?",
    "/img_assets/1. calender.png",
    ["4개", "5개", "6개", "7개"],
    "5개"
  ),
  new Question(
    "알지 못할 물건이 지저분하기만 함의 비유는?",
    "/img_assets/2. trash_can.png",
    ["거지굴", "거지발싸개", "돼지우리", "돼지떡"],
    "돼지떡"
  ),
  new Question(
    "대학교 수강신청만큼 오마카세 예약 경쟁이 치열함을 뜻하는 신조어는?",
    "/img_assets/3. computer.png",
    ["스강신청", "오예치", "오예스", "수마카세"],
    "스강신청"
  ),
  new Question(
    "어떤 상품에 대하여 소비를 권장하는 행동은?",
    "/img_assets/4. wallet.png",
    ["보이콧", "보이저", "보이프렌드", "바이콧"],
    "바이콧"
  ),
  new Question(
    "국제 결제나 금융거래의 기록이 되는 통화의 국가는?",
    "/img_assets/5. dollar.png",
    ["유리통화국", "전화통화국", "긴축통화국", "기축통화국"],
    "기축통화국"
  ),
  new Question(
    "대한민국 광역시 갯수는 총 몇개?",
    "/img_assets/6. location.png",
    ["5개", "6개", "7개", "8개"],
    "6개"
  ),
  new Question(
    "8ㅁ4+19=51 이라는 식이 일치하도록 ㅁ에 알맞는 기호는?",
    "/img_assets/7. calculator.png",
    ["/", "+", "-", "*"],
    "*"
  ),
  new Question(
    "OO, 겨우 요만큼? 의 바른 표기는?",
    "/img_assets/8. pencil.png",
    ["에계", "에게", "애개", "애계"],
    "에계"
  ),
  new Question(
    "바다상에 가장 큰 살아있는 동물은?",
    "/img_assets/9. question.png",
    ["향유고래", "백상아리", "대왕고래", "전기뱀장어"],
    "대왕고래"
  ),
  new Question(
    "미국 화폐 1달러에 있는 인물은?",
    "/img_assets/10. money.png",
    ["조지 마이클", "조지 워싱턴", "조지 클루니", "덴젤 워싱턴"],
    "조지 워싱턴"
  ),
  new Question(
    "경상도와 전라도 경계에 있는 시장은?",
    "/img_assets/11. market.png",
    ["화개장터", "횡성한우시장", "서면시장", "오일장터"],
    "화개장터"
  ),
  new Question(
    "다음 중 부산 사투리가 아닌 것은?",
    "/img_assets/12. chatting.png",
    ["쫌", "매매", "와", "단디"],
    "와"
  ),
  new Question(
    "(4+3) * 2 / 14 = ?",
    "/img_assets/7. calculator.png",
    ["0", "1", "2", "-1"],
    "1"
  ),
  new Question(
    "물고기의 맘마는?",
    "/img_assets/14. fish.png",
    ["미끼", "더 작은 물고기", "분유", "모유"],
    "미끼"
  ),
  new Question(
    "천연 기념물이 아닌 것은?",
    "/img_assets/9. question.png",
    ["왜가리", "수달", "고씨동굴", "마라도"],
    "왜가리"
  ),
];

// 퀴즈 객체 생성
let quiz = new Quiz(questions);

// 문제 출력 함수
function updateQuiz() {
  let question = document.getElementById("question");
  let section = document.querySelector(".section1_question");
  let imgsrcdiv = document.getElementById("imgbox");

  let idx = quiz.questionIndex + 1;
  //   let choiceDiv = document.querySelectorAll(".btn");
  let choice = document.querySelectorAll(".btn");
  //   let choice = document.createElement("p");

  // 문제 출력
  question.innerHTML =
    //  '문제' + idx + ') ' +
    quiz.questions[quiz.questionIndex].text;

  //이미지 출력
  imgsrcdiv.innerHTML = `<img src = '${
    quiz.questions[quiz.questionIndex].img
  }' class = "quizimg">`;

  // 선택 출력
  for (let i = 0; i < 4; i++) {
    choice[i].innerHTML = `<p>${
      quiz.questions[quiz.questionIndex].choice[i]
    }</p>`;
    // choiceDiv.append(choice);
  }

  progress();
}

function progress() {
  let progress = document.getElementById("progress");
  progress.innerHTML =
    "문제 " + (quiz.questionIndex + 1) + " / " + quiz.questions.length;
}

let btn = document.querySelectorAll(".btn");

// 입력 및 정답 확인 함수
function checkAnswer(i) {
  btn[i].addEventListener("click", function () {
    let answer = btn[i].innerText;

    if (quiz.correctAnswer(answer)) {
      alert("정답입니다!");
      quiz.score++;
    } else {
      alert("틀렸습니다!");
    }

    if (quiz.questionIndex < quiz.questions.length - 1) {
      quiz.questionIndex++;
      updateQuiz();
    } else {
      result();
    }

  });
}

function result() {
  const bodyContainer = document.getElementById("container");
  const quizDiv = document.getElementById("quiz");

  const per = parseInt((quiz.score * 100) / quiz.questions.length);
  let txt =
    "<h1>결과</h1>" +
    '<h2 id="score">당신의 점수: ' +
    quiz.score +
    "/" +
    quiz.questions.length +
    "<br><br>" +
    per +
    "점" +
    "</h2>";
  bodyContainer.innerHTML = "";

  // 점수별 결과 텍스트
  if (per < 20) {
    txt += "<h2>세상에 관심을 둘 필요가 있어보이네요.</h2>";
    txt += '<img src="8.png" width="400" height="900">';
  } else if (per >= 20 && per < 45) {
    txt += "<h2>더 노력하면 당신도 할 수 있어요.</h2>";
    txt += '<img src="9.png" width="400" height="900">';
  } else if (per >= 45 && per < 70) {
    txt += "<h2>아쉬운 그대를 위해 한 번 더?</h2>";
    txt += '<img src="10.png" width="400" height="900">';
  } else if (per >= 70 && per < 100) {
    txt += "<h2>간발의 차이지만 그래도 대단해요.</h2>";
    txt += '<img src="12.png" width="400" height="900">';
  } else if (per >= 100) {
    txt += "<h2>이미 완벽한 그대를 칭찬해주세요.</h2>";
    txt += '<img src="13.png" width="400" height="900">';
  }
  quizDiv.innerHTML = txt;
}
for (let i = 0; i < btn.length; i++) {
  checkAnswer(i);
}

updateQuiz();

//프로그레스 바
const progressBar = document.querySelector(".progress_bar");
progressBar.max = 15; // 최대값 설정

function perIncrease() {
  if (progressBar.value < progressBar.max) { // 최대값을 넘지 않을 때만 증가
    progressBar.value++;
  }

  // input 이벤트 강제 실행
  const event = new Event("input", {
    bubbles: true,
    cancelable: true,
  });

  progressBar.dispatchEvent(event);
}

// 클릭 이벤트에 함수 연결
const button = document.querySelector("button");
button.addEventListener("click", perIncrease);

// 터치 이벤트에 함수 연결
let touchStart = false; // 터치 시작 여부를 저장하는 변수

button.addEventListener("mousedown", function(event) {
  event.preventDefault(); // 기본 마우스 다운 이벤트 동작 방지
  touchStart = true; // 터치 시작
  perIncrease(); // 터치 시작 시 증가 함수 호출
});

button.addEventListener("mousemove", function(event) {
  event.preventDefault(); // 기본 마우스 이동 이벤트 동작 방지
  if (touchStart) {
    perIncrease(); // 터치 중일 때 증가 함수 호출
  }
});

button.addEventListener("mouseup", function(event) {
  event.preventDefault(); // 기본 마우스 업 이벤트 동작 방지
  touchStart = false; // 터치 종료
});

// iOS에서 터치 이벤트에 대한 이슈를 해결하기 위해 추가
document.addEventListener("touchstart", function() {}, { passive: false });
document.addEventListener("touchmove", function() {}, { passive: false });
document.addEventListener("touchend", function() {}, { passive: false });


