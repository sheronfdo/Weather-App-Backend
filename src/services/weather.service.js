const axios = require('axios');
require('dotenv').config();

const WEATHER_API_KEY = process.env.WEATHER_API_KEY;
const WEATHER_API_BASE_URL = process.env.WEATHER_API_BASE_URL;

const makeWeatherApiRequest = async (endpoint, queryParams) => {
    try {
        const response = await axios.get(`${WEATHER_API_BASE_URL}/${endpoint}`, {
            params: {key: WEATHER_API_KEY, ...queryParams}
        });
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.error?.message || 'Weather API request failed');
    }
};

module.exports = {makeWeatherApiRequest};
