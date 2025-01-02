// Quiz Questions
const questions = [

        { question: "Which article is used for non-specific singular nouns?", options: ["A", "The", "An", "None"], correct: "A" },
        { question: "Choose the correct sentence:", options: ["He is a honest man.", "He is an honest man.", "He is the honest man.", "He is honest man."], correct: "He is an honest man." },
        { question: "Which article is used for unique objects?", options: ["A", "An", "The", "None"], correct: "The" },
        { question: "Select the correct sentence:", options: ["I need an umbrella.", "I need a umbrella.", "I need the umbrella.", "I need umbrella."], correct: "I need an umbrella." },
        { question: "Choose the correct sentence:", options: ["This is a university.", "This is an university.", "This is the university.", "This is university."], correct: "This is a university." },
        { question: "Which article is used before 'hour'?", options: ["A", "An", "The", "None"], correct: "An" },
        { question: "What type of article is 'A'?", options: ["Definite", "Indefinite", "None", "Specific"], correct: "Indefinite" },
        { question: "Fill in the blank: She is ___ engineer.", options: ["A", "An", "The", "None"], correct: "An" },
        { question: "Choose the correct sentence:", options: ["The Ganga is a holy river.", "The Ganga is an holy river.", "A Ganga is holy river.", "None of these."], correct: "The Ganga is a holy river." },
        { question: "Which article is used before names of rivers?", options: ["A", "An", "The", "None"], correct: "The" },
        { question: "Choose the correct sentence:", options: ["He wants to read the book.", "He wants to read a book.", "He wants to read an book.", "None of these."], correct: "He wants to read a book." },
        { question: "What article is used for singular countable nouns?", options: ["A/An", "The", "None", "Both A and The"], correct: "A/An" },
        { question: "Which article is used before names of countries with 'Republic'?", options: ["A", "An", "The", "None"], correct: "The" },
        { question: "Choose the correct sentence:", options: ["I saw a bird in the garden.", "I saw an bird in the garden.", "I saw the bird in the garden.", "None of these."], correct: "I saw a bird in the garden." },
        { question: "Fill in the blank: ___ Earth revolves around the Sun.", options: ["A", "An", "The", "None"], correct: "The" },
        { question: "Which article is used with superlatives?", options: ["A", "An", "The", "None"], correct: "The" },
        { question: "Choose the correct sentence:", options: ["She is the best player.", "She is a best player.", "She is an best player.", "She is best player."], correct: "She is the best player." },
        { question: "Which article is used with musical instruments?", options: ["A", "An", "The", "None"], correct: "The" },
        { question: "Choose the correct sentence:", options: ["I play the piano.", "I play a piano.", "I play an piano.", "I play piano."], correct: "I play the piano." },
        { question: "Fill in the blank: It was ___ amazing performance.", options: ["A", "An", "The", "None"], correct: "An" },
        { question: "Which article is used before abbreviations with vowel sounds?", options: ["A", "An", "The", "None"], correct: "An" },
        { question: "Choose the correct sentence:", options: ["I need an MRI scan.", "I need a MRI scan.", "I need the MRI scan.", "None of these."], correct: "I need an MRI scan." },
        { question: "Fill in the blank: ___ apple a day keeps the doctor away.", options: ["A", "An", "The", "None"], correct: "An" },
        { question: "Which article is used for general truths?", options: ["A", "An", "The", "None"], correct: "The" },
        { question: "Choose the correct sentence:", options: ["The water is essential for life.", "Water is essential for life.", "A water is essential for life.", "An water is essential for life."], correct: "Water is essential for life." },
        { question: "Fill in the blank: She is ___ tallest girl in the class.", options: ["A", "An", "The", "None"], correct: "The" },
        { question: "Choose the correct sentence:", options: ["We stayed at a hotel by the beach.", "We stayed at an hotel by the beach.", "We stayed at the hotel by the beach.", "None of these."], correct: "We stayed at the hotel by the beach." },
        { question: "Fill in the blank: It was ___ unforgettable experience.", options: ["A", "An", "The", "None"], correct: "An" },
        { question: "Choose the correct sentence:", options: ["I bought an umbrella yesterday.", "I bought a umbrella yesterday.", "I bought the umbrella yesterday.", "None of these."], correct: "I bought an umbrella yesterday." },
        { question: "Which article is used before names of monuments?", options: ["A", "An", "The", "None"], correct: "The" },
        { question: "Fill in the blank: He is ___ best teacher I know.", options: ["A", "An", "The", "None"], correct: "The" },
        { question: "Choose the correct sentence:", options: ["He gave me an orange.", "He gave me a orange.", "He gave me the orange.", "None of these."], correct: "He gave me an orange." },
        { question: "Fill in the blank: She has ___ idea about the plan.", options: ["A", "An", "The", "None"], correct: "An" },
        { question: "Which article is used before ordinal numbers?", options: ["A", "An", "The", "None"], correct: "The" },
        { question: "Choose the correct sentence:", options: ["The first prize was awarded to her.", "A first prize was awarded to her.", "An first prize was awarded to her.", "None of these."], correct: "The first prize was awarded to her." },
        { question: "Fill in the blank: He wants to become ___ engineer.", options: ["A", "An", "The", "None"], correct: "An" },
        { question: "Choose the correct sentence:", options: ["He visited the United States.", "He visited a United States.", "He visited an United States.", "None of these."], correct: "He visited the United States." },
        { question: "Fill in the blank: It was ___ honor to meet her.", options: ["A", "An", "The", "None"], correct: "An" },
        { question: "Choose the correct sentence:", options: ["She has an hour to complete the task.", "She has a hour to complete the task.", "She has the hour to complete the task.", "None of these."], correct: "She has an hour to complete the task." },
        { question: "Fill in the blank: He is ___ university student.", options: ["A", "An", "The", "None"], correct: "A" },
        { question: "Choose the correct sentence:", options: ["I read an interesting book.", "I read a interesting book.", "I read the interesting book.", "None of these."], correct: "I read an interesting book." },
        { question: "Which article is used before famous books?", options: ["A", "An", "The", "None"], correct: "The" },
        { question: "Fill in the blank: He lives in ___ apartment in New York.", options: ["A", "An", "The", "None"], correct: "An" },
        { question: "Choose the correct sentence:", options: ["The Taj Mahal is beautiful.", "A Taj Mahal is beautiful.", "An Taj Mahal is beautiful.", "None of these."], correct: "The Taj Mahal is beautiful." },
        { question: "Fill in the blank: We are going to ___ park.", options: ["A", "An", "The", "None"], correct: "The" },
        { question: "Which article is used before names of newspapers?", options: ["A", "An", "The", "None"], correct: "The" },
        { question: "Choose the correct sentence:", options: ["He is reading the Times of India.", "He is reading a Times of India.", "He is reading an Times of India.", "None of these."], correct: "He is reading the Times of India." }
    
    
    // Add 50 questions as needed
];

