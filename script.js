function submitFeedback() {
    const name = document.getElementById('name').value;
    const rate = document.getElementById('rate').value;
  
    fetch('http://localhost:8080/submit-feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, rate }),
    })
      .then(response => response.text())
      .then(message => alert(message))
      .catch(error => console.error(error));
  }
  