
import inquirer from "inquirer";

////    Forex_Currency_Project    ////




let converter = {
    PKR: {
        USD: 276.91,
        EUR: 304.30,
        PKR: 1
    },
    USD: {
        PKR: 281.52,
        EUR: 0.91,
        USD: 1
    },
    EUR: {
        PKR: 308.23,
        USD: 1.09,
        EUR: 1
    }
};

const answer: 
{
    from:"PKR"|"USD"|"EUR" ;
    to:"PKR"|"USD"|"EUR" ;
    amount:number;
} = await inquirer.prompt([
    {
        type: "list",
        name: "from",
        message: "Select the currency you have : ",
        choices: ["PKR", "USD", "EUR"]
    },
    {
        type: "list",
        name: "to",
        message: "Select the currency you want to convert in : ",
        choices: ["PKR", "USD", "EUR"]
    },
    {
        type: "number",
        name: "amount",
        message: "Select the currency you want to convert in : "
    }
])

const { from, to, amount } = answer;

if (from && to && amount) {
    let result = converter [from] [to]* amount;

    console.log(`your currency ${from} to ${to} is ${result}`)
} else {
    console.log("Invalid input has been entered")
}