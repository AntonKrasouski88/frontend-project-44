import {
  getAnswerUserYesNo,
  getRandomNumber,
  showRoundResult,
} from './utils.js'

export const brain_prime = () => {
  const startRange = 1
  const endRange = 100
  const number = getRandomNumber(startRange, endRange)

  console.log('Answer "yes" if given number is prime. Otherwise answer "no".')
  console.log(`Question: ${number}`)
  const answerUser = getAnswerUserYesNo()
  const rightAnswer = number % 2 === 0 ? 'yes' : 'no'
  showRoundResult(answerUser, rightAnswer)
  return answerUser === rightAnswer
}
