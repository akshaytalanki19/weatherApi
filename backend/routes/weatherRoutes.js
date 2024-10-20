// backend/routes/weatherRoutes.js
const express = require('express');
const router = express.Router();
const { saveWeatherData } = require('../controller/weatherController');

// POST request to save weather data
router.post('/save', saveWeatherData);

module.exports = router;
