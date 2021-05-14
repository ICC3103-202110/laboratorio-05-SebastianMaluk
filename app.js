const { printTable } = require("console-table-printer")
const {getTitle} = require("./view")
const {inputForm} = require("./view")

async function app(state, update, view){
    const {model, currentView} = state
    const {title, table} = currentView
    // I/O
    console.clear()
    console.log(title)
    printTable(table)
    const {input} = await inputForm(model)
}

module.exports = {
    app
}