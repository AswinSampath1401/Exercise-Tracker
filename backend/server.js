const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 4000;

const exerciseRouter = require('./routes/exercises');
const userRouter = require('./routes/users');

// MiddleWare Start

app.use(express.json());
app.use(cors());

// MiddleWare End

// Connection to Database(MongoDb Atlas)

const uri = process.env.ATLAS_URI;
mongoose.connect(uri,{ useNewUrlParser:true , useCreateIndex:true , useUnifiedTopology:true });
const connection = mongoose.connection;

connection.once('open',()=>{
    console.log(`MongoDB Database Connected Sucessfully!!!`);
})

// Connection End

// Routes Begin

app.use('/exercises',exerciseRouter); // Exercise router for exercises
app.use('/users',userRouter); // UserRouter  for users

// Routes end

app.get('/',(req,res)=>{
    res.send('Welcome to Mern Stack');
})

app.listen(PORT,()=>{
    console.log(`App is listening on ${PORT}`);
})

