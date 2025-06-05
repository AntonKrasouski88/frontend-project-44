import readlineSync from "readline-sync";

const showGameGreeting = () => {
  console.log("Welcome to the Brain Games");
};

const geetNameUser = () => {
  return readlineSync.question("May I have your name? ");
};

const greetUser = (name) => {
  console.log(`Hello, ${name}!`);
};

const getRandomNumber = (start, end) => {
  return Math.floor(Math.random() * (end - start + 1) + start);
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
  let flag = true;

  for (let i = 0; i < 3; i += 1) {
    const randomNumber = getRandomNumber(1, 100);
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
const nameUser = geetNameUser();
greetUser(nameUser);
const resultGame = startGameEvenNumber();
if (resultGame) {
  console.log(`Congratulations, ${nameUser}!`);
} else {
  console.log(`Let's try again, ${nameUser}!`);
}
