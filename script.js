const questionElement = document.getElementById('question');
const answerButtonsElements = [...document.getElementsByClassName('answer')];

let questionIndex = 0;
let correctAnswersCount = 0;

const questions = [
  {
    question: 'ما هي نتيجة 5 * 5 ؟',
    answers: [
      { text: '25', correct: true },
      { text: '30', correct: false },
      { text: '90', correct: false },
      { text: '100', correct: false },
    ],
  },
  {
    question: 'ما هي نتيجة 5 * 2 ؟',
    answers: [
      { text: '60', correct: false },
      { text: '20', correct: false },
      { text: '10', correct: true },
      { text: '30', correct: false },
    ],
  },
  {
    question: 'كم عدد الكواكب في النظام الشمسي ؟',
    answers: [
      { text: '9', correct: false },
      { text: '8', correct: true },
      { text: '2', correct: false },
      { text: '3', correct: false },
    ],
  },
];

function nextQuestion() {
  if (questionIndex == questions.length) {
    setTimeout(() => {
      alert('You have answered ' + correctAnswersCount + ' correct answers');
    }, 100);
    answerButtonsElements.forEach((button) => {
      button.removeEventListener('click', selectAnswer);
    });
  } else {
    questionElement.innerText = questions[questionIndex].question;
    answerButtonsElements.forEach((button, index) => {
      button.innerText = questions[questionIndex].answers[index].text;
      button.dataset.correct = questions[questionIndex].answers[index].correct;
    });
  }
}

function selectAnswer(e) {
  const correct = e.target.dataset.correct;

  if (correct == 'true') {
    correctAnswersCount++;
    document.body.classList.add('correct');
  } else {
    document.body.classList.add('wrong');
  }

  setTimeout(() => {
    document.body.classList.remove('correct', 'wrong');
  }, 1000);

  questionIndex++;
  nextQuestion();
}

answerButtonsElements.forEach((button) => {
  button.addEventListener('click', selectAnswer);
});

nextQuestion();
