const dotenv = require('dotenv').config()
const express = require('express')
const app = express()
const routes = require('./src/routes')
const cors = require('cors')
const mongoose = require('mongoose')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use(routes)
mongoose.connect(`mongodb+srv://lisbon:${process.env.DB_PASS}@cluster0.4ikfz.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`, {useNewUrlParser:true,useUnifiedTopology: true})
  .then(()=>{
    console.log('DATABASE RUNNING')
  })
  .catch((err)=>{
    console.log(err)
  })


mongoose.Promise = global.Promise
module.exports = app