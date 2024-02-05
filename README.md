# Feedback Form App

This is a simple web application for collecting user feedback with an integrated map for choosing the location. The app is built using HTML, CSS, JavaScript, and Node.js with Express. Feedback data is stored in MongoDB Atlas. After reviewing an location, you can see your rating in the [fast food rating app](https://github.com/da6ko/Fast-Food-Guide?tab=readme-ov-file).

# Getting Started

Before running the application, make sure you have the following installed:

- Node.js
- npm
- MongoDB Atlas account with a database and collection set up


# Installation
1. Clone the repository:
```bash
git clone git clone https://github.com/your-username/feedback-form-app.git
```

2. Install dependencies:
```bash
cd feedback-form-app
npm install
```

3. Start the server:
```bash
node server.js
```
The server will be running at http://localhost:8080.

 
# Usage

1. Fill in the feedback form, including name, rating, comment, and choose a location on the map.

2. Click on the map to select the location. The latitude and longitude will be automatically filled in.

3. Click the "Submit Feedback" button to submit the feedback.

# Backend API

- POST /submit-feedback: Submits user feedback to the MongoDB database.


# Technologies Used

- HTML, CSS, JavaScript (Frontend)
- Node.js, Express (Backend)
- MongoDB Atlas (Database)
- Leaflet.js (Map integration)

