const mongoose = require('mongoose');
const { Schema }  = mongoose;

const listingSchema = new Schema({
  title: String,
  sku: String,
  asin: String,
  price: String,
  inventory: String,
  family: String,
  sellerId: String
});

mongoose.model('listings', listingSchema);
