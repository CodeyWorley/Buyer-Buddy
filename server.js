const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/Listing');
require('./models/User');
require('./services/passport');

// Connect to DB
mongoose.connect(keys.mongoURI);

// Create Models
const Listing = mongoose.model('listings');
const User = mongoose.model('user');

// Create App
const app = express();

// Cookies
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Get Routes
require('./routes/authRoutes')(app);
require('./routes/listingRoutes')(app);


if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// Listen on PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT);
