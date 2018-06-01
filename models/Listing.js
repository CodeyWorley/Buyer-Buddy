const mongoose = require('mongoose');
const { Schema }  = mongoose;

const listingSchema = new Schema({
  title: String,
  sku: String,
  asin: String,
  price: Number,
  inventory: Number,
  family: String,
  sellerId: String
});

mongoose.model('listings', listingSchema);
