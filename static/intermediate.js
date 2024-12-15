function goToPage(page) {
    if (page === 'home') {
      window.location.href = 'index.html';
    } else if (page === 'profile') {
      window.location.href = 'profile.html';
    } else if (page === 'progress') {
      window.location.href = 'progress.html';
    }
  }
  
  function startLesson(lesson) {
    alert(`Starting Lesson ${lesson}`);
    // Load lesson content dynamically or navigate to lesson page.
  }
  
  function startQuiz() {
    alert('Navigating to Quiz...');
    window.location.href = 'quiz.html';
  }
  