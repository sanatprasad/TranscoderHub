const express = require('express');
const cors = require('cors');
const videoRoutes = require('./routes/videoRoutes');
const cacheRoutes = require('./routes/cacheRoutes');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// API routes
app.use('/api/video', videoRoutes);
app.use('/api/cache', cacheRoutes);

// Error handling
app.use((err, req, res, next) => {
  res.status(500).json({ success: false, error: err.message });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
