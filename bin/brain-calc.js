#!/usr/bin/env node
import readlineSync from "readline-sync";
import {
  showGameGreeting,
  getNameUser,
  getRandomNumber,
  isCorrectAnswer,
} from "./utils.js";

const symbolsArr = ["+", "-", "*"];

const getSymbol = (symbols) => {
  return symbols[Math.floor(Math.random() * symbols.length)];
};

const calculateNumbers = (firstNumber, secondNumber, symbol) => {
  let result = 0;
  if (symbol === "+") {
    result = firstNumber + secondNumber;
  }
  if (symbol === "-") {
    result = firstNumber - secondNumber;
  }
  if (symbol === "*") {
    result = firstNumber * secondNumber;
  }
  return result;
};

const getAnswer = (firstNumber, secondNumber, symbol) => {
  console.log("What is the result of the expression?");
  console.log(`Question: ${firstNumber} ${symbol} ${secondNumber}`);
  const answer = readlineSync.question("Your answer: ");
  return Number(answer);
};

const startGameCalculate = () => {
  const startRange = 1;
  const endRange = 100;
  let flag = true;

  for (let i = 0; i < 3; i += 1) {
    const firstNumber = getRandomNumber(startRange, endRange);
    const secondNumber = getRandomNumber(startRange, endRange);
    const symbol = getSymbol(symbolsArr);
    const answerRight = calculateNumbers(firstNumber, secondNumber, symbol);
    const userAnswer = getAnswer(firstNumber, secondNumber, symbol);
    const correctAnswer = isCorrectAnswer(answerRight, userAnswer);

    if (correctAnswer) {
      console.log("Correct!");
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${answerRight}'.`
      );
      flag = false;
      break;
    }
  }

  return flag;
};

showGameGreeting();
const nameUser = getNameUser();
const resultGame = startGameCalculate();
if (resultGame) {
  console.log(`Congratulations, ${nameUser}!`);
} else {
  console.log(`Let's try again, ${nameUser}!`);
}
