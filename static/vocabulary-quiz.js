const questions = [
  { text: "Translate 'Namaste' into English.", options: ["Hello", "Thank You", "Goodbye"], answer: 0 },
  { text: "Translate 'Dhanyavaad' into English.", options: ["Welcome", "Thank You", "Sorry"], answer: 1 },
  { text: "Translate 'Aap kaise hain?' into English.", options: ["Where are you?", "How are you?", "What is your name?"], answer: 1 },
  { text: "Translate 'Khana kha liya?' into English.", options: ["Have you eaten?", "Are you okay?", "Did you sleep?"], answer: 0 },
  // Add the remaining 47 questions here...
  { text: "Translate 'Namaste' into English.", options: ["Hello", "Thank You", "Goodbye"], answer: 0, audio: "audio/namaste.mp3" },
    { text: "Translate 'Dhanyavaad' into English.", options: ["Welcome", "Thank You", "Sorry"], answer: 1, audio: "audio/dhanyavaad.mp3" },
    { text: "Translate 'Aap kaise hain?' into English.", options: ["Where are you?", "How are you?", "What is your name?"], answer: 1, audio: "audio/aap_kaise_hain.mp3" },
    { text: "Translate 'Khana kha liya?' into English.", options: ["Have you eaten?", "Are you okay?", "Did you sleep?"], answer: 0, audio: "audio/khana_kha_liya.mp3" },
    { text: "Translate 'Subah ho gayi' into English.", options: ["It is morning.", "Good night.", "It is evening."], answer: 0, audio: "audio/subah_ho_gayi.mp3" },
    { text: "Translate 'Padhai karte raho' into English.", options: ["Keep reading.", "Keep studying.", "Keep working."], answer: 1, audio: "audio/padhai_karte_raho.mp3" },
    { text: "Translate 'Yeh kya hai?' into English.", options: ["What is this?", "Where is this?", "Who is this?"], answer: 0, audio: "audio/yeh_kya_hai.mp3" },
    { text: "Translate 'Main theek hoon' into English.", options: ["I am fine.", "I am late.", "I am hungry."], answer: 0, audio: "audio/main_theek_hoon.mp3" },
    { text: "Translate 'Tumhara naam kya hai?' into English.", options: ["What is your name?", "Where are you?", "How are you?"], answer: 0, audio: "audio/tumhara_naam_kya_hai.mp3" },
    { text: "Translate 'Mujhe pani chahiye' into English.", options: ["I need food.", "I need water.", "I need help."], answer: 1, audio: "audio/mujhe_pani_chahiye.mp3" },
    { text: "Translate 'Bhaag!' into English.", options: ["Run!", "Stop!", "Jump!"], answer: 0, audio: "audio/bhaag.mp3" },
    { text: "Translate 'Chup raho' into English.", options: ["Be quiet.", "Be kind.", "Be fast."], answer: 0, audio: "audio/chup_raho.mp3" },
    { text: "Translate 'Mujhe madad chahiye' into English.", options: ["I need food.", "I need help.", "I need water."], answer: 1, audio: "audio/mujhe_madad_chahiye.mp3" },
    { text: "Translate 'Samay ho gaya hai' into English.", options: ["Time is up.", "It is late.", "It is time."], answer: 0, audio: "audio/samay_ho_gaya_hai.mp3" },
    { text: "Translate 'Abhi ruk jao' into English.", options: ["Wait now.", "Stop now.", "Go now."], answer: 1, audio: "audio/abhi_ruk_jao.mp3" },
    { text: "Translate 'Aaj Mausam accha hai' into English.", options: ["The weather is good today.", "It is hot today.", "It is raining today."], answer: 0, audio: "audio/aaj_mausam_accha_hai.mp3" },
    { text: "Translate 'Mujhe bhookh lagi hai' into English.", options: ["I am happy.", "I am hungry.", "I am sad."], answer: 1, audio: "audio/mujhe_bhookh_lagi_hai.mp3" },
    { text: "Translate 'Apka din shubh ho' into English.", options: ["Have a good day.", "Happy birthday.", "Good evening."], answer: 0, audio: "audio/apka_din_shubh_ho.mp3" },
    { text: "Translate 'Main ghar par hoon' into English.", options: ["I am at home.", "I am outside.", "I am at school."], answer: 0, audio: "audio/main_ghar_par_hoon.mp3" },
    { text: "Translate 'Kya samasya hai?' into English.", options: ["What is the problem?", "What is your name?", "What is happening?"], answer: 0, audio: "audio/kya_samasya_hai.mp3" }
    
];

let currentQuestionIndex = 0;
let timeLeft = 30;
let timer;
let progress = 0;

window.onload = function () {
  loadQuestion();
};

function loadQuestion() {
  const question = questions[currentQuestionIndex];
  document.getElementById("question-text").textContent = question.text;

  question.options.forEach((option, index) => {
    const button = document.getElementById(`option${index + 1}`);
    button.textContent = option;
    button.disabled = false;
  });
  
  // Play pronunciation for the question text
  speakText(question.text);

  // Disable the "Next" button initially
  document.getElementById("next-btn").disabled = true;

  // Update progress and start timer
  updateProgress();
  timeLeft = 30;
  startTimer();
}

function speakText(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  // utterance.lang = "en-US";
  
  utterance.lang = "en-IN"; // Indian English

  speechSynthesis.speak(utterance);
}

function checkAnswer(selectedOption) {
  const question = questions[currentQuestionIndex];
  if (selectedOption === question.answer) {
    alert("Correct!");
  } else {
    alert("Wrong! The correct answer is: " + question.options[question.answer]);
  }
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    alert("Quiz completed!");
    currentQuestionIndex = 0; // Reset to start again
    loadQuestion();
  }
}

function selectAnswer(optionIndex) {
  const question = questions[currentQuestionIndex];
  
  // Speak the selected option
  speakText(question.options[optionIndex]);

  // Disable all option buttons after selection
  document.querySelectorAll(".options button").forEach((btn, idx) => {
    btn.disabled = true;
    btn.style.backgroundColor = idx === question.answer ? "#4caf50" : idx === optionIndex ? "#f44336" : "#fff";
  });

  // Enable the "Next" button
  document.getElementById("next-btn").disabled = false;
}

function updateProgress() {
  progress = ((currentQuestionIndex + 1) / questions.length) * 100;
  document.getElementById("progress").style.width = `${progress}%`;
}

function startTimer() {
  clearInterval(timer);
  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("time-remaining").textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timer);
      alert("Time's up! Moving to the next question.");
      nextQuestion();
    }
  }, 1000);
}

function goToPage(page) {
  alert(`Navigate to ${page} page`);
}
