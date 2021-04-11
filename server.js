require('dotenv').config()
const path = require('path')
const fs = require('fs')
const express = require('express')
const app = express()
const customerData = require('./data/MOCK_CUSTOMER_DATA.json')
const transactionData = require('./data/MOCK_TRANSACTION_DATA.json')
const { getPoints } = require('./util')

//middlewares
app.use(express.json())
app.use(express.static(path.join(__dirname,"client","build")))

//get all customers
app.get('/customers', (req, res, next) => {
    const { name } = req.query;
    if (name) {
        const reg = new RegExp(name, 'i')
        let results = customerData.filter(c => reg.test(`${c.firstName} ${c.lastName}`))
        res.json({ data: results })
    } else res.json({ data: customerData })
})

//get customer by id
app.get('/customers/:id', (req, res, next) => {
    const customer = customerData.find(c => c.id === parseInt(req.params.id))
    if (!customer) return res.status(404).json({ error: 'Customer not found', status: 404 })
    res.json({ data: customer })
})

//get all transactions and/or filter by customer and date
app.get('/transactions', (req, res, next) => {
    const { customer } = req.query;
    let transactions = [];
    if (customer) {
        let runningTotal = 0;
        let points;
        transactionData.forEach(t => {
            if (t.customerId === parseInt(customer)) {
                points = getPoints(t.amount);
                runningTotal += points;

                transactions.push({
                    ...t,
                    points,
                    runningTotal
                })
            }
        })
    } else {
        transactions = transactionData.map(t => ({ 
            ...t, 
            points: getPoints(t.amount) 
        }))
    }
    res.json({ data: transactions })
})

//init server
// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname,"client","build","index.html"))
// })
app.listen(process.env.PORT || 5000, () => {
    console.log(`Listening on port ${process.env.PORT || 5000}`)
})


// const sorted = transactionData.sort((a,b) => {
//         if (new Date(a.date) < new Date(b.date)) {
//             return -1
//         } else if (new Date(a.date) > new Date(b.date)) {
//             return 1
//         } else return 0
//     })
// sorted.forEach((el, i) => {
//     el.id = i+1
// })
// fs.writeFileSync(path.join(__dirname,"data","sorted.json"), JSON.stringify(sorted))
