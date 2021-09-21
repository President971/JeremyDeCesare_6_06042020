const mongoose = require('mongoose');

const sauceSchema = mongoose.Schema({
  title: { type: String},
  description: { type: String},
  imageUrl: { type: String},
  userId: { type: String},
  price: { type: Number},
});

module.exports = mongoose.model('sauce', sauceSchema);