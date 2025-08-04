import express from "express";
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import router from './routes/QueriesRoute.js';
 




// dotenv config
dotenv.config();
  
// express app
const app = express(); 
 
// middlewares
app.use(cors());
app.use(express.json());



/// Queries router
app.use('/api' , router)

// test route
app.get('/', (req, res) => {
  res.send('API is running...');
});






 
// connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB Now connected..');
    app.listen(process.env.PORT, () =>
      console.log(`🚀 Server running on http://localhost:${process.env.PORT}`)
    );
  })
  .catch((err) => console.error('❌ MongoDB connection failed:', err));
