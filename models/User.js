const mongoose = require('mongoose');
const { Schema }  = mongoose;

const userSchema = new Schema({
  email: String,
  password: String
});

/*
sellerId: String,
accessKey: String,
secretKey: String,
status: String
*/

mongoose.model('user', userSchema);
