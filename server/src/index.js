const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()


const port = 5000

mongoose.connect(process.env.MongoDb)
.then(()=>{console.log('MongoDB Start');})
.catch((e)=>{console.log(e);})

app.listen(port,()=>{console.log(`Server is Running ${port}`);})
