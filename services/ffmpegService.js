const ffmpeg = require('fluent-ffmpeg');

const transcodeVideo = (inputPath, format, resolution) => {
  return new Promise((resolve, reject) => {
    const outputPath = `./tmp/output_${Date.now()}.${format}`;
    ffmpeg(inputPath)
      .size(resolution)
      .output(outputPath)
      .on('end', () => resolve(outputPath))
      .on('error', (err) => reject(err))
      .run();
  });
};

module.exports = { transcodeVideo };
