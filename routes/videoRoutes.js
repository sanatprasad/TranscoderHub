const express = require('express');
const router = express.Router();
const multer = require('multer');
const videoController = require('../controllers/videoController');

// Multer setup for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'tmp/');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage }).single('file');

// Video upload and transcoding route
router.post('/upload', upload, videoController.uploadAndTranscodeVideo);

module.exports = router;
