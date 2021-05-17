function update(input, model){
    const {billAmount} = input
    const {tipPercent} = input
    const tip = billAmount*tipPercent/100
    const total = billAmount + tip
    return {
        ...model,
        billAmount: billAmount,
        tipPercent: tipPercent,
        tip: tip,
        total: total
    }
}

module.exports = {
    update
}