function checkAnswers() {
    let score = 0;

    // Array of correct answers for the 10 questions
    const answers = {
        q1: 'a', // benevolent
        q2: 'a', // gregarious
        q3: 'a', // inundated
        q4: 'a', // cacophony
        q5: 'a', // equanimity
        q6: 'a', // apocryphal
        q7: 'a', // salubrious
        q8: 'a', // juxtapose
        q9: 'a', // laconic
        q10: 'a'  // ineffable
    };

    // Loop through each question
    for (let i = 1; i <= 10; i++) {
        const answer = document.querySelector(`input[name="q${i}"]:checked`);
        if (answer && answer.value === answers[`q${i}`]) {
            score++;
        }
    }

    alert(`Your score is: ${score}/10`);
}
