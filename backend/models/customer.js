const customerData = require('../data/MOCK_CUSTOMER_DATA.json')

module.exports = {
    findById(id) {
        return customerData.find(c => c.id === parseInt(id))
    },
    findAll(options) {
        const { name, offset, limit } = options;
        let results = [];
        if (name) {
            const reg = new RegExp(name, 'i')
            results = customerData.filter(c => reg.test(`${c.firstName} ${c.lastName}`))
        } else {
            results = customerData
        }
        results = offset ? 
            results.slice(offset, offset+limit) :
            results.slice(0,limit)

        return results;
    }
}