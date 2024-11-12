const redisClient = require('../config/redisConfig');

// Save video URL to cache
const saveCache = async (req, res) => {
  const { fileUrl } = req.body;

  try {
    await redisClient.set('fileUrl', fileUrl, 'EX', 3600); // Cache for 1 hour
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, error: 'Failed to save to cache' });
  }
};

// Get cached URL
const getCache = async (req, res) => {
  try {
    const fileUrl = await redisClient.get('fileUrl');
    if (fileUrl) {
      res.status(200).json({ success: true, fileUrl });
    } else {
      res.status(404).json({ success: false, error: 'Cache not found' });
    }
  } catch (err) {
    res.status(500).json({ success: false, error: 'Failed to retrieve from cache' });
  }
};

module.exports = { saveCache, getCache };
