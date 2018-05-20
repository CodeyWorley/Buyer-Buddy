const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');

// Connect to DB
mongoose.connect(keys.mongoURI);

// Create Listing Model
require('./models/Listing');
const Listing = mongoose.model('listings');

// Create App
const app = express();

// Simple Routes
app.get('/', (req, res) => {
  res.send({hi:'there'});
});

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.get('/api/listings', function(req, res) {
  Listing.find({}, function(err, listings) {
    res.json(listings);
  });
});

// Listen on PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT);
