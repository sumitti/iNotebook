const mongoose = require('mongoose');
require('dotenv').config()

const mongoURI = process.env.MONGODB_URI;

const connectToMongo = () => {
    mongoose.connect(mongoURI).
    then(() => {
        console.log("Connect to MongoDB Database");
    })
    .catch((err) => {
        console.log("Error to connect to database",err);
    })
}

module.exports = connectToMongo;
