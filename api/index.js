import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import cors from "cors"
import cookieParser from 'cookie-parser';

// const cors= require("cors")

dotenv.config();

mongoose.connect(process.env.MONGO)
.then(()=>{
    console.log('mongoDb is connected');
})
.catch((err)=>{
    console.log(err);
});


const app=express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.listen(3000,()=>{
    console.log('server is running on port 3000')
});


//req=we sent to the API
//res=receive from the API
//it uses userRoutes from api->routes->user.routes.js
app.use('/api/user',userRoutes);
app.use('/api/auth',authRoutes);


//middleware
app.use((err,req,res,next)=>{
    const statusCode=err.statusCode||500;
    const message=err.message||'Internal Server Error';

    res.status(statusCode).json({
        success:false,
        statusCode,
        message,
    });

});