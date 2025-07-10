require('dotenv').config({ path: './env' });
const express = require('express');
const mongoose = require('mongoose');
const bookRoutes = require('./routes/book.Routes');
const userRoutes = require('./routes/user.Routes');
const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use('/books', bookRoutes);
app.use('/user',userRoutes);


mongoose.connect('mongodb://127.0.0.1:27017/bookbarterdb')
  .then(() => console.log('✅ MongoDB connected'))
  .catch((err) => console.error('❌ Connection error:', err));



app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
