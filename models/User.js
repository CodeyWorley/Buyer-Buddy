const mongoose = require('mongoose');
const { Schema }  = mongoose;

const userSchema = new Schema({
  googleId: String,
  sellerId: String,
  authToken: String,
  storeName: String,
  status: String,
  updated: String
});

mongoose.model('user', userSchema);
