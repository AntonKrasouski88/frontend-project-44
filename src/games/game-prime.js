import readlineSync from 'readline-sync'
import {
  getRandomNumber,
  isCorrectAnswer,
} from './utils.js'

const isPrime = (num) => {
  if (num === 2) {
    return true
  }
  if (num < 2 || num % 2 === 0) {
    return false
  }

  for (let i = 2; i < Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false
    }
  }

  return true
}

const getAnswerUser = (num) => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".')
  console.log(`Question: ${num}`)
  let answer
  do {
    answer = readlineSync.question('Your answer: ')
    if (answer !== 'yes' || answer !== 'no') {
      console.log('Please answer with \'yes\' or \'no\'.')
    }
  } while (answer !== 'yes' && answer !== 'no')
  return answer
}

const startGamePrime = () => {
  const startRange = 1
  const endRange = 100
  let flag = true

  for (let i = 0; i < 3; i += 1) {
    const number = getRandomNumber(startRange, endRange)
    const answerRight = isPrime(number)
    const answerUser = getAnswerUser(number)
    const result = isCorrectAnswer(answerRight, answerUser === 'yes')
    if (result) {
      console.log('Correct!')
    }
    else {
      console.log(
        `'${answerUser}' is wrong answer ;(. Correct answer was '${
          answerRight ? 'yes' : 'no'
        }'.`,
      )
      flag = false
      break
    }
  }

  return flag
}

export default startGamePrime
