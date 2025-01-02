// Function to check the quiz answers
function checkAnswers() {
    const answers = {
        q1: "goes",
        q2: "have",
        q3: "went",
        q4: "will go",
        q5: "am",
        q6: "will have finished"
        // Continue adding answers for questions 7-30
    };

    let score = 0;
    const totalQuestions = 30;

    // Check answers for each question
    for (let i = 1; i <= totalQuestions; i++) {
        const question = document.querySelector(`input[name="q${i}"]:checked`);
        if (question && question.value === answers[`q${i}`]) {
            score++;
        }
    }

    // Show results
    const results = document.getElementById('results');
    results.innerHTML = `You scored ${score} out of ${totalQuestions}.`;

    if (score === totalQuestions) {
        results.style.color = "green";
    } else {
        results.style.color = "red";
    }
}
