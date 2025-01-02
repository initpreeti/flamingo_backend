// script.js

document.addEventListener("DOMContentLoaded", () => {
  // Quiz functionality
  const quizQuestions = [
      { question: "How do you say 'Hello' in English?", options: ["Hi", "Bye", "Goodnight"], answer: "Hi" },
      { question: "What is your name?", options: ["My name is...", "I am fine", "Goodbye"], answer: "My name is..." },
      { question: "How do you greet someone in the morning?", options: ["Good Morning", "Goodnight", "See you"], answer: "Good Morning" },
  { question: "What do you say when meeting someone for the first time?", options: ["Nice to meet you", "Goodbye", "How are you"], answer: "Nice to meet you" },
  { question: "How do you ask someone’s age?", options: ["How old are you?", "Where are you?", "What is your name?"], answer: "How old are you?" },
  { question: "How do you ask where someone is from?", options: ["Where are you from?", "What is your name?", "How are you?"], answer: "Where are you from?" },
  { question: "What do you say before going to bed?", options: ["Goodnight", "Hello", "Good Morning"], answer: "Goodnight" },
  { question: "What do you say when leaving?", options: ["Goodbye", "Welcome", "Hi"], answer: "Goodbye" },
  { question: "What’s another way to say 'Hi'?", options: ["Hello", "Goodbye", "Thank you"], answer: "Hello" },
  { question: "How do you introduce yourself?", options: ["My name is...", "Where are you?", "Goodbye"], answer: "My name is..." },
  { question: "What do you say when asking someone’s well-being?", options: ["How are you?", "Goodnight", "Goodbye"], answer: "How are you?" },
  { question: "How do you express gratitude?", options: ["Thank you", "I am fine", "Nice to meet you"], answer: "Thank you" },
  { question: "What do you say when someone says 'Thank you'?", options: ["You're welcome", "Goodbye", "How are you?"], answer: "You're welcome" },
  { question: "How do you ask for the time?", options: ["What time is it?", "How are you?", "Goodnight"], answer: "What time is it?" },
  { question: "What do you say when asking for directions?", options: ["Where is the...?", "How are you?", "Goodnight"], answer: "Where is the...?" },
  { question: "What do you say when meeting someone again?", options: ["Good to see you", "Goodnight", "Goodbye"], answer: "Good to see you" },
  { question: "How do you apologize?", options: ["I am sorry", "How are you?", "Goodbye"], answer: "I am sorry" },
  { question: "How do you respond to 'How are you'?", options: ["I am fine", "What is your name?", "Goodbye"], answer: "I am fine" },
  { question: "What do you say when offering help?", options: ["Can I help you?", "Goodbye", "What is your name?"], answer: "Can I help you?" },
  { question: "What do you say when parting in the evening?", options: ["Goodnight", "Good Morning", "How are you?"], answer: "Goodnight" },
  { question: "What do you say to ask for help?", options: ["Can you help me?", "What is your name?", "How old are you?"], answer: "Can you help me?" },
  { question: "How do you say someone did well?", options: ["Good job!", "Goodbye", "What’s your name?"], answer: "Good job!" },
  { question: "What do you say when asking for water?", options: ["Can I have some water?", "What’s the time?", "How are you?"], answer: "Can I have some water?" },
  { question: "How do you wish someone on their birthday?", options: ["Happy Birthday!", "Good Morning!", "How are you?"], answer: "Happy Birthday!" },
  { question: "What do you say when asking about someone’s hobbies?", options: ["What are your hobbies?", "What do you do?", "Where are you?"], answer: "What are your hobbies?" }
  ];

  const quizContainer = document.getElementById("quiz-container");
  const progressPercentage = document.getElementById("progress-percentage");

  let currentQuestionIndex = 0;
  let correctAnswers = 0;

  function loadQuizQuestion() {
      if (currentQuestionIndex < quizQuestions.length) {
          const questionObj = quizQuestions[currentQuestionIndex];

          const questionElement = document.createElement("p");
          questionElement.innerText = questionObj.question;

          const optionsList = document.createElement("ul");
          optionsList.style.listStyle = "none";

          questionObj.options.forEach(option => {
              const optionItem = document.createElement("li");
              optionItem.style.margin = "10px 0";
              optionItem.style.cursor = "pointer";
              optionItem.innerText = option;
              optionItem.onclick = () => {
                  if (option === questionObj.answer) {
                      correctAnswers++;
                  }
                  currentQuestionIndex++;
                  loadQuizQuestion();
              };
              optionsList.appendChild(optionItem);
          });

          quizContainer.innerHTML = "";
          quizContainer.appendChild(questionElement);
          quizContainer.appendChild(optionsList);

          progressPercentage.innerText = `${Math.round((correctAnswers / quizQuestions.length) * 100)}%`;
      } else {
          quizContainer.innerHTML = `<h3>Quiz Complete! 🎉</h3><p>You got ${correctAnswers} out of ${quizQuestions.length} questions correct.</p>`;
      }
  }

  document.querySelector("button").onclick = loadQuizQuestion;

  // Pronunciation functionality
  const lessonExamples = document.querySelectorAll(".lesson ul li");

  lessonExamples.forEach(example => {
      const pronunciationButton = document.createElement("button");
      pronunciationButton.innerText = "🔊";
      pronunciationButton.style.marginLeft = "10px";
      pronunciationButton.onclick = () => {
          const text = example.innerText.split(" - ")[0];
          const utterance = new SpeechSynthesisUtterance(text);
          speechSynthesis.speak(utterance);
      };
      example.appendChild(pronunciationButton);
  });
});
