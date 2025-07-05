require('dotenv').config({ path: './env' });
const connectDB = require('./db/index');
const { app } = require('./app');

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`🚀 Server is running on port ${process.env.PORT || 8000}`);
    });
  })
  .catch((err) => {
    console.error('❌ MongoDB connection failed!', err);
  });
