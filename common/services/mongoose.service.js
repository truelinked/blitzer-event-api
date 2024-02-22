const mongoose = require('mongoose');

const { db: { uri, autoIndex, poolSize, serverSelectionTimeoutMS, socketTimeoutMS, family} } = require('../../config')

let count = 0;

const options = {
    autoIndex, poolSize,
    serverSelectionTimeoutMS,
    socketTimeoutMS, family
};

const connectWithRetry = () => {
    console.log('MongoDB connection with retry')
    mongoose.connect(uri, options).then(()=>{
        console.log('MongoDB is connected')
    }).catch(err=>{
        console.log('MongoDB connection unsuccessful, retry after 5 seconds. ', ++count);
        setTimeout(connectWithRetry, 5000)
    })
}

connectWithRetry();

exports.mongoose = mongoose;