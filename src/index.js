// require('dotenv').config({path:'./env'})
import dotenv from 'dotenv'
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from './db/index1.js';
dotenv.config({
  path:'./env'
})

connectDB()
.then(()=>{
  app.listen(process.env.PORT || 11000,()=>{
    console.log(`Server is running at port :${process.env.PORT}`)
  })
})
.catch((err)=>{
  console.log("Mongo db connection failed !! ",err);
  
})