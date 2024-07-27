const mongoose = require('mongoose');
require('dotenv').config(); // Corrected the import

const connectDB = async () => {
    try {
       // Print Mongo URI for debugging
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            //useNewUrlParser: true,
            //useUnifiedTopology: true,
            // useFindAndModify: false, // Deprecated in Mongoose 6.0+
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
    } catch (error) {
        console.log(`Error: ${error.message}`.red.bold);
        process.exit(1);
    }
};

module.exports = connectDB;
