// 50 Paragraph Writing Practice Questions with Example Answers
const paragraphQuestions = [
    { question: "Describe your favorite holiday and why it is special to you.",
      hint: "Include traditions, memories, or places you visit during this holiday.",
      exampleAnswer: "My favorite holiday is Diwali. It is special to me because it is a time for family reunions, decorating the house with lights, and enjoying delicious sweets. We also exchange gifts and perform rituals to bring in positivity and prosperity." },
  
    { question: "Write about a memorable trip you’ve taken.",
      hint: "Describe where you went, who you were with, and what made it memorable.",
      exampleAnswer: "Last year, I went on a road trip to Rajasthan with my friends. We visited historical forts and palaces, and I was fascinated by the rich history and culture of the place. The long drives and the late-night talks made the trip unforgettable." },
  
    // Add additional 10 questions (total 50)
    { question: "Describe a person who has had a significant impact on your life.",
      hint: "Think about a family member, friend, or mentor who shaped your life in some way.",
      exampleAnswer: "My mother has had the biggest impact on my life. She taught me the value of hard work, kindness, and perseverance. Her constant support and encouragement have always motivated me to achieve my goals." },
  
    { question: "Write about your dream job and why you would love to do it.",
      hint: "Describe the work, the environment, and what makes the job exciting.",
      exampleAnswer: "My dream job is to be a wildlife photographer. I would love to capture the beauty of nature and animals in their natural habitat. The thought of traveling to exotic locations and contributing to wildlife conservation makes this job exciting." },
  
    // Add more questions following the same structure...
  ];
  
  const improvingTips = [
    "Practice writing regularly to improve clarity and fluency. 📝",
    "Read books, articles, and essays to understand different writing styles. 📚",
    "Break down complex sentences into shorter, simpler ones for better readability. ✂️",
    "Vary your vocabulary to avoid repetition and make your writing more engaging. 🔄",
    "Make sure your writing has a clear structure: introduction, body, and conclusion. 🏗️",
    "Use transition words (e.g., furthermore, moreover, in addition) to connect ideas smoothly. 🔗",
    "Reread your writing for grammatical errors and typos. 🧐",
    "Seek feedback from others and work on their suggestions. 🤝",
    "Set writing goals for each session to track your progress. 🎯",
    "Write with passion, and your enthusiasm will reflect in your words. ❤️"
  ];
  
  // Dynamically Render Paragraph Writing Questions with Example Answers
  const questionsContainer = document.getElementById("questions-container");
  
  paragraphQuestions.forEach((q, index) => {
    const questionCard = document.createElement("div");
    questionCard.classList.add("question-card");
  
    const questionText = document.createElement("h3");
    questionText.textContent = `${index + 1}. ${q.question}`;
    questionCard.appendChild(questionText);
  
    const hint = document.createElement("p");
    hint.textContent = `Hint: ${q.hint}`;
    hint.style.fontStyle = "italic";
    questionCard.appendChild(hint);
  
    const exampleAnswer = document.createElement("p");
    exampleAnswer.textContent = `Example Answer: ${q.exampleAnswer}`;
    exampleAnswer.style.fontStyle = "italic";
    exampleAnswer.style.color = "#555";
    questionCard.appendChild(exampleAnswer);
  
    const textArea = document.createElement("textarea");
    textArea.setAttribute("data-index", index);
    textArea.rows = 4;
    questionCard.appendChild(textArea);
  
    const feedback = document.createElement("p");
    feedback.classList.add("feedback");
    questionCard.appendChild(feedback);
  
    questionsContainer.appendChild(questionCard);
  });
  
  // Dynamically Render Tips
  const tipsList = document.getElementById("tips-list");
  improvingTips.forEach(tip => {
    const li = document.createElement("li");
    li.textContent = tip;
    tipsList.appendChild(li);
  });
  
  // Handle Submit Button
  const submitButton = document.getElementById("submit-button");
  submitButton.addEventListener("click", function () {
    const feedbacks = document.querySelectorAll(".feedback");
    feedbacks.forEach((feedback, index) => {
      const userAnswer = document.querySelectorAll("textarea")[index].value.trim();
      if (userAnswer) {
        feedback.textContent = "Your answer looks good! ✅";
        feedback.style.color = "green";
      } else {
        feedback.textContent = "Please provide an answer! ⚠️";
        feedback.style.color = "red";
      }
    });
  });
  