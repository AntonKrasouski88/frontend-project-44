import readlineSync from "readline-sync";

const getNameUser = () => {
  const name = readlineSync.question("What is your name: ");
  console.log(`Hello, ${name}!`);
};

export default getNameUser;
