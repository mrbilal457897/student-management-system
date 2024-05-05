#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(10000 + Math.random() * 90000);
let myBalance = 0;
let answer = await inquirer.prompt([
    {
        name: "students",
        type: "input",
        message: "Enter your student name",
        validate: function (value) {
            if (value.trim !== "") {
                return true;
            }
            return "Please enter a name";
        }
    },
    {
        name: "courses",
        type: "list",
        message: "Select th ecourse to enroll",
        choices: ["HTML", "css", "javascript", "python"],
    }
]);
const tutionFee = {
    "HTML": 2000,
    "css": 2100,
    "javascript": 2500,
    "python": 3000,
};
console.log(`\n tuitionFee:${tutionFee[answer.courses]}`);
console.log(`\n Balance: ${myBalance}`);
let paymentType = await inquirer.prompt([
    {
        name: "payment",
        message: "Select method to transfer fee:",
        type: "list",
        choices: ["BankAccount", "Jazzcash", " Easypaisa"],
    },
    {
        name: "amount",
        message: "Transfer Money",
        type: "input",
        validate: function (value) {
            if (value.trim !== "") {
                return true;
            }
            return "Please enter a non empty value";
        },
    }
]);
console.log(`\n You select payment method ${paymentType.payment}`);
const tuitionfees = tutionFee[answer.courses];
const paymentAmount = parseFloat(paymentType.amount);
if (tuitionfees === paymentAmount) {
    console.log(`Congratulations, you have successfully enrolled in ${answer.courses}`);
    let ans = await inquirer.prompt([
        {
            name: "select",
            message: "What do you want",
            type: "list",
            choices: ["Status", "Exit"],
        },
    ]);
    if (ans.select === "Status") {
        console.log("_______Status_______");
        console.log(`\n Student name : ${answer.students}`);
        console.log(`\n Course : ${answer.courses}`);
        console.log(`\n Student ID : ${randomNumber}`);
        console.log(`\n Paid fee : ${paymentType.amount}`);
        console.log(`\n Balance : ${myBalance += paymentAmount}`);
    }
    else {
        console.log(`\n Exiting Student management system \n`);
    }
}
else {
    console.log("Invalid amount due to course");
}
;
