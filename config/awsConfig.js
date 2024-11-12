const AWS = require('aws-sdk');

// Load environment variables from .env file
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_BUCKET_REGION,
  sessionToken: process.env.AWS_SESSION_TOKEN // Optional for temporary credentials
});

module.exports = AWS;
