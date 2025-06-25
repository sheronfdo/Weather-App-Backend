const express = require('express');
const router = express.Router();
const controller = require('../controllers/weather.controller');

router.get('/current', controller.getCurrent);
router.get('/forecast', controller.getForecast);
router.get('/history', controller.getHistory);
router.get('/astronomy', controller.getAstronomy);
router.get('/timezone', controller.getTimezone);
router.get('/search', controller.searchLocation);

module.exports = router;
