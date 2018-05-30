const mongoose = require('mongoose');
require('../models/Listing');
require('../models/User');

const Listing = mongoose.model('listings');
const User = mongoose.model('user');

module.exports = app => {

  app.get('/api/listings', async (req, res) => {

    var user = await User.findOne({ googleId: req.user.googleId }).lean(true);

    const listings = await Listing.find({sellerId: user.sellerId});
    res.send(listings);
  });

};
