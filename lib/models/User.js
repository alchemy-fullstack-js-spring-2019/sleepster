const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  ip: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('User', userSchema);
