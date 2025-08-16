import readlineSync from 'readline-sync'

export const showGameGreeting = () => {
  console.log('Welcome to the Brain Games!')
}

export const getNameUser = () => {
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)
  return name
}

export const getRandomNumber = (start, end) => {
  const randomNumber = Math.floor(Math.random() * (end - start + 1) + start)
  return randomNumber
}

export const isCorrectAnswer = (answer, even) => answer === even

export const showResultGame = (result, name) => {
  if (result) {
    console.log(`Congratulations, ${name}!`)
  }
  else {
    console.log(`Let's try again, ${name}!`)
  }
}

export const checkAnswerNumber = () => {
  let answer
  do {
    answer = readlineSync.question('Your answer: ')
    if (answer.length === 0 || Number.isNaN(Number(answer))) {
      console.log('Please answer with a number')
    }
    else {
      return answer
    }
  } while (answer.length === 0 || Number.isNaN(Number(answer)))
}

export const checkAnswerYesNo = () => {
  let answer
  do {
    answer = readlineSync.question('Your answer: ')
    if (answer !== 'yes' && answer !== 'no') {
      console.log('Please answer with \'yes\' or \'no\'.')
    }
    else {
      return answer
    }
  } while (answer !== 'yes' && answer !== 'no')
}
