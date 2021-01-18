const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Get the routes 
const userRoute = require('./routes/users');
const exerciseRoute = require('./routes/exercises');

const PORT = process.env.PORT || 5000;

const app = express();

// Middlewares
app.use(cors()) // Understand why to use cors
app.use(express.json());
app.use('/users',userRoute);
app.use('/exercises',exerciseRoute);
// Middleware end

// Database Connection 

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology:true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})


// Connection end

app.listen(PORT,(req,res)=>{
    console.log(`App is ruuning on Port ${PORT}`);
});