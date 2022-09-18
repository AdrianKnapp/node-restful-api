const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); 
const cors = require('cors');
require('dotenv/config');

// Import routes
const postsRoute = require('./routes/posts');

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/posts', postsRoute);

// ROUTES
app.get('/', (req, res) => {
  res.send('We are on home');
})

// Connect to DB
mongoose.connect(process.env.DB_CONNECTION, () => {
  console.log('connected to DB');
})

// How do we start listening to the server
app.listen(3000);