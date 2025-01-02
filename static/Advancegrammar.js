// Function to show modal with details
function showDetails(title, description) {
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-description').textContent = description;
    document.getElementById('modal').style.display = 'flex';
  }
  
  // Function to close modal
  function closeModal() {
    document.getElementById('modal').style.display = 'none';
  }
  