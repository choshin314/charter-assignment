module.exports = {
    getPoints: (amount) => {
        let amountFloor = Math.floor(amount);
        if (amountFloor > 100) {
            return 50 + ((amountFloor - 100)*2)
        } else if (amountFloor > 50) {
            return amountFloor - 50
        } else return 0
    }
}