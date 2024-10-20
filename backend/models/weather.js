// backend/models/Weather.js
const mongoose = require('mongoose');

const weatherSchema = new mongoose.Schema({
  city: String,
  temp: Number,
  feels_like: Number,
  condition: String,
  time: { type: Date, default: Date.now }
});

const Weather = mongoose.model('Weather', weatherSchema);

module.exports = Weather;
