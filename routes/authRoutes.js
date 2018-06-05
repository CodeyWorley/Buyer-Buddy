const passport = require('passport');
const mongoose = require('mongoose');
require('../models/User');

const User = mongoose.model('user');

module.exports = app => {
  app.get('/auth/google', passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get('/auth/google/callback', passport.authenticate('google'),
    (req, res) => {
      res.redirect('/dashboard');
    }
  );

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });

  app.get('/api/account_info', async (req, res) => {
    var user = await User.findOne({ googleId: req.user.googleId }); //.lean(true);
    res.send(user);
  });

  app.post('/api/update_account_info', async (req, res) => {
    const { storeName, sellerId, authToken } = req.body;
    var user = await User.update({ googleId: req.user.googleId }, { $set: {storeName: storeName, sellerId: sellerId, authToken: authToken}});
    res.send(user);
  });

}
