// Sample questions and answers (100 questions total)

const grammarQuestions = [
    { question: "What is the past tense of 'go'?", options: ["goes", "went", "going", "gone"], answer: "went" },
    { question: "Which sentence is correct?", options: ["She don't like apples.", "She doesn't likes apples.", "She doesn't like apples.", "She not like apples."], answer: "She doesn't like apples." },
    { question: "What is the plural of 'child'?", options: ["children", "childs", "childes", "childer"], answer: "children" },
    { question: "Choose the correct verb: 'She ___ a book.'", options: ["read", "reads", "reading", "reader"], answer: "reads" },
    { question: "Choose the correct word: 'They ___ to the store yesterday.'", options: ["go", "went", "going", "gone"], answer: "went" },
    { question: "Which sentence is in the future tense?", options: ["I am eating.", "I ate.", "I will eat.", "I eat."], answer: "I will eat." },
    { question: "Which word is an adverb?", options: ["run", "quickly", "happy", "dog"], answer: "quickly" },
    { question: "Identify the subject: 'The cat sleeps on the mat.'", options: ["cat", "sleeps", "mat", "on"], answer: "cat" },
    { question: "What is the past form of 'eat'?", options: ["ate", "eated", "eats", "eating"], answer: "ate" },
    { question: "Select the correct article: '___ apple a day keeps the doctor away.'", options: ["A", "An", "The", "None"], answer: "An" },
    // Add more grammar questions to reach 30
  ];
  
  const conversationQuestions = [
    { question: "How do you greet someone in the morning?", options: ["Good night", "Good morning", "Good afternoon", "Good evening"], answer: "Good morning" },
    { question: "What would you say if you are sorry?", options: ["Excuse me", "I’m sorry", "Thank you", "Goodbye"], answer: "I’m sorry" },
    { question: "How do you ask for directions?", options: ["Where is the nearest store?", "What time is it?", "Can I help you?", "How are you?"], answer: "Where is the nearest store?" },
    { question: "How do you order food at a restaurant?", options: ["I like pizza.", "Can I have a pizza, please?", "I am hungry.", "I want pizza."], answer: "Can I have a pizza, please?" },
    { question: "Which is a polite way to refuse an offer?", options: ["No thanks.", "I don't want.", "Not interested.", "No."], answer: "No thanks." },
    { question: "How do you introduce yourself?", options: ["I am John.", "You are John.", "I John am.", "John I am."], answer: "I am John." },
    { question: "What do you say when you meet someone for the first time?", options: ["Nice to meet you.", "Goodbye.", "How are you?", "See you."], answer: "Nice to meet you." },
    { question: "How do you say goodbye?", options: ["See you later.", "How are you?", "Good night.", "Good morning."], answer: "See you later." },
    { question: "How do you apologize?", options: ["I'm sorry.", "Excuse me.", "Pardon me.", "No problem."], answer: "I'm sorry." },
    { question: "How do you offer help?", options: ["Can I help you?", "What are you doing?", "I don't care.", "Leave me alone."], answer: "Can I help you?" },
    // Add more conversation questions to reach 30
  ];
  
  const vocabularyQuestions = [
    { question: "Which one is a fruit?", options: ["Carrot", "Apple", "Potato", "Cabbage"], answer: "Apple" },
    { question: "What is a synonym of 'happy'?", options: ["Sad", "Joyful", "Angry", "Tired"], answer: "Joyful" },
    { question: "What is the opposite of 'big'?", options: ["small", "tall", "short", "heavy"], answer: "small" },
    { question: "Which is a color?", options: ["Blue", "Dog", "House", "Computer"], answer: "Blue" },
    { question: "Which one is an animal?", options: ["Lion", "Car", "Ball", "Pen"], answer: "Lion" },
    { question: "What is the opposite of 'happy'?", options: ["Sad", "Angry", "Joyful", "Tired"], answer: "Sad" },
    { question: "Which one is a vegetable?", options: ["Cucumber", "Apple", "Banana", "Strawberry"], answer: "Cucumber" },
    { question: "Which one is a tool?", options: ["Hammer", "Car", "Dog", "Chair"], answer: "Hammer" },
    { question: "Which one is a type of fruit?", options: ["Apple", "Carrot", "Potato", "Onion"], answer: "Apple" },
    { question: "What is the opposite of 'cold'?", options: ["Hot", "Warm", "Cool", "Freezing"], answer: "Hot" },
    // Add more vocabulary questions to reach 40
  ];
  
  // Function to display questions
  function displayQuestions(questions, sectionId) {
    const section = document.getElementById(sectionId);
    questions.forEach((q, index) => {
      const questionDiv = document.createElement("div");
      questionDiv.classList.add("question");
  
      const questionText = document.createElement("p");
      questionText.textContent = q.question;
      questionDiv.appendChild(questionText);
  
      q.options.forEach(option => {
        const label = document.createElement("label");
        const input = document.createElement("input");
        input.type = "radio";
        input.name = "q" + index;
        input.value = option;
        label.appendChild(input);
        label.appendChild(document.createTextNode(option));
        questionDiv.appendChild(label);
        questionDiv.appendChild(document.createElement("br"));
      });
  
      section.appendChild(questionDiv);
    });
  }
  
  // Function to calculate results and show correct/incorrect feedback
  function getResults(questions, sectionId) {
    let score = 0;
    const section = document.getElementById(sectionId);
    const questionDivs = section.querySelectorAll(".question");
  
    questionDivs.forEach((qDiv, index) => {
      const selectedOption = qDiv.querySelector('input[type="radio"]:checked');
      const feedback = document.createElement("div");
  
      if (selectedOption) {
        if (selectedOption.value === questions[index].answer) {
          score++;
          feedback.textContent = "Correct!";
          feedback.style.color = "green";
        } else {
          feedback.textContent = `Incorrect. Correct answer: ${questions[index].answer}`;
          feedback.style.color = "red";
        }
      } else {
        feedback.textContent = "You did not select an answer.";
        feedback.style.color = "orange";
      }
  
      qDiv.appendChild(feedback);
    });
  
    return score;
  }
  
  // Load questions on page load
  window.onload = function() {
    displayQuestions(grammarQuestions, "grammar-quiz");
    displayQuestions(conversationQuestions, "conversation-quiz");
    displayQuestions(vocabularyQuestions, "vocabulary-quiz");
  
    // Handle submit button click
    document.getElementById("submit-btn").addEventListener("click", function() {
      const grammarScore = getResults(grammarQuestions, "grammar-quiz");
      const conversationScore = getResults(conversationQuestions, "conversation-quiz");
      const vocabularyScore = getResults(vocabularyQuestions, "vocabulary-quiz");
  
      const totalScore = grammarScore + conversationScore + vocabularyScore;
      const totalQuestions = grammarQuestions.length + conversationQuestions.length + vocabularyQuestions.length;
  
      document.getElementById("result").textContent = `Your score: ${totalScore} out of ${totalQuestions}`;
  
      // Disable submit button after submitting the quiz
      document.getElementById("submit-btn").disabled = true;
    });
  };
  