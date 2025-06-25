const express = require('express');
const cors = require('cors');
const weatherRoutes = require('./routes/weather.routes');
const corsOptions = require('./config/cors.config');

const app = express();

app.use(cors(corsOptions));
app.use(express.json());

app.use('/api', weatherRoutes);

app.get('/', (req, res) => res.send('Weather App Backend'));

module.exports = app;
