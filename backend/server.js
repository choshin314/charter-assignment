require('dotenv').config()
const path = require('path')
const express = require('express')
const app = express()

const env = process.env.NODE_ENV || "development"
const HttpError = require('./errors')
const { customerRoute, transactionRoute } = require('./routes')

//---------------MIDDLEWARES---------------//

app.use(express.json())

//----------------ROUTES-------------------//

app.use('/api/customers', customerRoute)
app.use('/api/transactions', transactionRoute)

//-------------ERROR HANDLING--------------//

app.use((err, req, res, next) => {
    console.log(err.message);
    HttpError.handleError(err, res);
})

//------------INIT & CATCHALLS-------------//

if (env === 'production') {
    app.use(express.static(path.join(__dirname,"/../client/build")))
    app.get("*", (req, res) => {
        res.sendFile(path.join(`${__dirname}/../client/build/index.html`))
    })
}

app.listen(process.env.PORT || 5000, () => {
    console.log(`Listening on port ${process.env.PORT || 5000}`)
})



