const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  token: {
    url: process.env.URL,
  }
};
