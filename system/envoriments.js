require('dotenv').config();

const env = {
    'API_URL': process.env.API_URL,
    'PORT': process.env.PORT ?? 80,
}

module.exports = env