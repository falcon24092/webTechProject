// server/config.js
module.exports = {
    AUTH0_DOMAIN: 'webtechproject.auth0.com', // e.g., kmaida.auth0.com
    AUTH0_API_AUDIENCE: 'http://localhost:8083/api/', // e.g., 'http://localhost:8083/api/'
    MONGO_URI: process.env.MONGO_URI || 'mongodb://eaknoppanut:noppanut27@ds139446.mlab.com:39446/mean'
  };