const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')

const app = express()

mongoose.connect('mongodb+srv://air:999999@air.vefhu.mongodb.net/air?retryWrites=true&w=majority',{
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.use(express.json())
app.use(routes)

app.listen(3333)