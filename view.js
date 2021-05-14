const figlet = require("figlet")
const chalk = require("chalk")
const inquirer = require("inquirer")

function getTitle(){
    return chalk.green(
        figlet.textSync(
            "Tip Calculator App",
            {
                horizontalLayout: "full",
                font: "Nancyj-Underlined"
            }
        )
    )
}

function getTable(model){
    const {billAmount} = model
    const {tipPercent} = model
    const {tip} = model
    const {total} = model
    return [
        {
            "Bill Amount": billAmount,
            "Tip (%)": tipPercent,
            "Tip": tip,
            "Total": total}
    ]
}

function inputForm(model){
    const {billAmount} = model
    const {tipPercent} = model
    return inquirer.prompt([
        {
            name: "billAmount",
            type: "number",
            message: "Bill Amount? ",
            default: billAmount,

        },
        {
            name: "tipPercent",
            type: "number",
            message: "Tip(%)? ",
            default: tipPercent,
                }
    ])
}


function view(model){
    return {
        title: getTitle(),
        table: getTable(model)
    }
}

module.exports = {
    getTitle,
    inputForm,
    view
}
