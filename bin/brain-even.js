import readlineSync from "readline-sync";

const showGameGreeting = () => {
  console.log("Welcome to the Brain Games");
};

const getNameUser = () => {
  return readlineSync.question("May I have your name? ");
};

const greetUser = (name) => {
  console.log(`Hello, ${name}!`);
};

const getRandomNumber = (start, end) => {
  const randomNumber = Math.floor(Math.random() * (end - start + 1) + start);
  return randomNumber;
};

const isEvenNumber = (num) => num % 2 === 0;

const getAnswerUser = (num) => {
  console.log("Answer 'yes' if the number is even, otherwise answer 'no'");
  console.log(`Question: ${num}`);
  const answer = readlineSync.question("Your answer: ");
  return answer;
};

const isCorrectAnswer = (answer, even) => {
  return (answer === "yes" && even) || (answer === "no" && !even);
};

const startGameEvenNumber = () => {
  const startRange = 1;
  const endRange = 100;
  let flag = true;

  for (let i = 0; i < 3; i += 1) {
    const randomNumber = getRandomNumber(startRange, endRange);
    const answerUser = getAnswerUser(randomNumber);
    const evenNumber = isEvenNumber(randomNumber);
    const correctAnswer = isCorrectAnswer(answerUser, evenNumber);

    if (correctAnswer) {
      console.log("Correct!");
    } else {
      flag = false;
      break;
    }
  }

  return flag;
};

showGameGreeting();
const nameUser = getNameUser();
greetUser(nameUser);
const resultGame = startGameEvenNumber();
if (resultGame) {
  console.log(`Congratulations, ${nameUser}!`);
} else {
  console.log(`Let's try again, ${nameUser}!`);
}
