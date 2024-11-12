const AWS = require('../config/awsConfig');
const fs = require('fs');

const uploadToS3 = async (filePath) => {
  const s3 = new AWS.S3();
  const bucketName = process.env.AWS_BUCKET_NAME;

  const fileStream = fs.createReadStream(filePath);
  const params = {
    Bucket: bucketName,
    Key: `videos/${path.basename(filePath)}`,
    Body: fileStream,
  };

  try {
    const data = await s3.upload(params).promise();
    fs.unlinkSync(filePath); // Remove local file after uploading
    return data.Location; // Return S3 URL
  } catch (err) {
    throw new Error('Error uploading to S3: ' + err.message);
  }
};

module.exports = { uploadToS3 };
