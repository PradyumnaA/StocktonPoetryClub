import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
mongoose.connect(process.env.MONGO_DB).then(()=>{
    console.log("Connected to DB");
})
const app=express();
app.listen(3000,()=>{
    console.log("Server started on port 3000");
})