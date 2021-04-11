const fs = require('fs')

module.exports = {
    getPoints(amount) {
        let amountFloor = Math.floor(amount);
        if (amountFloor > 100) {
            return 50 + ((amountFloor - 100)*2)
        } else if (amountFloor > 50) {
            return amountFloor - 50
        } else return 0
    },
    sortRawData(rawData) {
        const sorted = rawData.sort((a,b) => {
            if (new Date(a.date) < new Date(b.date)) {
                return -1
            } else if (new Date(a.date) > new Date(b.date)) {
                return 1
            } else return 0
        })
        sorted.forEach((el, i) => {
            el.id = i+1
        })
        fs.writeFileSync(path.join(__dirname,"data","sorted.json"), JSON.stringify(sorted))
    }
}