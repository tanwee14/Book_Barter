// db/index.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`);
    console.log(`✅ MongoDB connected`);
    return connection;
  } catch (err) {
    console.error("❌ Failed to connect MongoDB:", err);
    process.exit(1);
  }
};

module.exports = connectDB;
