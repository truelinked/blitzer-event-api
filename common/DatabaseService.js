const mongoose = require('mongoose');

const { db: { uri, autoIndex, serverSelectionTimeoutMS, socketTimeoutMS, family} } = require('../config')


const options = {
    autoIndex,
    serverSelectionTimeoutMS,
    socketTimeoutMS, family
};

const connectDB = async () => {
    try {
      const conn = await mongoose.connect(uri, options);
      console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (err) {
      console.error(`Error connecting to MongoDB: ${err.message}`);
      process.exit(1);
    }
};
  
module.exports = connectDB;