let currentQuestionIndex = 0;
let score = 0;

// Initialize Quiz
function loadQuestion() {
    const questionBox = document.getElementById('question-box');
    const optionsBox = document.getElementById('options');
    const currentQuestion = questions[currentQuestionIndex];

    questionBox.textContent = currentQuestion.question;
    optionsBox.innerHTML = '';

    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.className = 'option';
        button.textContent = option;
        button.onclick = () => checkAnswer(button, currentQuestion.correct);
        optionsBox.appendChild(button);
    });

    document.getElementById('current-question').textContent = currentQuestionIndex + 1;
}

// Check Answer
function checkAnswer(button, correctAnswer) {
    if (button.textContent === correctAnswer) {
        button.classList.add('correct');
        score++;
    } else {
        button.classList.add('wrong');
    }

    Array.from(document.getElementsByClassName('option')).forEach(option => {
        option.onclick = null;
        if (option.textContent === correctAnswer) {
            option.classList.add('correct');
        }
    });

    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            showResults();
        }
    }, 1000);
}

// Show Results
function showResults() {
    const questionBox = document.getElementById('question-container');
    questionBox.innerHTML = `<h2>Quiz Completed!</h2><p>Your score: ${score} / ${questions.length}</p>`;
}

// Start Quiz
loadQuestion();
