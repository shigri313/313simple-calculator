#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        message: "enter first number",
        type: "number",
        name: "firstnumber",
    },
    { message: "enter second number ", type: "number", name: "secondnumber" },
    {
        message: "select one of the operator to perfom operation",
        type: "list",
        name: "operator",
        choices: [
            "addition",
            "subtruction",
            "multiplication",
            "division",
            "percentage",
        ],
    },
]);
// ?conditional statment
if (answer.operator === "addition") {
    console.log(answer.firstnumber + answer.secondnumber);
}
else if (answer.operator === "multiplication") {
    console.log(answer.firstnumber * answer.secondnumber);
}
else if (answer.operator === "division") {
    console.log(answer.firstnumber / answer.secondnumber);
}
else if (answer.operator === "subtruction") {
    console.log(answer.firstnumber - answer.secondnumber);
}
else if (answer.operator === "percentage") {
    console.log(answer.firstnumber % answer.secondnumber);
}
