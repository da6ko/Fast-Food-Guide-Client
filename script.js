function submitFeedback() {
  const name = document.getElementById('name').value;
  const rate = document.getElementById('rate').value;
  const comment = document.getElementById('comment').value;

  const feedbackData = { name, rate, comment };

  fetch('http://localhost:8080/submit-feedback', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(feedbackData),
  })
    .then(response => response.text())
    .then(message => {
      alert(message);
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Failed to submit feedback. Please try again.');
    });
}
