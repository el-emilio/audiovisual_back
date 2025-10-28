import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()

//const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: true}))

app.get('/api/products', (req, res) => {
    console.log(`Actualizacion`)
    res.send('Hello World!')
})

app.post('/api/products', (req, res) => {
    console.log(`Actualizacion`)
    const products=[
        {name: "camara profesional", id: "1"},
        {name: "micro profesional", id: "2"}
    ]

    res.json({
        "productos": products
    });
})

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})
