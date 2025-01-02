function startQuiz() {
    document.getElementById("quizContainer").style.display = "block";
    document.getElementById("quiz").style.display = "none";
}

function checkAnswer(answer) {
    const correctAnswer = "सुबह शुभ";
    let feedback = "";
    
    if (answer === correctAnswer) {
        feedback = "Correct! 'Good morning' in Hindi is 'सुबह शुभ'.";
    } else {
        feedback = "Try again! The correct answer is 'सुबह शुभ'.";
    }

    document.getElementById("feedback").textContent = feedback;
}
