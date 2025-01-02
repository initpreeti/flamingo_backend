document.addEventListener("DOMContentLoaded", () => {
    const words = document.querySelectorAll("b");
    words.forEach(word => {
      word.addEventListener("click", () => {
        const text = word.textContent;
        const msg = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(msg);
      });
    });
  });
  