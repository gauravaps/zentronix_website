import express from "express";
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import quryRouter from './routes/QueriesRoute.js';
import userRouter from './routes/UserRoutes.js'
import addressRouter from './routes/AddressRoutes.js'
import productRoutes from './routes/productRoutes.js'
 




// dotenv config
dotenv.config();
  
// express app
const app = express(); 
 
// middlewares
app.use(cors());
app.use(express.json());

   

/// Queries router /api
app.use('/api' , quryRouter)

//User router /api
app.use('/api' , userRouter);

//Address router /api
app.use('/api' , addressRouter);


// product router /api
app.use('/api' , productRoutes)




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
