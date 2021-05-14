function update(input, model){
    const {billAmount} = model
    const newBillAmount = input["billAmount"]
    const newTipPercent = input["tipPercent"]
    const newTip = newBillAmount*newTipPercent/100
    const newTotal = newBillAmount + newTip
    return {
        ...model,
        billAmount: newBillAmount,
        tipPercent: newTipPercent,
        tip: newTip,
        total: newTotal
    }
}

module.exports = {
    update
}