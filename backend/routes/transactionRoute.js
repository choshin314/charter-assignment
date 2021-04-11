const express = require('express')
const router = express.Router()
const { getTransactionList } = require('../controllers/transactionControllers')

router.get('/', getTransactionList)

module.exports = router;