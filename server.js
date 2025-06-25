const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
const WEATHER_API_KEY = process.env.WEATHER_API_KEY;
const WEATHER_API_BASE_URL = process.env.WEATHER_API_BASE_URL;

app.use(cors({
    origin: (origin, callback) => {
        const allowedOrigins = [
            'https://weather-app-frontend-snowy.vercel.app',
            'http://localhost:5173' // Add local dev URL if needed
        ];
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
}));
app.use(express.json());

// Helper function to make WeatherAPI requests
async function makeWeatherApiRequest(endpoint, queryParams) {
    try {
        const response = await axios.get(`${WEATHER_API_BASE_URL}/${endpoint}`, {
            params: {
                key: WEATHER_API_KEY,
                ...queryParams
            }
        });
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.error?.message || 'Weather API request failed');
    }
}

// Endpoint for current weather
app.get('/api/current', async (req, res) => {
    try {
        const { q } = req.query;
        if (!q) {
            return res.status(400).json({ error: 'Location (q) parameter is required' });
        }
        const data = await makeWeatherApiRequest('current.json', { q });
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Endpoint for weather forecast
app.get('/api/forecast', async (req, res) => {
    try {
        const { q, days } = req.query;
        if (!q) {
            return res.status(400).json({ error: 'Location (q) parameter is required' });
        }
        const data = await makeWeatherApiRequest('forecast.json', { q, days });
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Endpoint for weather history
app.get('/api/history', async (req, res) => {
    try {
        const { q, dt } = req.query;
        if (!q || !dt) {
            return res.status(400).json({ error: 'Location (q) and date (dt) parameters are required' });
        }
        const data = await makeWeatherApiRequest('history.json', { q, dt });
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Endpoint for astronomy data
app.get('/api/astronomy', async (req, res) => {
    try {
        const { q } = req.query;
        if (!q) {
            return res.status(400).json({ error: 'Location (q) parameter is required' });
        }
        const data = await makeWeatherApiRequest('astronomy.json', { q });
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Endpoint for timezone data
app.get('/api/timezone', async (req, res) => {
    try {
        const { q } = req.query;
        if (!q) {
            return res.status(400).json({ error: 'Location (q) parameter is required' });
        }
        const data = await makeWeatherApiRequest('timezone.json', { q });
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Endpoint for location search
app.get('/api/search', async (req, res) => {
    try {
        const { q } = req.query;
        if (!q) {
            return res.status(400).json({ error: 'Location (q) parameter is required' });
        }
        const data = await makeWeatherApiRequest('search.json', { q });
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/', async (req, res) => {
    try {
        res.send("weather app backend");
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});