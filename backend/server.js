// backend/server.js
const express = require('express');
const connectDB = require('./db/connection');
const weatherRoutes = require('./routes/weatherRoutes');

const app = express();

// Middleware
app.use(express.json());

// Connect to DB
connectDB();
const cors = require('cors');
app.use(cors());
// Use Routes
app.use('/api/weather', weatherRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
