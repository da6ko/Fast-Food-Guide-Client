const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const port = 8080;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static('public'));

const uri = 'YOUR_MONGODB_URI';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


const dbName = 'feedbackDB';
const collectionName = 'feedbackCollection';

async function connectToMongoDBAtlas() {
  try {
    await client.connect();
    console.log('Connected to MongoDB Atlas');
    const database = client.db(dbName);
    userInformation = database.collection(collectionName);
  } catch (error) {
    console.error(error);
  }
}

connectToMongoDBAtlas();

app.post('/submit-feedback', express.json(), async (req, res) => {
  try {
    const { name, rate } = req.body;
    await userInformation.insertOne({ name, rate });
    res.status(200).send('Feedback submitted successfully!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
