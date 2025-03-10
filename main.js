#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
// 1) computer will generate a random number
// 2) user input for guessing number
// 3) compare user input with computer generated number and show result
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer_1.default.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-10: ",
    }
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulations you guessed a right number");
}
else {
    console.log("OH! You guessed a wrong number");
}
console.log(answers);
