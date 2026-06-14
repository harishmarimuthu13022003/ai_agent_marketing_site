const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const connectionString = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017';
    
    // Get database name and clean it up (strip leading slashes and query parameter suffixes)
    let dbName = process.env.DB_NAME || process.env.DB_NAme || 'aether-ai';
    dbName = dbName.replace(/^\//, '').split('?')[0];

    const options = {
      dbName: dbName
    };

    const conn = await mongoose.connect(connectionString, options);
    console.log(`MongoDB Connected: ${conn.connection.host}, Database: ${dbName}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
