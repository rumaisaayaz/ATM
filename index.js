#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let balance = 25000;
console.log(chalk.blue("Your current balance is", +balance));
// question 1
let pinCode = 1110;
let pinCodeAns = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: (chalk.yellow("Enter Your Pin Code "))
    },
]);
if (pinCodeAns.pin === pinCode) {
    console.log(chalk.blue("Entered pin is correct"));
    // question2
    let answer1 = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Please select a Transaction:",
            choices: ["withdraw", "Balance Inquirey", "Fast Cash"],
        },
    ]);
    //check balance
    if (answer1.operation === "Balance Inquirey") {
        console.log(chalk.yellow `Your current balance is`, +balance);
    }
    //withdraw
    else if (answer1.operation === "withdraw") {
        let answer2 = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: (chalk.yellow("Enter Your Amount"))
            },
        ]);
        if (answer2.amount <= balance) {
            let mybalance = balance - answer2.amount;
            console.log(chalk.green `your Outstanding balance is:`, +mybalance);
            console.log(chalk.black("Your transaction has been completed"));
        }
        else {
            console.log(chalk.red("Insufficient balance"));
        }
        // fast cash
    }
    else if (answer1.operation === "Fast Cash") {
        let answer3 = await inquirer.prompt([
            {
                name: "Choose",
                message: (chalk.yellow("Please Select Amount")),
                type: "list",
                choices: ["100", "200", "500", "1000", "2000", "5000"],
            }
        ]);
        if (answer3.Choose <= balance) {
            let mybalancee = balance - answer3.Choose;
            console.log(chalk.green `your Outstanding balance is:`, +mybalancee);
            console.log(chalk.black("Your transaction has been completed"));
        }
    }
}
else {
    console.log(chalk.red("\n\tInvalid Pincode!\n"));
}
