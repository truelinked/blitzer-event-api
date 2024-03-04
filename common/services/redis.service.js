const { createClient } = require('redis');
const { cache: { url } } = require('../../config');

const options = {
    url
}

class BlitzerCacheService {
    constructor() {
        this.client = connect();
    }
}

const connect = () => {
    console.log('Redis connection')
    const client = createClient(options);
    client.on('connect', () => {
        console.log('Redis is connected')
    });
    client.on('error', (err) => {
        console.log('Redis connection unsuccessful, ', err);
    });
    return client;
}

exports.client = connect();