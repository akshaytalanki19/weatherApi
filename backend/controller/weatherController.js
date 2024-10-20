// backend/controller/weatherController.js
const Weather = require('../models/Weather');


// Controller to save weather data
const saveWeatherData = async (req, res) => {
  try {
    const weatherData = req.body;

    // Save the data to the database
    const savedWeather = new Weather(weatherData);
    await savedWeather.save();

    return res.status(200).json({ message: 'Weather data saved successfully', savedWeather });
  } catch (error) {
    return res.status(500).json({ message: 'Error saving weather data', error });
  }
};

module.exports = { saveWeatherData };
