import readlineSync from "readline-sync";

export const showGameGreeting = () => {
  console.log("Welcome to the Brain Games");
};

export const getNameUser = () => {
  const name = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${name}!`);
  return name;
};

export const getRandomNumber = (start, end) => {
  const randomNumber = Math.floor(Math.random() * (end - start + 1) + start);
  return randomNumber;
};

export const isCorrectAnswer = (answer, even) => {
  return answer === even;
};
