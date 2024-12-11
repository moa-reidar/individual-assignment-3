let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];

// DOM Elements
const startScreen = document.querySelector('.quiz__section--start');
const quizScreen = document.querySelector('.quiz__section--questions');
const resultScreen = document.querySelector('.quiz__section--result');
const reviewScreen = document.querySelector('.quiz__section--review');
const questionElement = document.querySelector('.quiz__question');
const answerButtons = document.querySelectorAll('.quiz__answer-button');
const progressText = document.querySelector('.quiz__progress-text');
const progressBarFill = document.querySelector('.quiz__progress-bar-fill');
const scoreElement = document.querySelector('.quiz__score');
const reviewContainer = document.querySelector('.quiz__review');

// Buttons
const startButton = document.querySelector('.quiz__button--start');
const restartButtons = document.querySelectorAll('.quiz__button--restart');
const reviewButton = document.querySelector('.quiz__button--review');

// Question Data
const questions = [
    { question: "5 + 3?", options: ["6", "7", "8", "9"], correct: "8" },
    { question: "12 - 4?", options: ["6", "8", "10", "12"], correct: "8" },
    { question: "3 x 4?", options: ["7", "10", "12", "15"], correct: "12" },
    { question: "16 / 4?", options: ["2", "3", "4", "5"], correct: "4" },
    { question: "25 - 10?", options: ["10", "15", "20", "25"], correct: "15" },
    { question: "9 x 9?", options: ["81", "72", "64", "99"], correct: "81" },
    { question: "50 + 30?", options: ["70", "80", "90", "100"], correct: "80" },
    { question: "100 - 25?", options: ["50", "75", "25", "100"], correct: "75" },
];
// Start Quiz
startButton.addEventListener('click', () => {
    startScreen.style.display = "none";
    quizScreen.style.display = "block";
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    showQuestion();
});

// Show Question
function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    progressText.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
    progressBarFill.style.width = `${((currentQuestionIndex + 1) / questions.length) * 100}%`;

    // Update Answer Buttons
    answerButtons.forEach((button, index) => {
        button.textContent = currentQuestion.options[index];
        button.onclick = () => selectAnswer(button.textContent);
    });
}
