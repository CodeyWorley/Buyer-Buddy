const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');

// Connect to DB
mongoose.connect(keys.mongoURI);

// Create Listing Model
require('./models/Listing');
const Listing = mongoose.model('listings');
// Create User Model
require('./models/User');
const User = mongoose.model('user');

// Create App
const app = express();

// Api Paths
app.get('/api/listings', async (req, res) => {
  const listings = await Listing.find({});
  res.send(listings);
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(_dirname, 'client', 'build', 'index.html'));
  });
}

// Listen on PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT);
