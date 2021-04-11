const { Transaction } = require('../models')

function getTransactionList(req, res, next) {
    try {
        const { customer } = req.query;
        const transactions = Transaction.findAll(customer)
        return res.json({ data: transactions })
    } catch (err) {
        return next(err);
    }
}


module.exports = { getTransactionList }