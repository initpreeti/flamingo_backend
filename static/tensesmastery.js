document.getElementById('quizForm').addEventListener('submit', function (event) {
    event.preventDefault();
    
    let score = 0;
    const totalQuestions = 20;
    
    // Answers for each question
    const answers = {
        q1: 'will go',
        q2: 'is',
        q3: 'have',
        // Add answers for q4 to q20
    };
    
    // Check answers
    for (let i = 1; i <= totalQuestions; i++) {
        const selectedAnswer = document.querySelector(`input[name="q${i}"]:checked`)?.value;
        if (selectedAnswer === answers[`q${i}`]) {
            score++;
        }
    }
    
    // Display result
    let resultText = `Your score is: ${score} out of ${totalQuestions}`;
    document.getElementById('quizResult').innerText = resultText;

    // Update progress bar
    const progress = (score / totalQuestions) * 100;
    document.getElementById('progress').innerHTML = `
        <div style="width: 100%; background-color: #ddd; border-radius: 5px;">
            <div style="height: 20px; width: ${progress}%; background-color: #4CAF50; border-radius: 5px;"></div>
        </div>
        <p>Progress: ${Math.round(progress)}%</p>
    `;
});
