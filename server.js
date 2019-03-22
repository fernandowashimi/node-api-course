const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const requireDir = require('require-dir')
const config = require('./config.json')

// Iniciando o App
const app = express()
app.use(express.json())
app.use(cors())

// Iniciando o DB
mongoose.connect(
    `mongodb://${config.dbuser}:${config.dbpassword}@ds127802.mlab.com:27802/node-api-products`,
    { useNewUrlParser: true }
)
requireDir('./src/models')

// Rotas
app.use('/api', require('./src/routes'))

app.listen(3001)