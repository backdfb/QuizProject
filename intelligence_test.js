// 입력값
const element = document.querySelector("#ne");
const value = element.value;
console.log(value);
// 결과
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
  const quizDiv = document.getElementById("quiz");

  const resultText = [
    {
      imageSrc: "4.png",
      title: "아쉽네요",
      description: "세상에 관심을 둘 필요가 있어보이네요.",
    },
    {
      imageSrc: "5.png",
      title: "조금 더 분발해요.",
      description: "더 노력하면 당신도 할 수 있어요.",
    },
    {
      imageSrc: "6.png",
      title: "중간을 넘어서봐요.",
      description: "아쉬운 그대를 위해 한 번 더?",
    },
    {
      imageSrc: "7.png",
      title: "상위 1% 도전!!",
      description: "간발의 차이지만 그래도 대단해요.",
    },
    {
      imageSrc: "8.png",
      title: "완벽",
      description: "이미 완벽한 그대를 칭찬해주세요.",
    },
  ];

  const per = parseInt((quiz.score * 100) / quiz.questions.length);
  let txt =
    "<h1>결과</h1>" +
    '<h3 id="score">당신의 점수: ' +
    quiz.score +
    "/" +
    quiz.questions.length +
    per +
    "점" +
    "</h3>";

  // 점수별 결과 텍스트
  if (per < 20) {
    resultHtml += getResultHtml(resultText[0]);
  } else if (per >= 40 && per < 60) {
    resultHtml += getResultHtml(resultText[1]);
  } else if (per >= 60 && per < 80) {
    resultHtml += getResultHtml(resultText[2]);
  } else if (per >= 80 && per < 100) {
    resultHtml += getResultHtml(resultText[3]);
  } else if (per >= 100) {
    resultHtml += getResultHtml(resultText[4]);
  }

  quizDiv.textContent = txt;
}

for (let i = 0; i < btn.length; i++) {
  checkAnswer(i);
}

updateQuiz();
