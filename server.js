require('dotenv').config()
const path = require('path')
const express = require('express')
const app = express()

//middlewares
app.use(express.json())
app.use(express.static(path.join(__dirname,"client","build")))

//init server
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname,"client","build","index.html"))
})
app.listen(process.env.PORT || 5000, () => {
    console.log(`Listening on port ${process.env.PORT || 5000}`)
})