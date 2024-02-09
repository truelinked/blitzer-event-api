require('dotenv').config({ path: require('path').join(__dirname, '../.env') });

module.exports = {
    environment: process.env.NODE_ENV || 'development',
    app: {
        // All app based config will be here
        port: process.env.APP_PORT || 3000,
        secret: process.env.APP_SECRET || 'secret-key'
    },
    db: {
        // Mongo based config will be here
        uri: process.env.MONGODB_URI || 'mongodb://localhost:27017/test'
    },
    cache: {
        // Redis based config will be here
        url: process.env.REDIS_URL || 'redis://localhost:6379'
    },
    worker: {
        // Airflow based config will be here
        host: process.env.AIRFLOW_HOST || 'localhost',
        port: process.env.AIRFLOW_PORT || 3000
    },
}