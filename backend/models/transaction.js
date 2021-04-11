const transactionData = require('../data/MOCK_TRANSACTION_DATA.json')
const { getPoints } = require('../util')

module.exports = {
    findById(id) {
        return transactionData.find(t => t.id === parseInt(id))
    },
    findAll(customerId) {
        let transactions = []
        if (customerId) {
            let runningTotal = 0;
            let points;
            transactionData.forEach(t => {
                if (t.customerId === parseInt(customerId)) {
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
        return transactions;
    }
}