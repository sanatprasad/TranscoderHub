const redis = require('redis');

// Set up Redis client
const client = redis.createClient({
  host: process.env.REDIS_HOST || 'localhost',
  port: process.env.REDIS_PORT || 6379
});

client.on('error', (err) => {
  console.log(`Redis Client Error: ${err}`);
});

module.exports = client;
