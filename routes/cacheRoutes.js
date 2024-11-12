const express = require('express');
const router = express.Router();
const cacheController = require('../controllers/cacheController');

// Save video URL to cache
router.post('/saveCache', cacheController.saveCache);

// Retrieve cached video URL
router.get('/getCache', cacheController.getCache);

module.exports = router;
