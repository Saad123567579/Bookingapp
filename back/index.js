const express = require('express');
const mongoose = require('mongoose');
const authRouter = require('./routes/auth');
const userRouter = require('./routes/users');
const hotelRouter = require('./routes/hotels');
const roomRouter = require('./routes/rooms');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const app = express();
app.use(cookieParser());
// mongodb+srv://saad:<password>@cluster0.azmorz9.mongodb.net/
// Middleware to parse JSON data in the request body

app.use(express.json());
async function connect () {
    try{
        await mongoose.connect('mongodb+srv://saad:htjpep@cluster0.azmorz9.mongodb.net/Booking');
        console.log('Database Successfully Connected');
    } catch(error) { console.log(error);}
}
app.use('/auth',authRouter);
app.use('/user',userRouter);
app.use('/room',roomRouter);
app.use('/hotel',hotelRouter);

app.listen(4001,listen);
function listen () { console.log("Listening At 4000");connect();}