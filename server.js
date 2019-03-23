const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const requireDir = require('require-dir')

// Iniciando o App
const app = express()
app.use(express.json())
app.use(cors())

// Iniciando o DB
const dbuser = process.env.dbuser
const dbpassword = process.env.dbpassword

mongoose.connect(
    `mongodb://${dbuser}:${dbpassword}@ds127802.mlab.com:27802/node-api-products`,
    { useNewUrlParser: true }
)
requireDir('./src/models')

// Rotas
app.use('/api', require('./src/routes'))


let porta = process.env.PORT || 8080;

app.listen(porta, () => {
    console.log('Node app is running on port: ' + port)
})