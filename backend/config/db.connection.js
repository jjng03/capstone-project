const mongoose = require('mongoose')
require('dotenv').config()

const connectionStr = process.env.MONGODB_URL

mongoose.connect(connectionStr)

mongoose.connection.on('connected', () => {
    console.log(`${[new Date().toLocaleDateString() ]} - mongodb connected`)
})

mongoose.connection.on('error', (error) => {
    console.log('mongodb error', error)
})

mongoose.connection.on('disconnected', (disconnected) => {
    console.log('mongodb disconnected', disconnected)
})