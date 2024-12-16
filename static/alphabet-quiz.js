const alphabetQuestions = [
    
    
  { question: "Which letter comes after A?", options: ["B", "C", "D", "A"], correct: "B" },
  { question: "What is the first letter of 'Apple'?", options: ["A", "B", "C", "D"], correct: "A" },
      { question: "Which letter starts the word 'Cat'?", options: ["A", "B", "C", "D"], correct: "C" },
      { question: "Identify the vowel:", options: ["P", "Q", "U", "Z"], correct: "U" },
      { question: "What comes after Z?", options: ["A", "B", "AA", "ZZ"], correct: "A" },
      { question: "Which letter comes between C and E?", options: ["B", "D", "F", "G"], correct: "D" },
      { question: "What is the last letter of the word 'Dog'?", options: ["D", "O", "G", "H"], correct: "G" },
      { question: "What letter comes before Y?", options: ["W", "X", "V", "Z"], correct: "X" },
      { question: "Which letter starts the word 'Elephant'?", options: ["E", "F", "G", "H"], correct: "E" },
      { question: "Which letter is silent in the word 'Knife'?", options: ["N", "K", "I", "F"], correct: "K" },
      { question: "What is the fifth letter of the alphabet?", options: ["D", "E", "F", "G"], correct: "E" },
      { question: "Which letter comes after P?", options: ["Q", "R", "S", "T"], correct: "Q" },
      { question: "Identify the consonant:", options: ["O", "A", "L", "U"], correct: "L" },
      { question: "Which letter is used twice in the word 'Balloon'?", options: ["B", "L", "A", "O"], correct: "L" },
      { question: "Which letter completes the word '_ouse'?", options: ["H", "M", "N", "P"], correct: "H" },
      { question: "Which letter comes after T?", options: ["U", "V", "S", "T"], correct: "U" },
      { question: "Which letter starts the word 'Queen'?", options: ["R", "Q", "P", "S"], correct: "Q" },
      { question: "What is the first letter of 'Umbrella'?", options: ["U", "I", "E", "A"], correct: "U" },
      { question: "Which letter ends the word 'Snake'?", options: ["K", "E", "S", "N"], correct: "E" },
      { question: "Which letter is the first in 'India'?", options: ["I", "N", "D", "A"], correct: "I" },
  ];
  


const numberQuestions = [
  
  
      { question: "What is the spelling of 1?", options: ["One", "Two", "Three", "Four"], correct: "One" },
      { question: "What comes after 5?", options: ["6", "7", "4", "5"], correct: "6" },
      { question: "What is 2 in ordinal form?", options: ["Two", "Second", "Two-th", "Tenth"], correct: "Second" },
      { question: "What is the sum of 3 + 4?", options: ["6", "7", "8", "5"], correct: "7" },
      { question: "What is the spelling of 10?", options: ["Ten", "Tenth", "Twelfth", "Twenty"], correct: "Ten" },
      { question: "Which number is smaller: 3 or 7?", options: ["3", "7", "10", "5"], correct: "3" },
      { question: "What is 15 minus 10?", options: ["5", "10", "15", "20"], correct: "5" },
      { question: "Which number comes between 8 and 10?", options: ["7", "9", "11", "6"], correct: "9" },
      { question: "What is the double of 6?", options: ["12", "18", "24", "30"], correct: "12" },
      { question: "What is the square of 4?", options: ["16", "8", "12", "20"], correct: "16" },
      { question: "What is 100 divided by 10?", options: ["10", "20", "5", "1"], correct: "10" },
      { question: "What is the product of 3 and 3?", options: ["9", "6", "12", "3"], correct: "9" },
      { question: "What is the sum of 20 and 15?", options: ["25", "30", "35", "40"], correct: "35" },
      { question: "What is the half of 50?", options: ["10", "20", "25", "30"], correct: "25" },
      { question: "Which number is bigger: 45 or 67?", options: ["45", "67", "50", "60"], correct: "67" },
      { question: "What is the spelling of 50?", options: ["Fifty", "Fivety", "Five", "Fivteen"], correct: "Fifty" },
      { question: "What is 2 raised to the power 3?", options: ["6", "8", "10", "4"], correct: "8" },
      { question: "What is the square root of 81?", options: ["7", "9", "11", "13"], correct: "9" },
      { question: "What is the Roman numeral for 10?", options: ["X", "V", "I", "L"], correct: "X" },
      { question: "What is the sum of the digits in 123?", options: ["6", "5", "7", "8"], correct: "6" },
  
  
];

let currentQuizType = "";
let currentIndex = 0;
let score = 0;
let timeElapsed = 0;
let timer;

const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options-container");
const nextButton = document.getElementById("next-button");
const scoreElement = document.getElementById("score");
const timeElement = document.getElementById("time");
const progressElement = document.getElementById("progress");
const pronounceButton = document.getElementById("pronounce-button");
const quizInterface = document.querySelector(".quiz-interface");
const quizSelection = document.querySelector(".quiz-selection");

function initializeQuiz(type) {
  currentQuizType = type;
  currentIndex = 0;
  score = 0;
  timeElapsed = 0;
  quizSelection.style.display = "none";
  quizInterface.style.display = "block";
  scoreElement.innerText = score;
  progressElement.innerText = "0";
  timer = setInterval(() => {
      timeElapsed++;
      timeElement.innerText = timeElapsed;
  }, 1000);
  loadQuestion();
}

function loadQuestion() {
  const questions = currentQuizType === "alphabet" ? alphabetQuestions : numberQuestions;

  if (currentIndex >= questions.length) {
      clearInterval(timer);
      alert(`Quiz Completed! Your score is ${score}`);
      quizInterface.style.display = "none";
      quizSelection.style.display = "flex";
      return;
  }

  const currentQuestion = questions[currentIndex];
  questionElement.innerText = currentQuestion.question;
  optionsContainer.innerHTML = "";
  pronounceButton.onclick = () => pronounceText(currentQuestion.question);

  currentQuestion.options.forEach(option => {
      const button = document.createElement("button");
      button.innerText = option;
      button.onclick = () => handleAnswer(option, currentQuestion.correct);
      optionsContainer.appendChild(button);
       // Add Pronunciation
    button.addEventListener("click", () => speakOption(option));

  });

  progressElement.innerText = `${currentIndex + 1}/${questions.length}`;
}

function handleAnswer(selected, correct) {
  if (selected === correct) {
      score += 10;
      scoreElement.innerText = score;
  }
  currentIndex++;
  loadQuestion();
}

function pronounceText(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(utterance);
}

nextButton.addEventListener("click", () => {
  currentIndex++;
  loadQuestion();
});
// Timer Functionality
function startTimer() {
  interval = setInterval(() => {
      timer++;
      timerElement.innerText = timer;
  }, 1000);
}

// Pronunciation Feature
function speakOption(option) {
  const utterance = new SpeechSynthesisUtterance(option);
  speechSynthesis.speak(utterance);
}