let map;
let marker;

document.addEventListener('DOMContentLoaded', function () {
  map = L.map('map').setView([42.7339, 25.4858], 6);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
  }).addTo(map);

  map.on('click', function (e) {
    updateCoordinates(e.latlng);
  });
});

function updateCoordinates(latlng) {
  document.getElementById('latitude').value = latlng.lat;
  document.getElementById('longitude').value = latlng.lng;
  if (marker) {
    map.removeLayer(marker);
  }

  marker = L.marker(latlng).addTo(map);
}

function submitFeedback() {
  const name = document.getElementById('name').value;
  const rate = document.getElementById('rate').value;
  const comment = document.getElementById('comment').value;
  const latitude = document.getElementById('latitude').value;
  const longitude = document.getElementById('longitude').value;

  const feedbackData = { name, rate, comment, latitude, longitude };

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
