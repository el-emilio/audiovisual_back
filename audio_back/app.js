import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import routerProducts from './routes/routesProducts.js'
import { errorHandler } from './middleware/errors.js'
import connectionMongoDB from './config/db.js'

dotenv.config()

//const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000

//////conexion a mongo//////
connectionMongoDB();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: true}))

app.use('/api/products', routerProducts);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})
