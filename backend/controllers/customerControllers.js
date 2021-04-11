const { Customer } = require('../models')
const HttpError = require('../errors')

function getCustomerList(req, res, next) {
    try {
        const { name, offset } = req.query;
        const results = Customer.findAll({name, offset: parseInt(offset), limit: 20})
        return res.json({ data: results })
    } catch (err) {
        return next(err);
    }
}

function getCustomerSingle(req, res, next) {
    try {
        const customer = Customer.findById(parseInt(req.params.id))
        if (!customer) throw new HttpError('Customer not found', 404)
        return res.json({ data: customer })
    } catch (err) {
        return next(err)
    }
}

module.exports = { getCustomerList, getCustomerSingle }