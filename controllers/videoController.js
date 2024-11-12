const fs = require('fs');
const ffmpegService = require('../services/ffmpegService');
const s3Service = require('../services/s3Service');

// Handle video upload and transcoding
const uploadAndTranscodeVideo = async (req, res) => {
  try {
    const { file } = req;
    const { format, resolution } = req.body;

    // Save video to local storage
    const filePath = `./tmp/${file.filename}`;
    const newFileName = await ffmpegService.transcodeVideo(filePath, format, resolution);

    // Upload to S3
    const s3Url = await s3Service.uploadToS3(newFileName);
    res.status(200).json({
      success: true,
      url: s3Url,
    });

  } catch (err) {
    console.error('Error uploading/transcoding video:', err);
    res.status(500).json({ success: false, error: err.message });
  }
};

module.exports = { uploadAndTranscodeVideo };
