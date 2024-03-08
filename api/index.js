import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';

dotenv.config();

mongoose.connect(process.env.MONGO)
.then(()=>{
    console.log('mongoDb is connected');
})
.catch((err)=>{
    console.log(err);
});


const app=express();

app.listen(3000,()=>{
    console.log('server is running on port 3000')
});


//req=we sent to the API
//res=receive from the API
//it uses userRoutes from api->routes->user.routes.js
app.use('/api/user',userRoutes);