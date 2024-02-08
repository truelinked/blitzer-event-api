module.exports = {
    environment: 'development',
    app: {
        // All app based config will be here
        port: 3000,
        secret: 'supersecret'
    },
    db: {
        // Mongo based config will be here
        host: 'localhost',
        port: 27017,
        name: 'test',
        uri: 'mongodb://localhost:27017/test'
    },
    cache: {
        // Redis based config will be here
        host: 'localhost',
        port: 6379
    },
    worker: {
        // Airflow based config will be here
        host: 'localhost',
        port: 3000
    },
}