let currentQuestionIndex = 0; // Track the current question
let score = 0; // Track user score

const quizBox = document.getElementById("quizBox");
const questionText = document.getElementById("question");
const optionsContainer = document.getElementById("options");
const nextButton = document.getElementById("nextQuestion");
const progress = document.getElementById("progress");

const questions = [
    { question: "Which is an action verb?", options: ["Run", "Is", "The", "They"], correct: "Run" },
    { question: "Identify the auxiliary verb: She can dance well.", options: ["She", "Can", "Dance", "Well"], correct: "Can" },
    // Add more questions here...
    { question: "Which is an intransitive verb?", options: ["She sleeps", "He writes a letter", "They bought", "All"], correct: "She sleeps" },
    { question: "Find the verb in: They are playing football.", options: ["They", "Are playing", "Football", "None"], correct: "Are playing" },
    { question: "Which sentence uses an auxiliary verb?", options: ["She can swim.", "He runs daily.", "The sun rises.", "All"], correct: "She can swim." },
    { question: "What is the verb in: Birds fly in the sky?", options: ["Birds", "Fly", "Sky", "In"], correct: "Fly" },
    { question: "Identify the linking verb: The cake tastes sweet.", options: ["Cake", "Tastes", "Sweet", "The"], correct: "Tastes" },
    { question: "Which is NOT a verb?", options: ["Run", "Play", "Book", "Eat"], correct: "Book" },
    { question: "What is the main verb in: He has completed his homework?", options: ["He", "Has", "Completed", "Homework"], correct: "Completed" },
    { question: "Identify the auxiliary verb: She will call you later.", options: ["She", "Will", "Call", "You"], correct: "Will" },
    { question: "Find the action verb: They danced all night.", options: ["They", "Danced", "All", "Night"], correct: "Danced" },
    { question: "Which is a regular verb?", options: ["Jumped", "Gave", "Ran", "Took"], correct: "Jumped" },
    { question: "Which is an irregular verb?", options: ["Wrote", "Talked", "Walked", "Worked"], correct: "Wrote" },
    { question: "Identify the verb in: The children are laughing.", options: ["The", "Children", "Are laughing", "None"], correct: "Are laughing" },
    { question: "What type of verb is in: He looks tired?", options: ["Action", "Linking", "Auxiliary", "Transitive"], correct: "Linking" },
    { question: "Find the helping verb in: She might visit tomorrow.", options: ["She", "Might", "Visit", "Tomorrow"], correct: "Might" },
    { question: "What type of verb is 'to eat' in: I want to eat?", options: ["Action", "Infinitive", "Linking", "Transitive"], correct: "Infinitive" },
    { question: "What is the verb in: They will be arriving soon?", options: ["They", "Will be arriving", "Soon", "None"], correct: "Will be arriving" },
];

function loadQuestion() {
    // Reset styles and load the next question
    optionsContainer.innerHTML = "";
    questionText.textContent = questions[currentQuestionIndex].question;

    questions[currentQuestionIndex].options.forEach((optionText) => {
        const option = document.createElement("button");
        option.className = "option";
        option.textContent = optionText;
        option.addEventListener("click", () => checkAnswer(option));
        optionsContainer.appendChild(option);
    });

    progress.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
}

function checkAnswer(selectedOption) {
    const correctAnswer = questions[currentQuestionIndex].correct;
    const options = document.querySelectorAll(".option");

    options.forEach((option) => {
        if (option.textContent === correctAnswer) {
            option.style.backgroundColor = "green"; // Highlight correct answer
            option.style.color = "white";
        } else {
            option.style.backgroundColor = "red"; // Highlight incorrect answers
            option.style.color = "white";
        }
        option.disabled = true; // Disable all options after selection
    });

    if (selectedOption.textContent === correctAnswer) {
        score++;
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        quizBox.innerHTML = `<h2>Quiz Completed!</h2><p>Your Score: ${score}/${questions.length}</p>`;
    }
});

// Load the first question
loadQuestion();
