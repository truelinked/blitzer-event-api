const mongoose = require('mongoose');

const { db } = require('../config')
let count = 0;

const options = {
    autoIndex: true, 
    poolSize: 10,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
    family: 4
};

const connectWithRetry = () => {
    console.log('MongoDB connection with retry')
    mongoose.connect(db.uri, options).then(()=>{
        console.log('MongoDB is connected')
    }).catch(err=>{
        console.log('MongoDB connection unsuccessful, retry after 5 seconds. ', ++count);
        setTimeout(connectWithRetry, 5000)
    })
}

connectWithRetry();

exports.mongoose = mongoose;