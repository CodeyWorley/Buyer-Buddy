const mongoose = require('mongoose');
const { Schema }  = mongoose;

const userSchema = new Schema({
  googleId: String,
  sellerId: String,
  accessKey: String,
  secretKey: String,
  status: String
});

mongoose.model('user', userSchema);
