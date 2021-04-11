const express = require('express')
const router = express.Router()
const { getCustomerList, getCustomerSingle } = require('../controllers/customerControllers')

router.get('/', getCustomerList)

router.get('/:id', getCustomerSingle)

module.exports = router;