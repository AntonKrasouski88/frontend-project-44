#!/usr/env node
import readlineSync from "readline-sync";

export const showGameGreeting = () => {
  console.log("Welcome to the Brain Games");
};

export const getNameUser = () => {
  const name = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${name}!`);
  return name;
};

showGameGreeting();
getNameUser();
