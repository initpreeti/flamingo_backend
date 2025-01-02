function startLesson(section) {
    alert(`Starting the ${section} module. Get ready to learn!`);
  }
  
  // Example progress tracker data
  let progress = {
    grammar: 0,
    vocabulary: 0,
    conversation: 0,
    writing: 0,
  };
  
  // Function to update progress
  function updateProgress(section, score) {
    progress[section] += score;
    const chart = document.getElementById("progress-chart");
    chart.innerHTML = `
      <p>Grammar: ${progress.grammar}%</p>
      <p>Vocabulary: ${progress.vocabulary}%</p>
      <p>Conversation: ${progress.conversation}%</p>
      <p>Writing: ${progress.writing}%</p>
    `;
  }
  