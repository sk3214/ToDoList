const express = require('express');
const dotenv = require("dotenv");
const connectDB = require('./config/db');

const app = express();

connectDB();

app.use('/',(req,res,next)=>{
    res.send('Hello')
});

app.listen(5000,()=>{
    console.log('Listening on PORT 5000');
})