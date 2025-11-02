import {
  getAnswerUserYesNo,
  getRandomNumber,
  showRoundResult,
} from './utils.js'

export const brainPrime = () => {
  const startRange = 1
  const endRange = 100
  const number = getRandomNumber(startRange, endRange)
  const isPrimeNumber = (num) => {
    if (num < 2) {
      return 'no'
    }
    if (num === 2) {
      return 'yes'
    }
    if (num % 2 === 0) {
      return 'no'
    }
    const limit = Math.ceil(Math.sqrt(num))
    for (let i = 3; i <= limit; i += 2) {
      if (num % i === 0) {
        return 'no'
      }
    }
    return 'yes'
  }
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".')
  console.log(`Question: ${number}`)
  const answerUser = getAnswerUserYesNo()
  const rightAnswer = isPrimeNumber(number)
  showRoundResult(answerUser, rightAnswer)
  return answerUser === rightAnswer
}
