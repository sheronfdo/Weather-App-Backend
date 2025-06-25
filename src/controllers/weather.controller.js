const {makeWeatherApiRequest} = require('../services/weather.service');

const getCurrent = async (req, res) => {
    const {q} = req.query;
    if (!q) return res.status(400).json({error: 'Location (q) parameter is required'});
    try {
        const data = await makeWeatherApiRequest('current.json', {q});
        res.json(data);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

const getForecast = async (req, res) => {
    const {q, days} = req.query;
    if (!q) return res.status(400).json({error: 'Location (q) parameter is required'});
    try {
        const data = await makeWeatherApiRequest('forecast.json', {q, days});
        res.json(data);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

const getHistory = async (req, res) => {
    const {q, dt} = req.query;
    if (!q || !dt) return res.status(400).json({error: 'Location (q) and date (dt) parameters are required'});
    try {
        const data = await makeWeatherApiRequest('history.json', {q, dt});
        res.json(data);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

const getAstronomy = async (req, res) => {
    const {q} = req.query;
    if (!q) return res.status(400).json({error: 'Location (q) parameter is required'});
    try {
        const data = await makeWeatherApiRequest('astronomy.json', {q});
        res.json(data);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

const getTimezone = async (req, res) => {
    const {q} = req.query;
    if (!q) return res.status(400).json({error: 'Location (q) parameter is required'});
    try {
        const data = await makeWeatherApiRequest('timezone.json', {q});
        res.json(data);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

const searchLocation = async (req, res) => {
    const {q} = req.query;
    if (!q) return res.status(400).json({error: 'Location (q) parameter is required'});
    try {
        const data = await makeWeatherApiRequest('search.json', {q});
        res.json(data);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

module.exports = {
    getCurrent,
    getForecast,
    getHistory,
    getAstronomy,
    getTimezone,
    searchLocation
};
